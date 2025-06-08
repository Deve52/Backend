let userModel = require("../models/user.model");
let jwt = require("jsonwebtoken")


const crypto = require('crypto');

function hash(message) {
  return crypto.createHash('sha256').update(message).digest('hex');
}

// Example usage
// const result = hash("hello world");
// console.log("SHA-256 hash:", result);


let registerUser = async (req , res)=>{
    
    let {userName , password} = req.body;

    let hashPass = hash(password)

    let user = await userModel.create({

        userName:userName,
        password: hashPass

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
   let hashPass = hash(req.body.password)
   if(!user){//  if user = null then !null => true
//user not found   
    return res.status(404).json({// return lagana mat bulna
        message:"User not found!"
    })
    
   }

   if(hashPass !== user.password){// if you're not destructuring req.body then you have make condition like this
// 401 means your req didn't complete 
   return  res.status(401).json({
       message:"password didn't match!" 
    })

  }
//200 means everything is okay or your task is created.
   let token = jwt.sign({userId : user._id},"demoSecretString")


  res.status(200).json({
    message:"authentication sucessfully!!",
    token
  })

}

let createPost= async(req,res)=>{

  let {imageUrl,caption} = req.body

  try{

    let token = req.headers.authorization?.split(" ")[1]
  
    
    jwt.verify(token,"demoSecretString")
    
    res.status(200).json({
      message: "authorized",
      imageUrl,
      caption
    })
    
  }catch(err){
    res.status(401).json({
      message:"unauthorized"
    })
  }

}

module.exports = {registerUser,loginUser,createPost}