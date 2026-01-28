import React from 'react'
import './Nav.css'
import popcorn_logo from '../../assets/popcorn_logo.png'

const Nav = () => {
  return (
    <div className="nav">
      <div class="nav__container">
        <div class="nav__info">
          <figure class="nav__logo">
              <img class="nav__img" src={popcorn_logo}/>
              <h2 class="title">PopcornPix</h2>
          </figure>
          <div class="nav__links">
              <a href="#" class="nav__link">Home</a>
              <a href="#" class="nav__link">Find Your Flick</a>
              <button class="nav__btn" a href="#">Contact</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nav
