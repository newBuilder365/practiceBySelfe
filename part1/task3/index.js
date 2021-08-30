//Promise就是一个类， 在执行这个类的时候会传递一个执行器进去，这个执行器会立即执行
//Promise中有三种状态，pending-等待   fulfilled-成功  rejected-失败   默认为pengding 
//promise中的状态一旦发生改变就不会再发生更改
//resolve  resject是用来改变状态的  resolve  ===>fulfilled      reject ===>rejected
const MyPromise = require("./myPromise")

const promise = new MyPromise(function (resolve, reject) {
    // throw new Error('11111')
    // resolve('成功')
    setTimeout(() => {
        resolve("成功")
    }, 2000)
    // setTimeout(() => {
    //     reject("失败")
    // }, 2000)
})


// promise.then(function (value) {
//     console.log(value)
// }, function (error) {
//     console.log(error)
// })

// promise.then(function (value) {
//     console.log(value)
// }, function (error) {
//     console.log(error)
// })

// promise.then(function (value) {
//     console.log(value)
// }, function (error) {
//     console.log(error)
// })

// function other() {
//     return new MyPromise((resolve, reject) => {
//         resolve('other')
//     })
// }

// var p1 = promise.then((value) => {
//     console.log(value)
//     return p1
// })


// p1.then((value) => {
//         console.log(value)
//     },(error)=>{
//         console.log(error.message)
//     })


promise.then((value)=>{
    console.log(value)
    return 'aaaa'
},(e)=>{
    console.log(e.message)
})
.then((value)=>{
    console.log(value)
})