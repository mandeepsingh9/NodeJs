const User=require("../Models/Usermodel.js")
const examplecontroller=(req,res)=>{

     res.send("This is demo1 controller");
}

const example2controller=(req,res)=>{

    res.send("This is demo2 controller");
}

const usercontroller=async(req,res)=>{

    const data=req.body;

    console.log(data);

    const abc= await User.create(data);
    console.log(abc);
    res.send("sucess")

}
module.exports={examplecontroller,example2controller,usercontroller}