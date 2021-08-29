//函子
//一个容器， 里面有值，以及一个map对象可以改变容器里面的值，返回的依然是容器

// class Container {

//     constructor(value) {
//         this._value = value;
//     }

//     map(fn) {
//         return new Container(fn(this._value))
//     }

// }

// const functor = new Container(2).map(v => v + 1).map(v => v * v)
// console.log(functor)


// class Container {

//     static of(value){
//         return new Container(value)
//     }

//     constructor(value) {
//         this._value = value;
//     }

//     map(fn) {
//         return Container.of(fn(this._value))
//     }

// }

// const functor = Container.of(2).map(v => v + 1).map(v => v * v)
// console.log(functor)


//MayBe函子
//兼容处理传入值为null 或者undefined的情况

// class MayBe {

//     static of(value) {
//         return new MayBe(value)
//     }

//     constructor(value) {
//         this._value = value;
//     }

//     map(fn) {
//         return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
//     }

//     isNothing() {
//         return this._value === null || this._value === undefined
//     }

// }

// console.log(MayBe.of(null).map(v => v.toUpperCase()))

//Either函子
//由于传入的值，导致函子内部map方法发生错误时，处理，并且抛出异常点

//用于显示异常
// class Left {

//     static of(value) {
//         return new Left(value)
//     }

//     constructor(value) {
//         this._value = value;
//     }

//     map(fn) {
//         //返回this,发生异常时，将传入的异常信息作为函子返回
//         return this
//     }

// }

// //用于正确执行时的返回
// class Right {

//     static of(value) {
//         return new Right(value)
//     }

//     constructor(value) {
//         this._value = value;
//     }

//     map(fn) {
//         return Right.of(fn(this._value))
//     }
// }

// const parseJSON = function (str) {
//     try {
//         return Right.of(JSON.parse(str))
//     } catch (e) {
//         return Left.of({ error: e.message })
//     }
// }

// let r = parseJSON('{name:zz}')
// console.log(r)


//IO函子   
//将副作用控制在可控范围内执行
//将不纯的函数变为纯函数
const fs = require("fs");
const fp = require("lodash/fp");

class IO {

    static of(value) {
        return new IO(function () {
            return value
        })
    }

    constructor(fn) {
        this._value = fn
    }

    map(fn) {
        return new IO(fp.flowRight(fn, this._value))
    }

    join(){
        return this._value()
    }

    flatMap(fn){
        return this.map(fn).join()
    }

}

// let obj = { a: "111" }

// let r = IO.of(obj).map(v=>v.a)._value()
// console.log(r)

let readFile = function (fileName){
    return new IO(function(){
        return fs.readFileSync(fileName, 'utf-8')
    })
}

let print = function(value){
    return new IO(function(){
        // console.log(value)
        return value
    })
}

// IO(IO(x))
// let cat = fp.flowRight(print, readFile)
// console.log(cat('package.json')._value()._value())

let r = readFile('package.json')
.map(fp.toUpper)
.flatMap(print)
.join()

console.log(r)



