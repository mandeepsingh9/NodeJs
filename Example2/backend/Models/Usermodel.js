const mongoose=require("mongoose");


const userSchema=new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        email:String,
        address:String

    }
)

const User=mongoose.model("user",userSchema);

module.exports=User;