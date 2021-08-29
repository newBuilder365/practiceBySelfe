// const _ = require("lodash");

// const str = "NEVER SAY GOODBTE";

// const log = (v) => {
//     console.log(v)
//     return v
// }

// const split = _.curry((str, sep) => _.split(sep, str))


// const map = _.curry((fn, arr) => _.map(arr, fn))
// // console.log(map(_.toLower)(split(" ")(str)))

// const join = _.curry((arr, sep) => _.join(sep, arr))

// const fn = _.flowRight(join("-"), log, map(_.toLower), log, split(" "))
// console.log(fn(str))

const fp = require("lodash/fp");

const fn = fp.flowRight(fp.join("-"), fp.map(fp.toLower), fp.split(" "))
console.log(fn("NEVER SAY GOODBYE"))