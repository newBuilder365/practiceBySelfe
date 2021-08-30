// import { ajax } from './ajax-promise';

// function* main() {
//     try {
//         const users = yield ajax('/api/user.json')
//         console.log('users', users)

//         const post = yield ajax('/api/post.json')
//         console.log(post)
//     } catch (error) {
//         console.log(error)
//      }
// }

// let g = main();
// // //调用g.next()，此时generator对象停留在第一个yield，此时返回的是一个包含promise对象的对象{value:Promise, done:false}
// // let result = g.next().value

// // result.then((data) => {
// //     //将promise的返回值传入g.next()中，会作为第一个yied的返回值
// //     let result2 = g.next(data)
// //     console.log('result2', result2)
// //     result2.value.then(data2 => {
// //         let result3 = g.next(data2)
// //         //此时main函数没有第三个yield 此时result3，返回的是一个对象{value:undefined, done:true}
// //         console.log('result3', result3)
// //     })
// // })

function co(generator) {
    const g = generator()
    function handleResult(result) {
        if (result.done) return
        result.value.then(data => {
            handleResult(g.next(data))
        }, error => {
            g.throw(error)
        })
    }
    handleResult(g.next())
}

co(main)


