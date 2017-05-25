var EventEmitter= require("events");
var fs=require("fs");
var path=require("path");
var emitter=new EventEmitter();

var filePath=path.join(__dirname,"sample23.txt")
// var filePath=__dirname+"/sample.txt"
console.log(filePath)
emitter.on("start reading",function(filePath){
	console.log("start reading the file...!!!")

	fs.readFile(filePath,"UTF-8",function(err,data){

		if(err){
			emitter.emit("error",err)
		}
		else{
		emitter.emit("print_content",data)
	    }
	})
})
emitter.on("print_content",function(data){

	console.log(data)
	emitter.emit("done","successfully done reading the file")
})

emitter.on("error",function(message){
	console.log("There is an error!!!")
	console.log(message);
	console.log("couldn't read the file successfully")
})

emitter.on("done",function(message){
	console.log("Error details:"+message)
})
emitter.emit("start reading",filePath);