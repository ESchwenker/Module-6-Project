import React from 'react'
import Home from './pages/Home/Home'
import Start from './pages/Start/Start'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App

