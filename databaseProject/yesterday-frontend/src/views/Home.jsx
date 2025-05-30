import React, { useEffect, useState } from 'react'
import './HomeCss.css'
import { useNavigate } from 'react-router-dom'
import CreatePosts from './CreatePosts';
import axios from "axios"


const Home = () => {

 const [posts, setPosts] = useState(null);

  useEffect(()=>{
   axios.get("http://localhost:3000/posts")
   .then((response)=>{
    // console.log(response.data.post);
    setPosts(response.data.post)
   })
  },[posts])

  // console.log(posts);
  


  
    
    let navigate = useNavigate();
  return (
    <div className='main'>
      <button onClick={()=>{
        navigate("/create-post")
      }} >Create Post</button>
      <div className="showPosts">
        {posts ? posts.map((obj,idx)=>{
         return <div key={idx} className="posts"> 
            <img src={obj.imageUrl} alt="" />
            <h2>{obj.caption}</h2>
            <h3>Like : {obj.likeCount}</h3>
        </div>
        })
        : <h1>NO POSTS</h1> }
        
       
      </div>
    </div>
  )
}

export default Home
