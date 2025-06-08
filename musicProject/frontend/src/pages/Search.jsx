import React from 'react'
import './Search.css'
import BottomHome from '../components/BottomHome'
const Search = () => {
  return (
  <>
  <div className="search-section">

   <div className="search">
     <i className="ri-search-line"></i>
     <input type="text" placeholder='Find in music' />
   </div>
  </div>
  
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
  </home-songs>

  <BottomHome/>
  </>
  
   
  )
}

export default Search
