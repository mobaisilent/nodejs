// 这一小节主要是是关于nodejs里面的模块
var adder = function (a, b) {
  return `this num of the 2 numbers is ${a + b}`;
};

console.log(adder(10, 20));
// 使用es6创建函数以及调用函数

var counter = function (arr) {
  return "there arr " + arr.length + " element in the array";
};

// console.log(counter([10, 20, 30]));
// 将这个小块放到utils.js中

// module.exports = counter;
// 导出函数
// 方法1

module.exports.counter = counter;
module.exports.adder = adder;
// 导出对象
// 方法2

module.exports = {
  adder: adder,
  counter: counter,
};
// 方法3

module.exports = {
  adder: function (a, b) {
    return `this num of the 2 numbers is ${a + b}`;
  },
  counter: counter,
};
// 方法4

// 注意区分commonJS和ES6之间模块的区别：注意甄别
