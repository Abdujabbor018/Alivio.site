import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-container">
                    <h1 className="header-text">
                        Be aware, <br />
                        Manage well.
                    </h1>
                    <p className="header-info">
                        Everyone experiences stress in different ways. <br className="desktop-br" />
                        Let Alivio guide you, in a personalized journal <br className="desktop-br" /> experience, to overcome your stress.
                    </p>
                    <button className="header-button">
                        Find Your Way
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header