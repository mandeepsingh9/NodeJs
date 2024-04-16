

 const mongoose=require("mongoose");
 
  const todoSchema=new mongoose.Schema({
    item:String,
    userid:String,
  });

  const Todo=mongoose.model("todo",todoSchema);

  module.exports=Todo;