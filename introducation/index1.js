// 全局对象::就是不需要引入第三方资源 可以直接调用node运行/打印
console.log("hello");
// 直接使用 node 调用js文件：就不必依托一个html文件了：方便开发和使用

// 打印error
console.error("this is error");

// 打印warin信息
console.warn("hello this is warn");

// 上面上个都可以实现信息的打印：也就是调试使用

console.log(__dirname); // 打印pwd
console.log(__filename); // 打印当前文件名

setTimeout(function () {
  console.log("here is setTimeout");
}, 3000);
// 这个是普通的延迟执行：区分间隔执行

// var time = 0;
// setInterval(function () {
//   console.log(time);
// }, 1000);
// 这里是间隔执行：重复无限的进行下去

var time = 0;
var timer = setInterval(function () {
  time++;
  console.log("here after time++ time is :" + time);
  if (time > 6) {
    clearInterval(timer);
    // 清除重复进行的时间间隔器
  }
}, 1000);
// 具体其他的全局对象见官方文档
