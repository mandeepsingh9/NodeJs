const express=require("express");
const connect=require("./Db/db.js")
const userRoute=require("./Router/userRoute.js")
const app=express();
connect();


//middleware

app.use(express.json());

const PORT=8080;

//seperate route ho raha h ye
 app.use('/api',userRoute);
//.............................
app.listen(PORT,()=>{
    console.log(`App is listening on prt ${PORT}`);
})