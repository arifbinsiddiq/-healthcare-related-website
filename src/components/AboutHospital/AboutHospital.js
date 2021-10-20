import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hospitalImg from '../../images/about-hospital.jpg';
import './AboutHospital.css';

const AboutHospital = () => {
    return (
        <div>
            <Container className="about-hospital-section">
                <Row sm={1} md={1} lg={2}>
                    <Col>
                        <div className="about-hospital-img">
                            <img className="fluid" src={hospitalImg} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div className="about-hospital-heading">
                            <h2>About Our Hospital</h2>
                            <p>Roughly defined, hospitality management refers to the application of management concepts and structured leadership in the areas of accommodation, dining and general guest services. From the largest hotels to the smallest cafeterias, all such businesses form an important part of the hospitality industry.</p>
                            <ul>
                                <li> 
                                    <span>
                                    <i className="far fa-check-circle"></i>
                                    </span> Browse our Website
                                </li>
                                <li>
                                    <span>
                                    <i className="far fa-check-circle"></i>
                                    </span>
                                     Choose Service</li>
                                <li>
                                    <span>
                                    <i className="far fa-check-circle"></i>
                                    </span>
                                     Choose Service</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutHospital;