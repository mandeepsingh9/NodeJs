const express=require("express");
const {examplecontroller,example2controller,usercontroller}=require("../controller/userController.js");
const router=express.Router();

router.get('/',examplecontroller)
router.get('/demo',example2controller)


router.post('/user',usercontroller)
module.exports=router
