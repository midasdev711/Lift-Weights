import React, {Component} from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';

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
            // Theme is modified from Semantic UI React's Login Layout
            // https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js
            <div className="Login">
                <Grid className='Grid' textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='Column'>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input 
                            fluid icon='child' 
                            iconPosition='left' 
                            placeholder='Username' 
                            type='username'
                            id="loginUsername"
                            value={this.state.member.username}
                            onChange={e => this.setState({ member: {...member, username: e.target.value }})}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            id="loginPassword"
                            value={this.state.member.password}
                            onChange={e => this.setState({ member: {...member, password: e.target.value }})}
                        />
                
                        <Button id='submitButton' fluid size='large' onClick={this.handleLogin}>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        <a href='/register'>Register</a>
                    </Message>
                    </Grid.Column>
                </Grid>  
            </div>
        );
    }
}

export default Login;