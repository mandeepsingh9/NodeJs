
const mongoose=require("mongoose")


const connect=async()=>{
    
    await mongoose.connect(`mongodb+srv://nishagupta14:Nisha9999@cluster0.jm67guo.mongodb.net/todoList`)
    console.log("mongooDb connected");
}

module.exports=connect;