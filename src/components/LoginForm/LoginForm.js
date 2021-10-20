import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation  } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './LoginForm.css';

const LoginForm = () => {
    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary mb-4" type="Login">
                        Login
                    </Button>
                </Form>
                <p className="new-user">are you new user? <Link to="/register">Create a New Account</Link></p>
                <div className="login-or">Or,</div>
                <button className="google-btn" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Google</button>
                <button className="github-btn" onClick={signInUsingGithub}><i className="fab fa-github"></i> Github</button>
            </div>
        </div>
    );
};

export default LoginForm;