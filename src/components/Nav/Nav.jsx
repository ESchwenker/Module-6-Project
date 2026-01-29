import React from 'react'
import './Nav.css'
import popcorn_logo from '../../assets/popcorn_logo.png'

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__info">
          <figure className="nav__logo">
              <img className="nav__img" src={popcorn_logo}/>
              <h2 className="title">PopcornPix</h2>
          </figure>
          <div className="nav__links">
              <a href="#" className="nav__link">Home</a>
              <a href="#" className="nav__link">Find Your Flick</a>
              <button className="nav__btn" a href="#">Contact</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nav
