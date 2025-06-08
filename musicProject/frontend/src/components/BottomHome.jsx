import React from 'react'
import "./BottomHome.css"
import { NavLink } from "react-router-dom";
const BottomHome = () => {
  return (
   
    <div className="container">
        <home-footer1>
       <div className='wrapper'>
         <div className="img">
            <img src="https://images.unsplash.com/photo-1439778615639-28529f7628bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="description">
            <h1>title</h1>
            <p>artist</p>
        </div>
       </div>
        <i className="ri-play-circle-line"></i>
       
    </home-footer1>
    <home-footer2>
        <div className="line"></div>

        <bottom-nav>
            {/* <NavLink 
            to="/"
            className={({isActive}) => isActive ? 'nav-link active': 'nav-link'}
            >    
            <i className="ri-home-line"></i>
            </NavLink> */}

            <i className="ri-home-line"></i>
            <i className="ri-search-line"></i>
            <i className="ri-bookmark-line"></i>
            <i className="ri-user-line"></i>
        </bottom-nav>
    </home-footer2>
    </div>
   
   
    
     
  )
}

export default BottomHome
