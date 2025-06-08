import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import "./Register.css"
import {useForm} from 'react-hook-form'




const Register = () => {
 
  let {register,watch,handleSubmit,reset} = useForm({
    defaultValues:{

      name:"",
      email:"",
      password:""
    }
  })

  let formHandler =(e)=>{
    
    console.log(e);
    reset();
    
  }
  
  return (
    
    <register-section>
     <h1>SoundStream</h1>
     <div className="register-form-section">
     <h1>Create new account</h1>
     <form onSubmit={handleSubmit(formHandler)} action="">
      
        <input 
        {...register('name')}
        type="text" name='name' placeholder='Name' />
      
      
        <input
        {...register('email')}
        type="email" name='email' placeholder='Email' />
      
      
        <input
        {...register('password')}
        type="text" name='password' placeholder='Password' />
      
      
        <input
        
        type="submit"  name='Register' />
      
     </form>
     </div>
    
     <h2>Already have an account?<Link to="/login">Login</Link></h2>
   
    </register-section>
     




  )
}

export default Register
