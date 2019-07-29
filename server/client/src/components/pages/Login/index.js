import React, {Component} from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';

import Header from '../../../shared_components/Header';
import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                username: '',
                password: '' 
            },
            validated: false
        }
    }

    handleLogin = async e => {
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/login/match?username=${this.state.member.username}&password=${this.state.member.password}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        await console.log(res);
        const user = await res.json()
        await console.log(user)
        await this.isValidated(user.data.member);
    }

    isValidated = (user) => {
        console.log('this.state.member.username = ' + this.state.member.username)
        console.log('user = ' + user)
        if (this.state.member.username === user) {
            this.setState({ validated: true });
            console.log('user validation should be true = ' + this.state.validated)
        } else {
            this.setState({ validated: false });
            console.log('user validation should be false = ' + this.state.validated)
        }
    }

    render() {
        const { member, validated } = this.state;

        if (validated === true) {
            return <div>Validated user</div>

        } else {
            return (
                // Theme is modified from Semantic UI React's Login Layout
                // https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js
                <div className='Login'>
                    <Header />
                    <Grid className='Grid' textAlign='center' verticalAlign='middle'>
                        <Grid.Column className='Column'>
                        <Form size='large'>
                            <Segment stacked>
                            <Form.Input 
                                fluid icon='child' 
                                iconPosition='left' 
                                placeholder='Username' 
                                type='username'
                                id='loginUsername'
                                value={this.state.member.username}
                                onChange={e => this.setState({ member: {...member, username: e.target.value }})}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                id='loginPassword'
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
}

export default Login;