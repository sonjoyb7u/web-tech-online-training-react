import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import aboutImg from './../../assets/images/about/about_1.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <MiniBanner title="About Us"></MiniBanner>
                    </Col>
                </Row>
                <Row>
                   <section className="about-us mt-5">
                       <Row className="mb-5 g-5">
                            <Col xs={12} md={6}>
                                <Row xs={12} md={6}>
                                    <div>
                                        <Image className="about-img rounded-3" src={aboutImg} alt="About Image"></Image>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="about-content">
                                    <h3>MAKING WEB DEVELOPMENT MORE ACCESSIBLE TO YOU</h3>
                                    <p>
                                        Our mission is to provide web solutions in such a way that small and mid-size companies have an affordable option, without sacrificing the quality and expertise that is usually associated with large, diverse and expensive agencies. 
                                    </p>
                                    <h3>ALWAYS BE INNOVATING</h3>
                                    <p>To improve is to change; to be perfect is to change often!" This quote rings particularly true in our industry, where the technology and best practices are constantly changing.</p>
                                    <h3>WE'RE ALL ON ONE TEAM</h3>
                                    <p>Every team member is treated with the same level of respect, responsiveness and commitment that we show our clients, regardless of position or tenure.</p>
                                </div>
                            </Col>
                        {/* <Col xs={12} md={12}>
                            <div className="d-flex justify-content-around align-content-center">
                                <div>
                                    <Image src={aboutImg} alt="About Image"></Image>
                                </div>
                                <div>
                                    <h2>ALWAYS BE INNOVATING</h2>
                                    <p>
                                        Our mission is to provide web solutions in such a way that small and mid-size companies have an affordable option, without sacrificing the quality and expertise that is usually associated with large, diverse and expensive agencies.
                                        <blockquote>To improve is to change; to be perfect is to change often!" This quote rings particularly true in our industry, where the technology and best practices are constantly changing.</blockquote>
                                    </p>
                                </div>
                            </div>
                        </Col> */}
                       </Row>
                   </section>
                </Row>
            </Container>
        </div>
    );
};

export default About;