var express=require("express");
var app=express();
var router=express.Router();


router.get("/",function(request,response){
   response.json({message:"Hello Hyderabad !!"})
})

router.get("/user",function(request,response){
	response.json({message:"This is user end point"})
})
router.get("/customer",function(request,response){

	var customer={
		name:"shiva",
		age:23,
		city:"Kurnool",
		State:"Andhra Pradesh"
	}
	response.json({customer:customer})
})

app.use("/api",router)


var PORT=process.env.PORT || 1337;

app.listen(PORT,function(){
	console.log("server listening at port !!"+ PORT)
})