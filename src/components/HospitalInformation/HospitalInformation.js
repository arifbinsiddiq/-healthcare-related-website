import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HospitalInformation.css';

const HospitalInformation = () => {
    return (
        <Container className="hospital-information">
            <Row sm={1} md={2} lg={4}>
                <Col>
                    <div className="patients-beds">
                        <span><i className="fas fa-procedures"></i></span>
                        <h2>580</h2>
                        <p>Patients Beds</p>
                    </div>
                </Col>
                <Col>
                    <div className="patients-beds">
                        <span><i className="fas fa-user-injured"></i></span>
                        <h2>25000+</h2>
                        <p>Happy Patients</p>
                    </div>
                </Col>
                <Col>
                    <div className="patients-beds">
                        <span><i className="fas fa-hospital-user"></i></span>
                        <h2>350</h2>
                        <p>Doctors and Nurse</p>
                    </div>
                </Col>
                <Col>
                    <div className="patients-beds">
                        <span><i className="fas fa-cogs"></i></span>
                        <h2>18</h2>
                        <p>Year Experience</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HospitalInformation;