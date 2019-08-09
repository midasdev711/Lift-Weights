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
            modalTopHalfHeight: '0px',
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
        }).then(this.close());
    }

    // close the modal
    close = async () => {
        await this.setState({ open: false });
        await this.deleteWorkout();
    }

    // deletes workout values so the modal is fresh for the next time it is opened
    deleteWorkout = async () => {
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
                    <Form onSubmit={this.handleSave} size='large'>
                        <Form.Input 
                            label='Workout Name'
                            placeholder='Workout Name' 
                            id='workoutName'
                            value={this.state.workoutName}
                            onChange={e => this.setState({ workoutName: e.target.value })}
                        />
                        <List celled animated verticalAlign='middle'>
                            <List.Header>Exercises</List.Header>
                            {exercisesJSX}
                            <List.Item>
                                <Form.Button color='blue' floated='right'>
                                    <Icon name='checkmark' />  Save
                                </Form.Button>
                            </List.Item>
                        </List>
                    </Form>
                </Image.Group>
            );
        } else if (this.props.modalType === 'edit') {
            return <div>Editing Tools Needed</div>
        } else if (this.props.modalType === 'delete') {
            return <div>Deleting Tools Needed</div>
        } else {
            return <div>Workout Description Needed</div>
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
            return <div>Edit BottomModal TODO</div>
        } else if (this.props.modalType === 'delete') {
            return <div>Delete BottomModal TODO</div>
        } else {
            return <div>Workout BottomModal TODO</div>
        }
    }

    // appearance of trigger button that opens modal
    triggerButton = () => {
        if (this.props.modalType === 'create') {
            return (
                <Button floated='left' color='green' onClick={() => this.setState({ open: true })}>
                    <Icon name='plus' /> 
                    {this.modalName()}
                </Button>
            );
        } else if (this.props.modalType === 'edit') {
            return (
                <Button color='grey' size='small' animated='fade' float='left' onClick={() => this.setState({ open: true })}>
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
                <Button color='red' size='small' animated='fade' float='left' onClick={() => this.setState({ open: true })}>
                    <Button.Content hidden>
                        {this.modalName()}
                    </Button.Content>
                    <Button.Content visible>
                        <Icon name='delete'/> 
                    </Button.Content>
                </Button>
            );
        } else {
            return (
                <Button color='blue' size='small' animated='fade' float='left'>
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
                    <Modal.Content style={{height:`${200}px`}}>
                        <Modal.Description>
                            {this.modalDescription()}
                        </Modal.Description>
                    </Modal.Content>
                    {this.modalBottom()}
                </Modal>
            </div>
        );
    }
}

export default WorkoutModal;