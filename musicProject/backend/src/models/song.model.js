import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    artist:{
        type: String,
        required: true,
    },
    poster:{
        type: String,
        default:"https://imgs.search.brave.com/gas5x7_Ku4Bk8ELGQPNH_iQWqm1Y_Hih3iGmEXC8_80/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/ODQxLzc4OC9zbWFs/bC9tdXNpY2FsLW5v/dGUtaWNvbi1hbmlt/YXRpb24tdmlkZW8u/anBn",
        
    },
    audioUrl:{
        type: String,
        required: true,
       
    },
})

export default mongoose.model("song",songSchema)