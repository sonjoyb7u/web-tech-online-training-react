import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="icons">
                    <a href="/" className="fab fa-facebook"></a>
                    <a href="/" className="fab fa-twitter"></a>
                    <a href="/" className="fab fa-instagram"></a>
                    <a href="/" className="fab fa-github"></a>
                    <a href="/" className="fab fa-pinterest"></a>
                </div>
                <div className="credit">&#169; Copyright & Created by <span>Programming Hero's(Batch-4)</span> | all rights reserved.</div>
            </section>
        </footer>
    );
};

export default Footer;