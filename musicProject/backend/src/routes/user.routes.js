import express from 'express';
import {registerController, loginController} from '../controllers/auth.controller.js';

let router = express.Router();


router.post("/register", registerController )
router.post("/login", loginController )





export default router;
