import React from 'react';
import { Container } from 'react-bootstrap';
import './Error404.css'

const Error404 = () => {
    return (
        <Container>
            <div className="error mt-5">
                <div className="error-404">
                    <h1 className="display-4 text-center text-capitalize text-danger fw-bolder">Error - 404 - Error</h1>
                    <h2 className="text-center text-dark fw-bold">This Page Is Not Available!!!</h2>
                </div>
            </div>
        </Container>
    );
};

export default Error404;