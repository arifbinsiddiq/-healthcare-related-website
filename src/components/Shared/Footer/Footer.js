import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="footer-card">
                            <Card.Body>
                                <Card.Title id="footer-card-title">Contact</Card.Title>
                                <div className="footer-card-text">
                                    <div>
                                        <div>Location:</div>
                                        <p>2108-267 Road Quadra, <br /> Toronto, Victiria Canada</p>
                                    </div>
                                    <div>Email: emailexample@name.com</div>
                                    <div>Phone: +07 5554 3332 322</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="footer-card">
                            <Card.Body>
                                <Card.Title id="footer-card-title">About Us</Card.Title>
                                <div className="footer-about-us">
                                    <ul>
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="footer-card">
                            <Card.Body>
                                <Card.Title id="footer-card-title">Social Link</Card.Title>
                                <div>
                                    <div className="social-icon">
                                        <a href="https://www.facebook.com/arif.siddiq.54">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://twitter.com/ArifurR99673235">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.instagram.com/arifbinsiddiq/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/arifur-rahman-7932b91b2/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/Arif-Bin-Siddiq">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <p className="copyright">CopyRight © Arif Bin Siddiq</p>
        </div>
    );
};

export default Footer;