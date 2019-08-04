import React, { Component } from 'react';
import { Modal, Button, Icon, Form, Image, List, Divider, Header } from 'semantic-ui-react';

import wger from '../../api/wger';
import Search from '../Search';
import ExerciseList from '../ExerciseList';
import './index.css';

class WorkoutModal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            workoutList: <div></div>,   // JSX list of workouts
            workoutExercises: [],
            visible: false,
            exercises: [],
            exerciseResults: <div></div>,
            foundStatement: <p id='Found'></p>,
            modalTopHalfHeight: '0px'
        };
    }

    // search for exercise results
    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });
        await this.setState({ exercises: response.data.suggestions, 
                              visible: true });
        await this.updateVisibility();
    };

    // show results from search
    updateVisibility = () => {
        if (this.state.visible === true) {
            this.setState({ exerciseResults: <ExerciseList 
                                                exercises={this.state.exercises} 
                                                addOption={true} 
                                                addExercise={this.addExercise} 
                                          />,
                            foundStatement: <p id='Found'>Found: {this.state.exercises.length} exercises</p>
            });
        }
    };

    addExercise = async exercise => {
        await this.state.workoutExercises.push(exercise);
        await this.setState({ workoutList: <ExerciseList 
                                                exercises={this.state.workoutExercises} 
                                                addOption={false} 
                                                addExercise={this.addExercise} 
                                                workout={true}
                                           />
        });
    }

    render() {
        const { exerciseResults, workoutList } = this.state;

        return (
            <div className='WorkoutModal'>
                <Modal size='tiny' trigger={ <Button><Icon name='plus' /> Create New Workout</Button> } closeIcon>
                    <Modal.Header>
                        Create New Workout
                    </Modal.Header>
                    <Modal.Content style={{height:`${200}px`}}>
                        <Modal.Description>
                            <Image.Group size='mini'>
                                <Form onSubmit={this.handleSave} size='large'>
                                    <Form.Input 
                                        label='Workout Name'
                                        placeholder='Workout Name' 
                                        value={this.props.workoutName}
                                        onChange={e => this.setState({ workoutName: e.target.value })}
                                    />
                                    <List celled animated verticalAlign='middle'>
                                        <List.Header>Exercises</List.Header>
                                        {workoutList}
                                        <List.Item>
                                            <Form.Button color='blue' floated='right'>
                                                <Icon name='checkmark' />  Save
                                            </Form.Button>
                                        </List.Item>
                                    </List>
                                </Form>
                            </Image.Group>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Content>
                        <Divider horizontal>
                            <Header as='h4'>
                                <Icon name='search plus' />
                                Search for Exercises
                            </Header>
                        </Divider>
                        <Search onSearch={this.onSearch} />
                        {exerciseResults}
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default WorkoutModal;