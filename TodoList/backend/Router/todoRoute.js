
const express=require("express")
const {Addtodo,gettodo,deleteTodo}=require("../Controller/todoController.js")
const route=express.Router();

route.get('/todo',gettodo)
route.post('/todo',Addtodo)
route.delete('/todo',deleteTodo)
module.exports=route;