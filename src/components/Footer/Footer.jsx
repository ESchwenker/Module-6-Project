import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer__copyright">
      <div class="footer__row">
        <a href="#">
          <div class="footer__logo">
            <img class="footer__img" src="https://png.pngtree.com/png-clipart/20250119/original/pngtree-popcorn-kernels-exploding-into-fluffy-movie-snack-food-clipart-png-image_20185558.png"/>
            <h2 class="title">PopcornPix</h2>
          </div>
        </a>
        <div class="footer__list">
          <a href="#landing" class="footer__link">Beam Me Up, Scotty!</a>
          <a href="#main" class="footer__link">Find Your Flick</a>
          <a href="#" class="footer__link">Contact</a>
        </div>
        <div class="footer__copyright">Copyright &copy; 2025 ElizabethSchwenker</div>
       </div>
       </div>
    </div>
  )
}

export default Footer
