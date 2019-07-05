import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                username: undefined,
                password: undefined 
            }
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        const { member } = this.state;
        alert('Submision made: ' + member.username + ', ' + 
                                   member.password);
        fetch(`http://localhost:5000/login/add?username=${member.username}&password=${member.password}`)
        event.preventDefault();
    }

    render() {
        const { member } = this.state;
        return (
            <div className="Login">
                <Form>
                    <FormGroup row>
                        <Label for="loginUsername" id="loginLabel" sm={4}>Username</Label>
                        <Col sm={4}>
                            <Input type="username" 
                                   name="username" 
                                   id="loginUsername"
                                   value={member.username}
                                   onChange={e => this.setState({ member: {...member, username: e.target.value }})}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="loginPassword" id="loginLabel" sm={4} >Password</Label>
                        <Col sm={4}>
                            <Input type="password" 
                                   name="password" 
                                   id="loginUsername"
                                   value={member.password}
                                   onChange={e => this.setState({ member: {...member, password: e.target.value }})}
                            />
                        </Col>
                    </FormGroup>
                    <Button id="submitButton" onClick={this.handleLogin}>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;