import React from 'react'
import './Hero.css'
import c1 from './img/01 (1).png'
import c2 from './img/02 (1).png'
import c3 from './img/03 (1).png'
import card1 from './img/Rectangle 30.png'
import card2 from './img/Rectangle 30 (1).png'
import card3 from './img/Group 29.png'
import site from './img/Group 55.png'

const Hero = () => {
    return (
        <div className="hero" id='Hero'>
            <div className="container">
                <div className="hero-container">
                    <div className="hero-top">
                        <div className="hero-topleft">
                            <p className="hero-topleft-info">How it works</p>
                            <h2 className="hero-topleft-text">Understand & Release <br className="desktop-br" /> the stress in 3 steps</h2>
                        </div>
                        <p className="hero-topright-text">
                            Alivio offers as many journals it takes, tackling different areas such as 
                            anxiety, overwhelmedness, sadness, or anger, and a variety of personal 
                            causes, to help you become aware of your emotions, and guide you in how 
                            to manage stress.
                        </p>
                    </div>

                    <div className="hero-bottom">
                        <div className="hero-card">
                            <div className="hero-card-content">
                                <h3 className="hero-card-number"><img src={c1} alt="" /></h3>
                                <h4 className="hero-card-title">Personalize</h4>
                                <p className="hero-card-desc">
                                    Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on.
                                </p>
                            </div>
                            <div className="hero-img-container">
                                <img src={card1} alt="Personalize" className="hero-card-img" />
                            </div>
                        </div>

                        <div className="hero-card hero-card-offset">
                            <div className="hero-card-content">
                                <h3 className="hero-card-number"><img src={c2} alt="" /></h3>
                                <h4 className="hero-card-title">Write & Understand</h4>
                                <p className="hero-card-desc">
                                    Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!
                                </p>
                            </div>
                            <div className="hero-img-container">
                                <img src={card2} alt="Write" className="hero-card-img" />
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-card-content">
                                <h3 className="hero-card-number"><img src={c3} alt="" /></h3>
                                <h4 className="hero-card-title">Alivio!</h4>
                                <p className="hero-card-desc">
                                    Now you are aware, and have a way to manage and overcome your own stress. Alivio today!
                                </p>
                            </div>
                            <div className="hero-img-container">
                                <img src={card3} alt="Alivio" className="hero-card-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero