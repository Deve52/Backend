import React from 'react'
import {BrowserRouter as router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Upload from './pages/Upload'
import AppRoutes from './routes/AppRoutes'
import 'remixicon/fonts/remixicon.css';
import { useSelector } from 'react-redux'
import { deleteMusic } from './store/reducers/musicSlice'
import { useDispatch } from 'react-redux'


const App = () => {
 const store = useSelector((state)=>state)
console.log(store)
let dispatch = useDispatch()
dispatch(deleteMusic())
  return (
    

  <AppRoutes/>

   
  )
}

export default App
