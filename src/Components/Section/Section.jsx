import React from 'react'
import './Section.css'
import Main from './img/Image (1).png'
import Card from './img/Card.png'
const Section = () => {
    return (
        <>
            <div className="section" id='Section'>
                <div className="container">
                    <div className="section-container">
                        <div className="section-left">
                            <img className='section-main-img' src={Main} alt="" />
                            <img className='section-card-img' src={Card} alt="" />
                        </div>
                        <div className="section-right">
                            <p className="section-name">
                                Our product
                            </p>
                            <h1 className="section-text">
                                You tell us your stress, <br />
                                We make your diary
                            </h1>
                            <p className="section-info">
                                Everyone experiences it, and in different ways. <br />
                                Let Alivio guide you, in a personalized journal experience, to <br /> overcome your stress.
                            </p>

                            <button className="section-button">
                                Find Your Way
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Section