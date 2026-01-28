import React from 'react'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Nav from '../../components/Nav/Nav'


function Home() {
  return (
    <div className="home">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
