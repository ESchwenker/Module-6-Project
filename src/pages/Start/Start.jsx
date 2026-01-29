import React from 'react'
import './Start.css'
import popcorn_logo from '../../assets/popcorn_logo.png'
import popcorn_banner from '../../assets/popcorn_banner.jpg'

function Start () {
  return (
    <div className="start">
          <div className="nav-start">
            <div className="nav__container-start">
              <div className="nav__info-start">
                <figure className="nav__logo-start">
                    <img className="nav__img-start" src={popcorn_logo}/>
                    <h2 className="title-start">PopcornPix</h2>
                </figure>
                <div className="nav__links-start">
                    <a href="#" className="nav__link-start">Home</a>
                    <a href="#" className="nav__link-start">Find Your Flick</a>
                    <button className="nav__btn-start" a href="#">Contact</button>
                  </div>
                </div>
            </div>
          </div>
          <div className="start__info">
            <div className="start__description">America's #1 site to search for the movies everyone knows and loves.</div>
            <p className="start__tag">ROLL THE REELS... AND START SEARCHING!</p>
            <div className="start__search">
              <input className="start__input" type="text" placeholder="Find your flix with PopcornPix!"/>
              <button className="start__btn">Roll Film</button>
            </div>
          </div>
          <footer className="start__footer">
            <img className="footer__img-start" src={popcorn_banner} alt="popcorn"/>
          </footer>
    </div>
  )
}

export default Start
