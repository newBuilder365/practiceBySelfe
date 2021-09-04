/**
 * 生成器函数的应用
 */

//发号器

// function* createListNumber() {
//     var id = 1;
//     while (true) {
//         yield id++
//     }
// }

// var fn = createListNumber()

// console.log(fn.next().value)
// console.log(fn.next().value)
// console.log(fn.next().value)
// console.log(fn.next().value)
// console.log(fn.next().value)

//改造迭代器
var obj = {
    life: ['吃饭', '上班', '睡觉'],
    study: ['js', 'ts', 'vue', 'react'],
    eat: ['早饭', '午饭', '晚饭'],

    [Symbol.iterator]: function* () {
        let all = [...this.life, ...this.study, ...this.eat]
        for(var item of all){
            yield item
        }
    }
}

for (var item of obj) {
    console.log(item)
}