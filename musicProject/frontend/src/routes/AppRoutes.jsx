import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Upload from '../pages/Upload'
import Search from '../pages/Search'
const AppRoutes = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/upload' element={<Upload/>}></Route>
    <Route path='/search' element={<Search/>}></Route>
   </Routes>
    </Router>
  )
}

export default AppRoutes
