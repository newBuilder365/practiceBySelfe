// //Promise就是一个类， 在执行这个类的时候会传递一个执行器进去，这个执行器会立即执行
// //Promise中有三种状态，pending-等待   fulfilled-成功  rejected-失败   默认为pengding 
// //promise中的状态一旦发生改变就不会再发生更改
// //resolve  resject是用来改变状态的  resolve  ===>fulfilled      reject ===>rejected
// const MyPromise = require("./myPromise")

// const promise = new MyPromise(function (resolve, reject) {
//     // throw new Error('11111')
//     // resolve('成功')
//     setTimeout(() => {
//         resolve("成功")
//     }, 2000)
//     // setTimeout(() => {
//     //     reject("失败")
//     // }, 2000)
// })


// // promise.then(function (value) {
// //     console.log(value)
// // }, function (error) {
// //     console.log(error)
// // })

// // promise.then(function (value) {
// //     console.log(value)
// // }, function (error) {
// //     console.log(error)
// // })

// // promise.then(function (value) {
// //     console.log(value)
// // }, function (error) {
// //     console.log(error)
// // })

// // function other() {
// //     return new MyPromise((resolve, reject) => {
// //         resolve('other')
// //     })
// // }

// var p1 = promise.then((value) => {
//     console.log(value)
//     return p1
// })


// p1.then((value) => {
//         console.log(value)
//     },(error)=>{
//         console.log(error.message)
//     })


// // promise.then((value)=>{
// //     console.log(value)
// //     return 'aaaa'
// // },(e)=>{
// //     console.log(e.message)
// // })
// // .then((value)=>{
// //     console.log(value)
// // })

const fp = require('lodash/fp')
// 数据
// horsepower 马力, dollar_value 价格, in_stock 库存
const cars = [{
    name: 'Ferrari FF',
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true
},
{
    name: 'Spyker C12 Zagato',
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
},
{
    name: 'Jaguar XKR-S',
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
},
{
    name: 'Audi R8',
    horsepower: 625,
    dollar_value: 114200,
    in_stock: false
},
{
    name: 'Aston Martin One-7',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
},
{
    name: 'Pagani Huayara',
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: true
}
]

let _underscore = fp.replace(/\W+/g, '_') // <--无须改动

// 1.实现 sanitizeNames 函数
let findName = function (field, data) {
    return data.map(v => v[field])
}

let sanitizeNames = fp.flowRight(fp.map(fp.flowRight(_underscore, fp.toLower)), fp.curry(findName)('name'))
console.log(sanitizeNames(cars))