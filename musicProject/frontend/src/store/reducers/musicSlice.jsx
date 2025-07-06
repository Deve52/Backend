import { createSlice } from "@reduxjs/toolkit"

const initialState =[
    {
        imageUrl: "https://example.com/image1.jpg",
        title: "Song Title 1",
        artist: "Artist 1",
        audioUrl: "https://example.com/audio1.mp3",
    },
    {
        imageUrl: "https://example.com/image1.jpg",
        title: "Song Title 2",
        artist: "Artist 2",
        audioUrl: "https://example.com/audio1.mp3",
    },
    {
        imageUrl: "https://example.com/image1.jpg",
        title: "Song Title 3",
        artist: "Artist 3",
        audioUrl: "https://example.com/audio1.mp3",
    },
    {
        imageUrl: "https://example.com/image1.jpg",
        title: "Song Title 3",
        artist: "Artist 3",
        audioUrl: "https://example.com/audio1.mp3",
    },
]

let musicSlice = createSlice({
    name: "music",
    initialState,
    reducers:{ //asynchronous functions yaha banenge
        deleteMusic: (state,action)=>{
            console.log(action);
            
        }
    }
})

export default musicSlice.reducer
export const {deleteMusic}= musicSlice.actions;