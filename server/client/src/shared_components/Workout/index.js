import React, { Component } from 'react';
import { Form, List, Icon } from 'semantic-ui-react';

import './index.css';

class Workout extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            workoutName: '',
            exercises: this.props.exercises
        };
    }

    // save workout
    handleSave = (e) => {
        e.preventDefault();
        console.log('attempt to save')
    }

    displayExercises = () => {

    }

    render() {
        return (
        <div className='Workout'>
            <Form onSubmit={this.handleSave} size='large'>
                <Form.Input 
                    label='Workout Name: '
                    placeholder='Workout Name' 
                    value={this.state.workoutName}
                    onChange={e => this.setState({ workoutName: e.target.value })}
                />
                <List>
                    list exercises here
                </List>
                <Form.Button color='blue' floated='right'>
                    <Icon name='checkmark' />  Save
                </Form.Button>
            </Form>
        </div>
        );
    }
}

export default Workout;