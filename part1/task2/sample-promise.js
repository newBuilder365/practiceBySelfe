const promise = new Promise((resolve, reject) => {
    // resolve(100)
    reject(new Error("promise is reject"))
})

promise.then((value) => {
    console.log(value)
}, (error)=>{console.log(error)})