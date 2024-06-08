// 展示作为服务器的运作方式

var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hello from our application");
});

server.listen(3000, "127.0.0.1");
console.log("服务器运行在3000端口上");

// 是有结果的输出和显示的

// 关于模块化文件：将json文件拿出去，将server文件的启动窗口拿出去
