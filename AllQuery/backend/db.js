const mongoose=require("mongoose");
require("dotenv").config();
const connect=async()=>{
    let pass=process.env.db_Password;
    await mongoose.connect(`mongodb+srv://nishagupta14:${pass}@cluster0.jm67guo.mongodb.net/userdata`)
    console.log("mongooDb connected");
}

module.exports=connect;