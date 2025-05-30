import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import CreatePosts from './views/CreatePosts'

const App = () => {





  return (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create-post' element={<CreatePosts/>} />
  </Routes>
   
  )
}

export default App
