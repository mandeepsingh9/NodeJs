const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const app=express();

//database connection established

async function connect()
{
   await mongoose.connect("mongodb+srv://nishagupta14:Nisha9999@cluster0.jm67guo.mongodb.net/employee")
   
     console.log("mongoDb connected");
}
  
connect();


    const userschema=new mongoose.Schema({
        name:{
           type:String,
           required:[true,"name is required"],
        },
        mobile:{
            type:Number,
            required:true,
        }
    })

    const User=mongoose.model("user",userschema)        
//.............................................


//.....Midlewarre.................

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())

//...............................
app.post("/api/user",async(req,res)=>{

    const data=req.body;

   
    let obj={
        name:data.name,
        mobile:data.mobile
    }
    console.log(obj);
     
    const abc=await User.create(obj)
    console.log(abc);
    res.send("sucess");
     
})


app.get("/", (req,res)=>{
   res.send("<h1>Nisha mere se udass h </h1>")

})




const PORT=8080;
app.listen(PORT,()=>{
    console.log(`This Port is Listening to ${PORT}`);
})