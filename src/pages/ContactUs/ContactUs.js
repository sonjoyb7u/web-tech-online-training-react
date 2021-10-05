import React from 'react';
import { Form, Button, FloatingLabel, Container, Row, Col } from 'react-bootstrap';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <MiniBanner title="Contact Us"></MiniBanner>
                </Col>
            </Row>
            <Row>
                <Col>
                    <section className="contact-us">
                        <div className="contact-us-head">
                            <h3 className="d-block text-center display-6 fw-bold" style={{ color: "rgb(255, 81, 47)" }}>Get In Touch</h3>
                        </div>
                        <div className="contact-us-content">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter full name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject here" />
                                </Form.Group>
                                <FloatingLabel controlId="floatingTextarea2" label="Messages">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a message here"
                                    style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                                <Button className="review-order-btn mx-auto btn-lg" type="button">
                                    Send Mail
                                </Button>
                            </Form>
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
        
        
    );
};

export default ContactUs;