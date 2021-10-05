import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MiniBanner.css'

const MiniBanner = (props) => {
    return (
        <div className="mini-banner-img">
            <div className="mini-banner-text">
                <h1 className="display-4 text-center fw-bold mt-5">{props.title}</h1>
            </div>
        </div>
    );
};

export default MiniBanner;