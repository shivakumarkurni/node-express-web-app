var buffer=new Buffer("Hello")
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// buffer.write("GoodMorning");
// console.log(buffer.toString())

var buffer1=new Buffer("GoodMorning")
buffer1.write("Morning");
console.log(buffer1.toString());
console.log(buffer1.write("shi"));

// console.log();