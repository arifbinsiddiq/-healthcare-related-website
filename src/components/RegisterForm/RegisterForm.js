import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './RegisterForm.css';

const RegisterForm = () => {
    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    return (
        <div className="register-form">
            <div>
                <h2>Please Registration</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary mb-4" type="Submit">
                        Register
                    </Button>
                </Form>
                <p className="already-register">already register? <Link to="/login">Login</Link></p>
                <div className="login-or">Or</div>
                <button className="google-btn" onClick={signInUsingGoogle} ><i className="fab fa-google"></i> Google</button>
                <button className="github-btn" onClick={signInUsingGithub}><i className="fab fa-github"></i> Github</button>
            </div>
        </div>
    );
};

export default RegisterForm;