let mongoose = require("mongoose")

let postSchema = new mongoose.Schema({
    imageUrl: String,
    caption: String,
    likeCount: {
        type: Number,
        default: 0 
    }
})

let postModel = mongoose.model("post", postSchema)

module.exports = postModel;