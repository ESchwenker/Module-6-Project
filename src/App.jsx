import React from 'react'
import Home from './pages/Home/Home'
import Start from './pages/Start/Start'
import MovieDetails from './pages/Details/MovieDetails'
import { Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails />}/>
      </Routes>
    </div>
  )
}

export default App

