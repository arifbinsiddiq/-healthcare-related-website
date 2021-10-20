import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {



    const [services, setServices] = useState();

    useEffect(() => {
        fetch("/Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container className="services-section">
            <h2 className="services-heading">Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services?.map(service => <Col
                    key={service?.key}
                    >
                        <Card className="card-section">
                            <Card.Img variant="top" src={service?.img} />
                            <Card.Body>
                                <Card.Title className="card-title">{service?.serviceName}</Card.Title>
                                <Card.Text>
                                    {service?.description.slice(0,120)}
                                    <Link to={`/service/${service?.key}`}>
                                        <button className="services-btn">
                                            details
                                        </button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Services;