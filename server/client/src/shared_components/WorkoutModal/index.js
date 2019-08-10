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
            workoutName: '',
            exercisesJSX: <div></div>,
            exercises: [],
            visible: false,
            exerciseResultsJSX: <div></div>,
            exerciseSearchResults: [],
            foundStatement: <p id='Found'></p>,
            open: false
        };
    }

    // search for exercise results
    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });
        await this.setState({ exerciseSearchResults: response.data.suggestions, 
                              visible: true });
        await this.updateVisibility();
    };

    // show results from search
    updateVisibility = () => {
        if (this.state.visible === true) {
            this.setState({ exerciseResultsJSX: <ExerciseList 
                                                exercises={this.state.exerciseSearchResults} 
                                                addOption={true} 
                                                removeOption={false} 
                                                addExercise={this.addExercise} 
                                                />,
                            foundStatement: <p id='Found'>Found: {this.state.exerciseSearchResults.length} exercises</p>
            });
        }
    };

    // add an exercise to ExerciseList
    addExercise = async exercise => {
        await this.state.exercises.push(exercise);
        await this.setState({ exercisesJSX: <ExerciseList 
                                                exercises={this.state.exercises} 
                                                addOption={false} 
                                                removeOption={true} 
                                                addExercise={this.addExercise} 
                                                removeExercise={this.removeExercise} 
                                            />
        });
    }

    // remove an exercise from ExerciseList
    removeExercise = async id => {
        await this.setState({ exercises: this.state.exercises.filter(exercise => exercise.data.id !== id) });
        await this.setState({ exercisesJSX: <ExerciseList 
                                                exercises={this.state.exercises} 
                                                addOption={false} 
                                                removeOption={true} 
                                                addExercise={this.addExercise} 
                                                removeExercise={this.removeExercise} 
                                            />
        });
    }

    // when Save is selected, save the workout details
    handleSave = async (e) => {
        e.preventDefault();
        let exercises = await JSON.stringify(this.state.exercises);
        await fetch(`http://localhost:5000/workout/new?userId=${this.props.userId}&workoutName=${this.state.workoutName}&exercises=${exercises}`, {
            method: 'GET',
        }).then(this.props.addWorkout()
        ).then(this.close());
    }

    // close the modal
    close = async () => {
        await this.setState({ open: false });
        await this.resetWorkout();
    }

    // resets workout values so the modal is fresh for the next time it is opened
    resetWorkout = async () => {
        await this.setState({ workoutName: '', 
                              exercises: [], 
                              exercisesJSX: <div />, 
                              exerciseSearchResults: [],
                              exerciseResultsJSX: <div /> 
        });
    }

    // modal name based on type
    modalName = () => {
        if (this.props.modalType === 'create') {
            return 'Create New Workout';
        } else if (this.props.modalType === 'edit') {
            return 'Edit';
        } else if (this.props.modalType === 'delete') {
            return 'Delete';
        } else {
            return 'Select';
        }
    }

    // Workout details in modal
    modalDescription = () => {
        const { exercisesJSX } = this.state;

        if (this.props.modalType === 'create') {
            return (
                <Image.Group size='mini'>
                    <Form onSubmit={this.handleSave} size='large' className='createExerciseList'>
                        <Form.Input 
                            label='Workout Name'
                            placeholder='Workout Name' 
                            id='workoutName'
                            value={this.state.workoutName}
                            onChange={e => this.setState({ workoutName: e.target.value })}
                        />
                        <Header as='h3'>Exercises</Header>
                        <List celled animated verticalAlign='middle'>
                            {exercisesJSX}
                        </List>
                        <Form.Button color='blue' floated='right' className='saveButton'>
                            <Icon name='checkmark' />  Save
                        </Form.Button>
                    </Form>
                </Image.Group>
            );
        } else if (this.props.modalType === 'edit') {
            return (
                <Header as='h3' textAlign='center'>Remove / Add Exercises</Header>
            );
        } else if (this.props.modalType === 'delete') {
            return (
                <Header as='h3' textAlign='center'>Are you sure you want to delete this workout?</Header>
            );
        } else {
            return (
                <Header as='h3' textAlign='center'>Exercises</Header>
            );
        }
    }

    // bottom content in modal
    modalBottom = () => {
        const { exerciseResultsJSX } = this.state;

        if (this.props.modalType === 'create') {
            return (
                <Modal.Content>
                    <Divider horizontal>
                        <Header as='h4'>
                            <Icon name='search plus' />
                            Search for Exercises
                        </Header>
                    </Divider>
                    <Search onSearch={this.onSearch} />
                    {exerciseResultsJSX}
                </Modal.Content>
            );
        } else if (this.props.modalType === 'edit') {
            return (
                <Button.Group size='large' floated='right' className='bottomModalButtons'>
                    <Button color='grey' id='leftButton'>
                        Cancel
                    </Button>
                    <Button color='blue' id='rightButton'>
                        Save 
                    </Button>
                </Button.Group>
            );
        } else if (this.props.modalType === 'delete') {
            return (
                <Button.Group size='large' floated='right' className='bottomModalButtons'>
                    <Button color='green' id='leftButton'>
                        Keep Workout
                    </Button>
                    <Button color='red' id='rightButton'>
                        Delete
                    </Button>
                </Button.Group>
            );
        } else {
            return (
                <Button.Group size='large' floated='right' className='bottomModalButtons'>
                    <Button color='teal' id='leftButton'>
                        Close
                    </Button>
                    <Button color='blue' id='rightButton'>
                        Start
                    </Button>
                </Button.Group>
            );
        }
    }

    // appearance of trigger button that opens modal
    triggerButton = () => {
        if (this.props.modalType === 'create') {
            return (
                <Button color='green' float='left' onClick={() => this.setState({ open: true })}>
                    <Icon name='plus' /> 
                    {this.modalName()}
                </Button>
            );
        } else if (this.props.modalType === 'edit') {
            return (
                <Button color='grey' size='small' animated='fade' onClick={() => this.setState({ open: true })}>
                    <Button.Content hidden>
                        {this.modalName()}
                    </Button.Content>
                    <Button.Content visible>
                        <Icon name='edit outline'/> 
                    </Button.Content>
                </Button>
            );
        } else if (this.props.modalType === 'delete') {
            return (
                <Button color='red' size='small' animated='fade' onClick={() => this.setState({ open: true })}>
                    <Button.Content hidden>
                        {this.modalName()}
                    </Button.Content>
                    <Button.Content visible>
                        <Icon name='delete'/> 
                    </Button.Content>
                </Button>
            );
        } else {  // Select button opens select modal
            return (
                <Button color='blue' size='small' animated='fade' onClick={() => this.setState({ open: true })}>
                    <Button.Content hidden>
                        {this.modalName()}
                    </Button.Content>
                    <Button.Content visible>
                        <Icon name='right triangle'/> 
                    </Button.Content>
                </Button>
            );
        }
    }

    render() {

        return (
            <div className='WorkoutModal'>
                <Modal 
                    size='tiny' 
                    trigger={this.triggerButton() } 
                    open={this.state.open}
                    closeIcon
                    onClose={this.close}
                >
                    <Modal.Header>
                        {this.modalName()}
                    </Modal.Header>
                    <Modal.Content className='modalDescription'>
                        <Modal.Description>
                            {this.modalDescription()}
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        {this.modalBottom()}
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default WorkoutModal;