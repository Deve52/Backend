import React, { useState } from 'react'
import "./CreatePosts.css"
import {useForm} from "react-hook-form"
import axios from "axios";
import {useNavigate} from "react-router-dom"



const CreatePosts = () => {
 
let navigate = useNavigate()


  let {register, handleSubmit, reset,watch} = useForm({defaultValues:{

    imageUrl:"",
    caption:""
  }})
  
  let imageUrl = watch("imageUrl")
  let caption = watch("caption")

  let submit=(data)=>{
     
  axios.post("http://localhost:3000/create-post",{
   imageUrl,
   caption
  })
  .then((response)=>{
    console.log(response.data);
    navigate("/")
  })

  console.log(data);
  reset()
  }


  return (
    <div className='createPost'>
      <form onSubmit={handleSubmit(submit)} action="">
       <label htmlFor="">
        ImageUrl:
        <input
        {...register("imageUrl")}
        type="text" placeholder='Enter ImageUrl' name="imageUrl" />
        </label> 
        <label htmlFor="">
        Caption:
        <input 
        {...register("caption")}
        type="text" placeholder='Enter Caption' name="caption" />
        </label>
        <button type='submit'>Submit</button>
        
        </form>      
    </div>
  )
}

export default CreatePosts
