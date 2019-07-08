import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import './Register.css';

class Register extends Component {
    // code source for implementing connection between frontend and backend servers
    // https://www.youtube.com/watch?v=HPIjjFGYSJ4
    // controlled component source for later:
    // https://reactjs.org/docs/forms.html#controlled-components
    constructor(props) {
        super(props);
        this.state = {
            member: {
                username: '',
                email: '',
                password: '' 
            }
        }
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(event) {
        const { member } = this.state;
        alert('Submision made: ' + member.username + ', ' + 
                                   member.email + ', ' + 
                                   member.password);
        fetch(`http://localhost:5000/register/add?username=${member.username}&email=${member.email}&password=${member.password}`)
        event.preventDefault();
    }

    render() {
        const { member } = this.state;
        return (
            <div className="Register">
                <Form>
                    <FormGroup row>
                        <Label for="registerUsername" id="registerLabel" sm={4}>Username</Label>
                        <Col sm={4}>
                            <Input type="username" 
                                   name="username" 
                                   id="registerUsername"
                                   value={this.state.member.username}
                                   onChange={e => this.setState({ member: { ...member, username: e.target.value}})} 
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="registerEmail" id="registerEmail" sm={4} >Email</Label>
                        <Col sm={4}>
                            <Input type="email" 
                                   name="email" 
                                   id="registerUsername"
                                   value={this.state.member.email}
                                   onChange={e => this.setState({ member: { ...member, email: e.target.value}})} 
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="registerPassword" id="registerLabel" sm={4} >Password</Label>
                        <Col sm={4}>
                            <Input type="password" 
                                   name="password" 
                                   id="registerUsername"
                                   value={this.state.member.password}
                                   onChange={e => this.setState({ member: { ...member, password: e.target.value}})} 
                            />
                        </Col>
                    </FormGroup>
                    <Button id="submitButton" onClick={this.handleRegister}>Register</Button>
                </Form>
            </div>
        );
    }
}

export default Register;