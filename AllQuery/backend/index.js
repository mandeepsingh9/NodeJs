const express=require("express");
const connect=require("./db.js")
const route=require("./Routes/userRoute.js");
require("dotenv").config();
const app=express();

connect();

app.use(express.json())

app.use("/api",route);



const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`App is Listening on ${port}`);
})


