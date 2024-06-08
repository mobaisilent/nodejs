// 这里测试回调函数
function sayHi() {
  console.log("Hi");
}
// 函数声明

var sayHello = function () {
  console.log("Hello");
};
// 函数表达式：创建了一个匿名函数

sayHi();
sayHello();
// 调用这两个函数

function callFunction(callback) {
  callback();
}

callFunction(sayHello);

// 下面创建回调函数：理解什么是事件

// 正确地定义 sayBye 函数以接收 name 参数
var sayBye = function (name) {
  console.log(name + ": Bye");
};
// 这里记得使用name作为参数：否则无法正常使用

function callFunction1(callback, name) {
  callback(name); // 在这里，name 被正确地传递给 sayBye 函数
}

callFunction1(sayBye, "erik"); // 将输出 "erik: Bye"





// 下面是正规的回调函数的创建
function callFunction2(callback, name) {  // 接收两个参数：一个callback函数和一个字符串
  callback(name);  // 创建的callback回调了内部的name参数：结合下列实例就解释的通了：前面为函数：然后使用后面的参数信息
}
callFunction2(function (name) {
  console.log(name + ":Bye");
}, "erik");
// 使用回调过来的callback匿名函数和使用一个字符串”erik“ ：：注意下面这里才是调用回调函数
// 两者是一体的 显示定义了一个callFunction2的函数然后调用这个函数
// 仔细看形式就是到定义的时候创建了两个参数：调用的时候使用了两个参数：前者为函数：后者为字符串