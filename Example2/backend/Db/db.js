
const mongoose=require("mongoose");

let Password=process.env.Dbpassword
console.log(Password);
const connect=async()=>{

    await mongoose.connect("mongodb+srv://nishagupta14:Nisha9999@cluster0.jm67guo.mongodb.net/form")
    console.log("mongoodb connected");
}

module.exports=connect;