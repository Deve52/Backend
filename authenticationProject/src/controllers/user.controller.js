let userModel = require("../models/user.model");

let registerUser = async (req , res)=>{
    
    let {userName , password} = req.body;

    let user = await userModel.create({

        userName,
        password

    })

    res.status(201).json({
        message: "user got registered !! ",
        user
    })

}

let loginUser = async(req,res)=>{

   let user = await userModel.findOne({
    userName : req.body.userName
   })

   if(!user){//  if user = null then !null => true
//user not found   
    return res.status(404).json({// return lagana mat bulna
        message:"User not found!"
    })
    
   }

   if(req.body.password !== user.password){// if you're not destructuring req.body then you have make condition like this
// 401 means your req didn't complete 
   return  res.status(401).json({
       message:"password didn't match!" 
    })

  }
//200 means everything is okay or your task is created.
  res.status(200).json({
    message:"authentication sucessfully!!"
  })

}

module.exports = {registerUser,loginUser}