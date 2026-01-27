import React, { useRef, useState } from 'react';
import './Middle.css';
import Video from './img/video1.mp4';

const Middle = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="middle">
            <div className="container">
                <div className="middle-container">
                    <div className="middle-texts">
                        <h1 className="middle-text">
                            Let's hear about <br className="desktop-br" /> Kayla's success story
                        </h1>
                        <p className="middle-info">
                            See how well Alivio works in a real customer’s life.
                        </p>
                        <button className="cssbuttons-io-button middle-button">
                            Get started
                            <div className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                    </div>

                    <section className="video-section">
                        <div className="video-wrapper-inner">
                            <div className="orange-glow"></div>
                            <div className="video-wrapper" onClick={toggleVideo}>
                                <video ref={videoRef} className="main-video" loop muted playsInline>
                                    <source src={Video} type="video/mp4" />
                                </video>
                                {!isPlaying && (
                                    <div className="play-button">
                                        <div className="triangle"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Middle;