var string="Hello iam from import";
// module.exports
var wish=function(name){
	return "hello good morning"+name;
}

var displayMessage=function(){
	return "this is display message";
}



var sample=function(){
	return "This is a function call"
}
// module.exports={
// 	wish:wish,
// 	display:displayMessage
// };


module.exports.display=function(){

	return "This is my new function"
}
