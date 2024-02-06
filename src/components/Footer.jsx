import React from 'react'
import './Footer.scss'
import Contact from './Contact'

const Footer = () => {
  return (
   <div>
    <Contact/>
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla consectetur vehicula nisi,non pretium justo aliquet eget.
                </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla consectetur vehicula nisi,non pretium justo aliquet eget.
                </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>GLAMZ</span>
          <span className='copyright'>© CopyRight 2024. All Rights Recieved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt=""  height="80px"/>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Footer
