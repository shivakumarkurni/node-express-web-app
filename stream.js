var fs=require("fs");
var filePath="./sample.txt"
var readable=fs.createReadStream(filePath,
	              {encoding:"utf-8",
                   highWaterMark:32*1024
	               })
// var writable=fs.createWriteStream("./sample.txt");
// readable.on("data",function(chunk){
// 	console.log(chunk.toString())
// 	writable.write(chunk)
// })

var some=fs.duplex("./sample.txt")

