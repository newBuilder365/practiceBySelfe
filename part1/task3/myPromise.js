const PENDING = "pending";   //等待
const FULFILLED = "fulfilled";  //成功
const REJECTED = "rejected";  //失败

class MyPromise {

    //执行这个类的时候会传入一个执行器，executor,这个执行器会立刻执行
    //这个执行器会返回两个回调函数，resolve, reject 用于改变状态
    constructor(executor) {
        //捕获执行器的异常
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    //状态（初始状态为等待）
    status = PENDING;
    //定义一个值，用于存放成功时的返回值
    value = undefined;
    //定义一个值，用于存放失败时候的原因
    reson = undefined;
    //存储成功的回调（处理多次调用then的时候，将其处理成一个数组，然后遍历数组依次执行）
    successCallback = [];
    //存储失败的回调（处理多次调用then的时候，将其处理成一个数组，然后遍历数组依次执行）
    filedCallback = [];

    //改变状态为成功
    resolve = (value) => {
        //只有在pending状态才可以改变状态（Promise的状态一旦发生改变，就不能再次发生改变）
        if (this.status !== PENDING) return
        this.status = FULFILLED;
        this.value = value;
        // this.successCallback && this.successCallback(this.value)
        //shift()会取数组的第一个元素，并且将原数组的第一个元素删除
        while (this.successCallback.length) this.successCallback.shift()()
    }

    //改变状态为失败
    reject = (reson) => {
        //只有在pending状态才可以改变状态（Promise的状态一旦发生改变，就不能再次发生改变）
        if (this.status !== PENDING) return
        this.status = REJECTED;
        this.reson = reson;
        // this.filedCallback && this.filedCallback(this.reson)
        //shift()会取数组的第一个元素，并且将原数组的第一个元素删除
        while (this.filedCallback.length) this.filedCallback.shift()()
    }

    //这个类里面有一个方法then，then方法里面会返回两个回调，一个用于返回状态为成功时候的返回值，一个用于状态为失败的时候返回失败的原因
    then = (successCallback, filedCallback) => {
        //then方法可以作为链式调用执行，所以then方法的返回的也是一个promise函数
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        //将上一个成功回调的返回值，通过resolve传递给下一个then函数
                        let x = successCallback(this.value)
                        //此时x为常量的情况
                        // resolve(x)
                        //此时考虑了两种情况
                        //为了拿到promise2，使用setTimeOut将里面的代码变为异步执行，等生成promise2后再执行里面的代码
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                     }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        //将上一个成功回调的返回值，通过resolve传递给下一个then函数
                        let x = filedCallback(this.reson)
                        //此时x为常量的情况
                        // resolve(x)
                        //此时考虑了两种情况
                        //为了拿到promise2，使用setTimeOut将里面的代码变为异步执行，等生成promise2后再执行里面的代码
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                     }
                }, 0)
            } else {
                //考虑异步的情况，此时执行then方法时，状态还是pengding
                //此时可以将successCallback 以及 filedCallback两个方法存起来
                this.successCallback.push(()=>{
                    try {
                        //将上一个成功回调的返回值，通过resolve传递给下一个then函数
                        let x = successCallback(this.value)
                        //此时x为常量的情况
                        // resolve(x)
                        //此时考虑了两种情况
                        //为了拿到promise2，使用setTimeOut将里面的代码变为异步执行，等生成promise2后再执行里面的代码
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                     }
                });
                this.filedCallback.push(()=>{
                    setTimeout(() => {
                        try {
                            //将上一个成功回调的返回值，通过resolve传递给下一个then函数
                            let x = filedCallback(this.reson)
                            //此时x为常量的情况
                            // resolve(x)
                            //此时考虑了两种情况
                            //为了拿到promise2，使用setTimeOut将里面的代码变为异步执行，等生成promise2后再执行里面的代码
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                         }
                    }, 0)
                });
            }
        });
        return promise2
    }

}

function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('promise循环调用了'))
    }
    if (x instanceof MyPromise) {
        //上一个then函数的返回值是一个promise对象的情况
        // x.then(value => resolve(value), reson => reject(reson))
        x.then(resolve, reject)
    } else {
        //上一个then函数的返回值是一个常量的情况
        resolve(x)
    }
}

module.exports = MyPromise;