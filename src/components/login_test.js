import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function SignIn(props) {
    const [state , setState] = useState({
        email: "",
        password: ""
    })

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        id="email"
                        placeholder="Email Address" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        placeholder="Password" />
                </Form.Group>
                
                <Form.Text className="text-muted">
                    Forgot your login info? Retrieve here.
                </Form.Text>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Text className="text-muted">
                    Not a member yet? Sign up here.
                </Form.Text>
                </Form>
        </Container>
    );
}

export default SignIn;