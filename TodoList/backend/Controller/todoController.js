
const Todo=require("../Model/todomodel.js")
const Addtodo=async(req,res)=>{

     const data=req.body;
     console.log(data);
     const mongodata= await Todo.create(data);
     console.log(mongodata);
   res.send("suceess");
}

const gettodo=async(req,res)=>{
  const data = await Todo.find();

  res.json(data);
}

const deleteTodo=async(req,res)=>{
    const id=req.body;
    console.log(id);
    const deletedData = await Todo.deleteMany({ userid: id.userid });
        console.log(deletedData);
  
    res.send("deleted")

}

module.exports={Addtodo,gettodo,deleteTodo};