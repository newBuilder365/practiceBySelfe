// exports.foo = done => {
//     console.log('hello gulp')
//     done()
// }

// exports.default = done => {
//     console.log('hello default task')
//     done()
// }


// //这种方式不被推荐
// // const gulp = require("gulp");
// // gulp.task('bar',(done)=>{
// //     console.log('hello bar')
// //     done()
// // })


// //servies相当于同步执行，执行第一个task1后才执行第二个task2
// //parallel相当于并行执行，类似Promise.all，最后按照顺序返回执行结果
// const { series, parallel } = require('gulp');

// const task1 = done => {
//     setTimeout(() => {
//         console.log('running task1...')
//         done()
//     }, 1000)
// }

// const task2 = done => {
//     setTimeout(() => {
//         console.log('running task2...')
//         done()
//     }, 1000)
// }

// const task3 = done => {
//     setTimeout(() => {
//         console.log('running task3...')
//         done()
//     }, 1000)
// }

// exports.foo = series(task1, task2, task3)
// exports.bar = parallel(task1, task2, task3)

// exports.callback = done => {
//     console.log('hello callback...')
//     done()
// }

// exports.callback_eror = done => {
//     console.log('callback_error~~~~')
//     done(new Error('task failed'))
// }

// exports.promise = () =>{
//     console.log('promise...')
//     return Promise.resolve()
// }

// exports.promise_error=()=>{
//     console.log('promise_error')
//     return Promise.reject(new Error('promiseError.....'))
// }

const fs = require('fs');

exports.stream = ()=>{
    const readStream = fs.createReadStream('package.json')
    const writeStream = fs.createWriteStream('temp.txt')
    readStream.pipe(writeStream)
    return readStream
}