var events = require("events");

// 创建 eventEmitter 对象
var myEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
myEmitter.on("someEvent", function (message) {
  console.log(message);
});

// 触发事件:看着也像是调用事件
myEmitter.emit("someEvent", "the event was emitted");

var util = require("util");
var events = require("events");

function Person(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);
// 使得Person对象具有发送和监听事件的能力
var xiaoming = new Person("Xiaoming");
var lilei = new Person("Lilei");
// 创建单个对象

var person = [xiaoming, lilei];
// 创建数组对象

person.forEach(function (item) {
  item.on("speak", function (message) {
    console.log(item.name + " said: " + message);
  });
});
// 循环遍历对象：为每个对象添加事件监听器

xiaoming.emit("speak", "hi");
lilei.emit("speak", "my name is lilei");






const EventEmitter = require("events");

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}
// 用继承实现具有创建事件和监听的功能

var xiaoming = new Person("xiaoming");
var lilei = new Person("lilei");
var person = [xiaoming, lilei];

person.forEach(function (item) {
  item.on("speak", function (message) {
    console.log(item.name + " say: " + message);
  });
});

xiaoming.emit("speak", "hi");
lilei.emit("speak", "my name is lilei");
