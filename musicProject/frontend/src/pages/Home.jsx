import React from 'react'
import "./Home.css"
import BottomHome from '../components/BottomHome'
const Home = () => {
  return (
    <home-section>
      <home-header>
       <div className='div'>
         <i className="ri-music-fill"></i>
        <h1>Stream</h1>
       </div>
       <i className="ri-search-2-line"></i>

      </home-header>

      <home-songs>
        <div className="song">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="discription">
            <h1>song Title</h1>
            <p>Artist name</p>
          </div>
        </div>
        <div className="song">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="discription">
            <h1>song Title</h1>
            <p>Artist name</p>
          </div>
        </div>
        <div className="song">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="discription">
            <h1>song Title</h1>
            <p>Artist name</p>
          </div>
        </div>
        <div className="song">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="discription">
            <h1>song Title</h1>
            <p>Artist name</p>
          </div>
        </div>
        <div className="song">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="discription">
            <h1>song Title</h1>
            <p>Artist name</p>
          </div>
        </div>
      </home-songs>

      <BottomHome/>

    </home-section>
  )
}

export default Home
