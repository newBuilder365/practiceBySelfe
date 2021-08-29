const _ = require("lodash");

const reverse = (arr) => {
    return arr.reverse()
};

const first = (arr) => arr[0]

const toUpperCase = (value) => value.toUpperCase();

// const compose = _.flowRight(toUpperCase, first, reverse)
// console.log(compose(['aaa', 'bbbb', 'ccc']))


function compose(...args) {
    return function (value) {
        return args.reverse().reduce((pre, cur) => { 
           return cur(pre) 
        }, value)
    }
}

const com = compose(toUpperCase, first, reverse)
console.log(com(['aaa', 'bbbb', 'ccc']))