
const mongoose=require("mongoose");

const userSchema= new mongoose.Schema(
    {
        userid:String,
        name:String,
        email:String,
        mobile:Number,
        city:String,
        job:String,
    }
);

const User=mongoose.model("user",userSchema);

module.exports=User;