import React from 'react';
import ContactBaner from '../ContactBaner/ContactBaner';
import ContactInfo from '../ContactInfo/ContactInfo';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <ContactBaner></ContactBaner>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;