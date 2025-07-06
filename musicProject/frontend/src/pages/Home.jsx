import React from 'react'
import "./Home.css"
import BottomHome from '../components/BottomHome'

const songData = [
  { title: "Ho Hey", artist: "The Lumineers", cover: "path/to/hohey.jpg" },
  { title: "Fix You", artist: "Coldplay", cover: "path/to/fixyou.jpg" },
  { title: "Shape of You", artist: "Ed Sheeran", cover: "path/to/shape.jpg" },
  { title: "Rolling in the Deep", artist: "Adele", cover: "path/to/rolling.jpg" },
  { title: "Believer", artist: "Imagine Dragons", cover: "path/to/believer.jpg" },
  { title: "Sugar", artist: "Maroon 5", cover: "path/to/sugar.jpg" },
  { title: "Shake it Off", artist: "Taylor Swift", cover: "path/to/shake.jpg" },
  { title: "Sorry", artist: "Justin Bieber", cover: "path/to/sorry.jpg" },
  { title: "Midnight Serenade", artist: "Luna", cover: "path/to/midnight.jpg" },
]

const Home = () => {
  return (
    <div className="home-container">

      <header className="home-header">
        <div className="header-left">
          <i className="ri-music-fill"></i>
          <h1>Stream</h1>
        </div>
        <div className="header-right">
          <i className="ri-search-2-line"></i>
        </div>
      </header>
      

      <div className="songs-list">
        {songData.map((song, index) => (
          <div className="song-item" key={index}>
            <div className="song-cover">
              <img src={song.cover} alt={song.title} />
            </div>
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Home
