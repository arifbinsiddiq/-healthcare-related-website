import React from 'react';
import HomeBaner from '../HomeBaner/HomeBaner';
import Services from '../Services/Services';
import AboutHospital from '../AboutHospital/AboutHospital';
import './Home.css';
import HospitalInformation from '../HospitalInformation/HospitalInformation';

const Home = () => {
    return (
        <div>
            <HomeBaner></HomeBaner>
            <Services></Services>
            <AboutHospital></AboutHospital>
            <HospitalInformation></HospitalInformation>
        </div>
    );
};

export default Home;