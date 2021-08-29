const promise = new Promise((resolve, reject)=>{
    reject(100)
}).then((res)=>{
    console.log(res)
})