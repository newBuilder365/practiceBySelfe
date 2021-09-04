/**
 * 实现可迭代接口
 */

// let obj = {
//     store: ['aa', 'bb', 'cc'],
//     [Symbol.iterator]: function () {
//         var index = 0;
//         return {
//             next: () => {
//                 return {
//                     value: this.store[index],
//                     done: index++ >= this.store.length
//                 }
//             }
//         }
//     }
// }

// for (const item of obj) {
//     console.log('循环体', item)
// }

//迭代器应用
var obj = {
    life: ['吃饭', '上班', '睡觉'],
    study: ['js', 'ts', 'vue', 'react'],
    eat: ['早饭', '午饭', '晚饭'],

    [Symbol.iterator]: function () {
        let all = [...this.life, ...this.study, ...this.eat]
        var index = 0;
        return {
            next: () => {
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}

for (var item of obj) {
    console.log(item)
}


