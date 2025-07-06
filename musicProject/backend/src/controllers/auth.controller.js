import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookie from "cookie-parser";

dotenv.config();

let registerController = async (req, res) => {

   let {name, email , password} = req.body;

   let hashPassword = await bcrypt.hash(password,10);

   

   let user = await userModel.create({
    name,
    email,
    password: hashPassword
   })

    let token = jwt.sign({userId: user._id}, process.env.SECRET_KEY,{expiresIn:"1d"});

    res.cookie("token", token,)

   res.status(201).json({
      message: "User registered successfully",
      user:{
         userId: user._id,
         name: user.name,
      },
      token
      
   })

   



}// This code defines a registerController function that handles user registration.
let loginController = async (req, res) => {

   let {email, password} = req.body;

   let user = await userModel.findOne({
      email
   })
   if(!user){
      return res.status(401).json({
         message: "invalid email or password",
      })
   }
   // if(await bcrypt.hash(password,10) !== user.password){
   //    return res.status(401).json({
   //       message:"invalid email or password",
   //    })
   // }

   let isPasswordValid = await bcrypt.compare(password, user.password);
   if(!isPasswordValid){
      return res.status(401).json({
         message: "invalid email or password",
      })
   }

   let token = jwt.sign({userId: user._id}, process.env.SECRET_KEY,{expiresIn:"1d"});

   res.cookie("token",token)

   res.status(200).json({
      message: "User logged in successfully",
      user:{
         userId: user._id,
         name: user.name,
      },
      token
   })


}

export {
   registerController,
   loginController
}
