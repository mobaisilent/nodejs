// const counter = require("./index3.js");

// console.log(counter([10, 20, 30]));
// 通过模块化引用实现功能 ：： 简单的模块化应用
// 方法1

const utils = require("./index3");
// 接收前面导出的对象

console.log(utils.counter([10, 20, 30]));
console.log(utils.adder(100, 200));
