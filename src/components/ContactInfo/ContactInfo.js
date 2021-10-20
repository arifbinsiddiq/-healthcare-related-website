import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <div className="card-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <Card.Body>
                                <Card.Title className="contact-card-title">Location</Card.Title>
                                <Card.Text>
                                    2108-267 Road Quadra,Toronto, <br/> Victiria Canada
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="card-icon">
                                <i className="far fa-envelope"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    hello@disin.com <br/>
                                    emailexample@name.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="card-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>
                                    +07 5554 3332 322 <br/>
                                    +07 5554 3332 322
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactInfo;