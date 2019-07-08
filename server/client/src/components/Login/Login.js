import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                username: '',
                password: '' 
            }
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        alert('Submision made: ' + this.state.member.username + ', ' + 
                                   this.state.member.password);
        fetch(`http://localhost:5000/login/match?username=${this.state.member.username}&password=${this.state.member.password}`)
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
                                   value={this.state.member.username}
                                   onChange={e => this.setState({ member: {...member, username: e.target.value }})}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="loginPassword" id="loginLabel" sm={4} >Password</Label>
                        <Col sm={4}>
                            <Input type="password" 
                                   name="password" 
                                   id="loginPassword"
                                   value={this.state.member.password}
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