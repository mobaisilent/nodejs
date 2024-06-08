var readMe = fs.readFile("./readMe.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFileSync("writeMe.txt", data);
    console.log("读取数据完成");
  }
});  
// 异步读入 然后由于函数结构执行同步写入：：也就是既有同步也有异步