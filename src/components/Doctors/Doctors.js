import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctors.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState();

    useEffect(() => {
        fetch("./doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Container className="doctors-section">
            <h2 className="services-heading">Our Doctors</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    doctors?.map(doctor =><Col
                        key={doctor.key}
                    >
                    <Card>
                        <Card.Img variant="top" className=""
                            src={doctor.img} />
                        <Card.Body>
                            <Card.Title><h3>{doctor.name}</h3></Card.Title>
                            <Card.Text>
                                {doctor.speciality}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;