import express from 'express';
import multer from 'multer';
import { getAllSongsController, uploadAudioController, getSongByIdController,searchSongsController } from '../controllers/song.controller.js';
import jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

let router = express.Router();

let storage = multer.memoryStorage();
let upload = multer({ storage: storage });


router.use((req,res,next)=>{
    let token = req.cookies.token;

    console.log(token);
    
    if(!token){
        console.log("No token found");
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }


    try{
              // Verify the token
              console.log("Verifying token");
        let decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; //why we use it?"??"
        
           next();

    }catch(err){
        return res.status(401).json({
            message: "Invalid token"
          
        })
    }
})

router.post("/upload", upload.single("audio"), uploadAudioController )
router.get("/",getAllSongsController)
router.get("/search", searchSongsController)
router.get("/:songId",getSongByIdController)



export default router;