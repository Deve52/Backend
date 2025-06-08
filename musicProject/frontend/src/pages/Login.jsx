import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import "./Login.css"
const Login = () => {

  let {register,watch,reset,handleSubmit} = useForm({defaultValues:{
    name:"",
    password:""
  }})

  let formHandler=(e)=>{
    
    console.log(e);
    reset()
    
  }
  return (
   <login-section>
     <h1>SoundStream</h1>
     <div className="login-form-section">
     <h1>Welcome Back</h1>
     <form onSubmit={handleSubmit(formHandler)} action="">
      
        <input 
        {...register('name')}
        type="text" name='name' placeholder='Name' />      
      
        <input
        {...register('password')}
        type="text" name='password' placeholder='Password' />
      
      
        <input
        
        type="submit"  name='Register' />
      
     </form>
     </div>
    
     <h2>Don't have an account<Link to="/register">Register</Link></h2>
   
    </login-section>
     
  )
}

export default Login
