import React, {Component} from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';

import Header from '../../../shared_components/Header';
import './index.css';

class Register extends Component {
    // code source for implementing connection between frontend and backend servers
    // https://www.youtube.com/watch?v=HPIjjFGYSJ4
    // controlled component source:
    // https://reactjs.org/docs/forms.html#controlled-components
    constructor(props) {
        super(props);
        this.state = {
            member: {
                username: '',
                email: '',
                password: '' 
            },
            validated: false
        }
    }

    handleRegister = async e => {
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/register/add?username=${this.state.member.username}&email=${this.state.member.email}&password=${this.state.member.password}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        await console.log(res)
        const user = await res.json()
        await this.updateValidated(user.data.member, user.data.id);
    }

    // runs a second check to ensure the retuned username matches
    // returns boolean true if matching, false otherwise
    updateValidated = async (user, id) => {

        if (this.state.member.username === user) {
            await this.setState({ member: {username: user, id: id }, validated: true })
            await this.props.history.push({
                pathname: '/profile', 
                state: { user: this.state.member.username, id: this.state.member.id}
            });
        } else {
            await this.setState({ member: {username: '', password: ''}, validated: false })
            await this.props.history.push('/registration');
        }
    }

    render() {
        const { member } = this.state;
        return (
            // Theme is modified from Semantic UI React's Login Layout
            // https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js
            <div className="Register">
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
                            id="registerUsername"
                            value={this.state.member.username}
                            onChange={e => this.setState({ member: {...member, username: e.target.value }})}
                        />
                        <Form.Input 
                            fluid icon='child' 
                            iconPosition='left' 
                            placeholder='Email' 
                            type='email'
                            id="registerEmail"
                            value={this.state.member.email}
                            onChange={e => this.setState({ member: { ...member, email: e.target.value}})} 
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            id="registerPassword"
                            value={this.state.member.password}
                            onChange={e => this.setState({ member: {...member, password: e.target.value }})}
                        />
                
                        <Button id="submitButton" fluid size='large' onClick={this.handleRegister}>
                            Register
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        <a href='/'>Login</a>
                    </Message>
                    </Grid.Column>
                </Grid>  
            </div>
        );
    }
}

export default Register;