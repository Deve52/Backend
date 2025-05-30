let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    userName : String,
    password: String
})

let userModel = mongoose.model("user", userSchema);




module.exports = userModel;