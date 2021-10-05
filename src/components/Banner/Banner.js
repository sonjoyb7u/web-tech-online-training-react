import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-img"></div>
            <div className="banner-text">
                <h1 className="display-4">Hurry, <br/>
                <span className="fw-bold">Learn From Offline / Online</span></h1>
                <p className="mb-4">Bangladesh's best offline/online Training Institute. Technology is bringing a massive wave of evolution for learning things in different ways.</p>
                <Button className="banner-button fw-bold">Let's Get Started</Button>
            </div>
        </div>
    );
};

export default Banner;