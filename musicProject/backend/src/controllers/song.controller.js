import {uploadAudio} from "../services/storage.service.js";
import songModel from "../models/song.model.js";

export let uploadAudioController = async (req, res)=>{


    let result = await uploadAudio(req.file.buffer);
    let {title, artist } = req.body;
    console.log(title, artist);
    console.log(req.body.title, req.body.artist);
    

  let song = await songModel.create({
    title,
    artist,
    audioUrl: result.url
  })


res.status(201).json({
    message: "Song uploaded successfully",
    song: {
      songId: song._id,
      title: song.title,
      artist: song.artist,
      poster: song.poster,
      audioUrl: song.audioUrl
    }
  })    
}


export let getAllSongsController = async (req, res) => {

  let songs = await songModel.find({});

  res.status(200).json({

    message: "All songs fetched successfully",
    songs: songs
  })
}

export let getSongByIdController = async (req, res) => {
     let songId = req.params.songId;

     let song = await songModel.findOne({_id: songId})

     if(!song){
        return res.status(404).json({
            message: "Song not found"
        })
     }
      res.status(200).json({
          message: "Song fetched successfully",
          song
      })
}

export let searchSongsController = async (req, res) => {
  let searchQuery = req.query.keyword;

  let song = await songModel.find({
   $or:[
      {title: {$regex: searchQuery, $options: "i"}}, // i for case-insensitive
      {artist: {$regex: searchQuery, $options: "i"}}
   ]
  })
  res.status(200).json({
    message: "Songs fetched successfully",
    songs: song
  })
}