// world wild web   => W. W. W

//先转化成数组["world", "wild", "web"]
//将数据内元素转化成大写 ["WORLD", "WILD", "WEB"]
//将数组内字符串首个字符提出 ["W", "W", "W"]
//将数组转化成字符串 W. W. W

const fp = require("lodash/fp");

// const firstLetterToUpper = fp.flowRight(fp.join(". "), fp.map(fp.first), fp.map(fp.toUpper), fp.split(" "))
const firstLetterToUpper = fp.flowRight(fp.join(". "), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(" "))
console.log(firstLetterToUpper("world wild web"))