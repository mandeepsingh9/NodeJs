const User=require("../models/Usermodel.js")



//.....................find..................................//
const getuserController= async(req,res)=>
{
     const getAllData= await User.find({name:"mandeep",userid:"123"});

     res.send(getAllData);

}


const getbyidController=async(req,res)=>{
 
    const id=req.params.id;
    console.log(id);
     const getbyid= await User.findById(id)
     
      res.send(getbyid);
}
const getbyAnyOneController=async(req,res)=>{

       const data=req.query.email;
       console.log(data);
         const getbyitem= await User.findOne({email:data})
       res.json(getbyitem)
}


//....................................................//

//......Create........................................//
const createuserController=async(req,res)=>{
         
       const data=req.body;

       console.log(data);

       const newdata=new User(data);

       await newdata.save();

       console.log(newdata);
       res.send("sucess");
    
    }



    // .......update using PUT Method................................//
         
    const updateUserController=async(req,res)=>
    {
        const id=req.params.id;
        const obj=req.body;

       
        const updatedata=await User.findByIdAndUpdate(id,obj,{ new: true })
        console.log(updatedata);
    res.send(obj)
    }


    //.........update using Patch Method........................//



module.exports={getuserController,createuserController,getbyidController,getbyAnyOneController,updateUserController}