
const express=require("express");
const {getuserController,createuserController,getbyidController,getbyAnyOneController,updateUserController}=require("../Controller/userController.js");
const route=express.Router()

route.get("/",(req,res)=>{
    res.send("Router testing")
})

route.post("/user",createuserController)

//......................find.................//
route.get("/user",getuserController)

 //route.get("/user/:id",getbyidController)
route.get("/user/name/",getbyAnyOneController)
//.........update using put............//

route.put("/user/:id",updateUserController)


module.exports=route;