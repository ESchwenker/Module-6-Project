import React from 'react'
import './Nav.css'
import popcorn_logo from '../../assets/popcorn_logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <section id="nav">
      <div className="nav__container">
        <div className="nav__info">
          <figure className="nav__logo">
              <img className="nav__img" src={popcorn_logo}/>
              <h2 className="title">PopcornPix</h2>
          </figure>
          <div className="nav__links">
              <Link to="/" className="nav__link">Home</Link>
              <Link to="/" className="nav__link">Find Your Flick</Link>
              <button className="nav__btn" a href="#">Contact</button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Nav
