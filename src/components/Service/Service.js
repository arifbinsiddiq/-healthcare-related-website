import React, { useEffect, useState } from 'react';
import './Service.css';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Service = () => {

    let {serviceKey} = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [displayServices, setDisplayServices] = useState({});

    useEffect(()=>{
        fetch("/serviceDetails.json")
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])


    useEffect(()=> {
      const foundService =  serviceDetails?.find(service => service?.key === serviceKey)
      setDisplayServices(foundService)
    }, [serviceDetails, serviceKey]) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <div>
            <Container className="single-service">
                <Row sm={1} md={1} lg={2}>
                    <Col>
                        <div className="single-service-img">
                            <img src={displayServices?.img} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div className="single-service-img">
                        <h2 className="service-heading">{displayServices?.serviceName}</h2>
                        <p className="service-description">{displayServices?.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;