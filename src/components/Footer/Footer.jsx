import React from 'react'
import './Footer.css'
import popcorn_logo from '../../assets/popcorn_logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
      <div className="footer__row">
        <a href="#">
          <div className="footer__logo">
            <img className="footer__img" src={popcorn_logo}/>
            <h2 className="title">PopcornPix</h2>
          </div>
        </a>
        <div className="footer__list">
          <a href="#landing" className="footer__link">Beam Me Up, Scotty!</a>
          <a href="#main" className="footer__link">Find Your Flick</a>
          <a href="#" className="footer__link">Contact</a>
        </div>
        <div className="footer__copyright">Copyright &copy; 2025 ElizabethSchwenker</div>
       </div>
       </div>
    </div>
  )
}

export default Footer
