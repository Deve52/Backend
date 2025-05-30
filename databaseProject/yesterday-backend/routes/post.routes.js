let express = require("express");
const postController = require("../controllers/post.controllers");

let router = express.Router();

router.post("/create-post", postController.createPost)
router.get("/posts", postController.showPost)




module.exports = router;