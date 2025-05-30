let postModel = require("../models/post.model")

let createPost = async (req, res)=>{

    let {imageUrl , caption , likeCount}= req.body;

    let post=await postModel.create({
        imageUrl,
        caption,
        likeCount
    })
    res.status(201).json({
        message:"post has created",
        post: post
    })

}
let showPost = async (req, res)=>{

    let post = await postModel.find()
    res.status(200).json({
        message:"all posts are:",
        post: post
    })

}

module.exports = {createPost, showPost}