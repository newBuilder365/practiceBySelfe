const PENDING = "pending";   //等待
const FULFILLED = "fulfilled";  //成功
const REJECTED = "rejected";  //失败

class MyPromise {

    //执行这个类的时候会传入一个执行器，executor,这个执行器会立刻执行
    //这个执行器会返回两个回调函数，resolve, reject 用于改变状态
    constructor(executor) {
        executor(this.resolve, this.reject)
    }

    //状态（初始状态为等待）
    status = PENDING;
    //定义一个值，用于存放成功时的返回值
    value = undefined;
    //定义一个值，用于存放失败时候的原因
    reson = undefined;
    //存储成功的回调
    successCallback = undefined;
    //存储失败的回调
    filedCallback = undefined;

    //改变状态为成功
    resolve = (value) => {
        //只有在pending状态才可以改变状态（Promise的状态一旦发生改变，就不能再次发生改变）
        if (this.status !== PENDING) return
        this.status = FULFILLED;
        this.value = value;
        this.successCallback && this.successCallback(this.value)
    }

    //改变状态为失败
    reject = (reson) => {
        //只有在pending状态才可以改变状态（Promise的状态一旦发生改变，就不能再次发生改变）
        if (this.status !== PENDING) return
        this.status = REJECTED;
        this.reson = reson;
        this.filedCallback && this.filedCallback(this.reson)
    }

    //这个类里面有一个方法then，then方法里面会返回两个回调，一个用于返回状态为成功时候的返回值，一个用于状态为失败的时候返回失败的原因
    then = (successCallback, filedCallback) => {
        if (this.status === FULFILLED) {
            successCallback(this.value)
        } else if (this.status === REJECTED) {
            filedCallback(this.reson)
        } else {
            //考虑异步的情况，此时执行then方法时，状态还是pengding
            //此时可以将successCallback 以及 filedCallback两个方法存起来
            this.successCallback = successCallback;
            this.filedCallback = filedCallback;
        }
    }

}

module.exports = MyPromise;