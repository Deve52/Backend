let express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller")

router.post("/register",userController.registerUser)

router.post("/login",userController.loginUser)
//post is used for login though we are not creating any post.

router.post("/createPost",userController.createPost)


module.exports = router;
