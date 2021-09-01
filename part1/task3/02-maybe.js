const fp = require("lodash/fp")

// MayBe 函子
class MayBe {
  static of(value) {
    return new MayBe(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }
}


// let r = MayBe.of('Hello World')
//           .map(x => x.toUpperCase())
// console.log(r)


// let r = MayBe.of(null)
//           .map(x => x.toUpperCase())
// console.log(r)


// let r = MayBe.of('hello world')
//           .map(x => x.toUpperCase())
//           .map(x => null)
//           .map(x => x.split(' '))
// console.log(r)

// let maybe = MayBe.of([5, 6, 1])
// let ex1 = value => value + 1
// // console.log([5, 6, 1].map(x => fp.map(x, v => v +1)))
// // console.log(maybe.map(value => fp.map(x => fp.add(x, 1), value)))

// let xs = MayBe.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
// console.log( xs.map(fp.first) )

// let safeProp = fp.curry(function (x, o) {
//   return MayBe.of(o[x])
// })
// let user = { id: 2, name: 'Albert' }

// // 1.实现 ex3
// let ex3 = () => safeProp('name')(user).map(fp.first)
// // 2.测试打印
// console.log(ex3()) // Maybe { _value: 'A' }

let ex4 = (n) => {
  return MayBe.of(n).map(parseInt)
}

console.log(ex4('7R'))   // Maybe { _value: 7 }
console.log(ex4('7.6B'))  // Maybe { _value: 7 }
console.log(ex4('8.2G')) // Maybe { _value: 8 }

console.log(ex4(null))      // Maybe { _value: null }
console.log(ex4(undefined)) // Maybe { _value: undefined }

console.log(ex4('i7.5'))    // Maybe { _value: NaN }
console.log(ex4('abc'))     // Maybe { _value: NaN }