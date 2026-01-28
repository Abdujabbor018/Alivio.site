import React, { useState } from 'react';
import axios from "axios";
import './Navbar.css';
import Logo from './img/Logo (5).png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");

    // Telegram yuborish funksiyasi
    const sendMessage = (e) => {
        e.preventDefault();

        const token = "8586580877:AAEazv2Y3aPuc9jNS6_ApbFDYgWfpiFf23k";
        const chat_id = 5258999486;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const text = `📧 Yangi obunachi:\nEmail: ${email}`;

        axios.post(url, { chat_id, text })
            .then(() => {
                alert("Ma'lumot Telegram botga yuborildi ✅");
                setEmail("");
                setIsModalOpen(false);
            })
            .catch(() => {
                alert("Xatolik yuz berdi ❌");
            });
    };

    return (
        <>
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
                            <li className="navbar-item"><a className='navbar-link' href="#Middle">Why Alivio</a></li>
                            <li className="navbar-item"><a className='navbar-link' href="#Hero">Solutions</a></li>
                            <li className="navbar-item"><a className='navbar-link' href="#Section">Community</a></li>
                            <li className="navbar-item"><a className='navbar-link' href="#pricing">Pricing</a></li>
                            <li className="navbar-buttons-mobile">

                                <button className='navbar-button' onClick={() => { setIsModalOpen(true); setIsOpen(false); }}>Sign in</button>
                                <button className='navbar-button'>Start Trial</button>
                            </li>
                        </ul>

                        <ul className='navbar-buttons'>

                            <button className='navbar-button sign-in' onClick={() => setIsModalOpen(true)}>Sign in</button>
                            <button className='navbar-button'>Start Trial</button>
                        </ul>
                    </div>
                </div>
            </div>


            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={sendMessage}>
                        <h2>Sign In</h2>
                        <input
                            type="email"
                            placeholder="
Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit"><span>Send to Telegram</span></button>
                    </form>
                </div>
            )}
        </>
    );
};