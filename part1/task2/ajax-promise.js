function ajax(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}

// ajax('/api/user.json').then(function (res) {
//     console.log(res)
// }, function (error) {
//     console.log(error)
// })

export { ajax }