import React from 'react';
import AboutBaner from '../AboutBaner/AboutBaner';
import Doctors from '../Doctors/Doctors';
import './About.css';
import AboutHospital from '../AboutHospital/AboutHospital';

const About = () => {
    return (
        <div>
            <AboutBaner></AboutBaner>
            <AboutHospital></AboutHospital>
            <Doctors></Doctors>
        </div>
    );
};

export default About;