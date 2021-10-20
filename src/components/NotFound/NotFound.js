import React from 'react';
import './NotFound.css';
import PageNotFound from '../../images/page-not-found.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={PageNotFound} alt="" />
            <br/>
            <Link to="/home"><button className="back-home">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;