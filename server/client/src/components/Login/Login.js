import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Form>
                    <FormGroup row>
                        <Label for="loginUsername" id="loginLabel" sm="4">Username</Label>
                        <Col sm="4">
                            <Input type="username" name="username" id="loginUsername"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="loginPassword" id="loginLabel" sm="4" >Password</Label>
                        <Col sm="4">
                            <Input type="password" name="password" id="loginPassword" />
                        </Col>
                    </FormGroup>
                    <Button id="submitButton">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;