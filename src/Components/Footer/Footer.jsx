import React from 'react'
import './Footer.css'
import FooterLogo from './Alivio.png'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer-container">
                <ul className="footer-list">
                    <li className='footer-item'><img src={FooterLogo} alt="" className="footer-logo" /></li>
                    <li className="footer-item">
                        <a href="" className="footer-link">Why Alivio</a>
                    </li>
                    <li className="footer-item">
                        <a href="" className="footer-link">Solutions</a>
                    </li>
                    <li className="footer-item">
                        <a href="" className="footer-link">Community</a>
                    </li>
                    <li className="footer-item">
                        <a href="" className="footer-link">Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer