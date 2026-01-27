import React, { useState } from 'react';
import './Navbar.css';
import Logo from './img/Logo (5).png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar-container">
                    <img src={Logo} alt="Logo" className="navbar-logo" />
                    
                    <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
                        <li className="navbar-item"><a className='navbar-link' href="#why">Why Alivio</a></li>
                        <li className="navbar-item"><a className='navbar-link' href="#solutions">Solutions</a></li>
                        <li className="navbar-item"><a className='navbar-link' href="#community">Community</a></li>
                        <li className="navbar-item"><a className='navbar-link' href="#pricing">Pricing</a></li>
                        <li className="navbar-buttons-mobile">
                            <button className='navbar-button'>Sign in</button>
                            <button className='navbar-button'>Start Trial</button>
                        </li>
                    </ul>

                    <ul className='navbar-buttons'>
                        <button className='navbar-button sign-in'>Sign in</button>
                        <button className='navbar-button'>Start Trial</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};