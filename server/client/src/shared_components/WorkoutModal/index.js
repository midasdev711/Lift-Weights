import React, { Component } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

import wger from '../../api/wger';
import Search from '../Search';
import Workout from '../Workout';
import ExerciseList from '../ExerciseList';
import './index.css';

class WorkoutModal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            workoutList: <div></div>,   // JSX list of workouts
            exercises: [],
            visible: false,
            exerciseResults: <div></div>,
            foundStatement: <p id="Found"></p>,
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
                            foundStatement: <p id="Found">Found: {this.state.exercises.length} exercises</p>
            });
        }
    };

    addExercise = exercise => {
        console.log('append Exercise ' + exercise.name + ' in WorkoutModal')
        console.log('pass Exercise to Workout')
    }

    render() {
        const { exerciseResults, exercises } = this.state;

        return (
            <div className='WorkoutModal'>
                <Modal size='tiny' trigger={ <Button><Icon name='plus' /> Create New Workout</Button> } closeIcon >
                    <Modal.Header>
                        Create New Workout
                    </Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Workout exercises={exercises} />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Search onSearch={this.onSearch} />
                        {exerciseResults}
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default WorkoutModal;