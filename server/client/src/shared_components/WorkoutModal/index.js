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
            modalTopHalfHeight: '0px'
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

    handleSave = e => {
        e.preventDefault();
        let exercises = JSON.stringify(this.state.exercises);
        fetch(`http://localhost:5000/workout/new?userId=${this.props.userId}&workoutName=${this.state.workoutName}&exercises=${exercises}`);
    }

    modalName = () => {
        if (this.props.modalType === "create") {
            return "Create New Workout";
        } else if (this.props.modalType === "edit") {
            return "Edit Workout";
        } else {
            return "Workout";
        }
    }

    modalDescription = () => {
        const { exercisesJSX } = this.state;

        if (this.props.modalType === "create") {
            return (
                <Image.Group size='mini'>
                    <Form onSubmit={this.handleSave} size='large'>
                        <Form.Input 
                            label='Workout Name'
                            placeholder='Workout Name' 
                            id="workoutName"
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
        } else if (this.props.modalType === "edit") {
            return <div>Editing Tools Needed</div>
        } else {
            return <div>Workout Description Needed</div>
        }
    }

    modalBottom = () => {
        const { exerciseResultsJSX } = this.state;

        if (this.props.modalType === "create") {
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
        } else if (this.props.modalType === "edit") {
            return <div>Edit BottomModal TODO</div>
        } else {
            return <div>Workout BottomModal TODO</div>
        }
    }

    render() {

        return (
            <div className='WorkoutModal'>
                <Modal size='tiny' trigger={ <Button><Icon name='plus' /> {this.modalName()}</Button> } closeIcon>
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