import React from 'react';
import { Container } from 'react-bootstrap';
import SignIn from '../../components/login_test'

function Login() {
  return (
    <Container>
        <h1>Welcome Back</h1>
        <SignIn />
    </Container>
    );
}

export default Login;
