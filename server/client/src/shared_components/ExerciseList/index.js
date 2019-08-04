import React, { Component } from 'react';
import { Segment, List, Image } from 'semantic-ui-react';

import ExerciseItem from '../ExerciseItem';
import './index.css';

class ExerciseList extends Component {

    addExercise = (exercise) => {
        this.props.addExercise(exercise);
    }

    removeExercise = (id) => {
        this.props.removeExercise(id);
    }

    render() {

        return (
            <div className='ExerciseList'>
                <Image.Group size='mini'>
                    <Segment>
                        <List divided relaxed='very' animated verticalAlign='middle'>
                            {this.props.exercises.map((exercise) => {
                                return (
                                    <ExerciseItem 
                                        className='ExerciseItem' 
                                        key={exercise.data.id} 
                                        exercise={exercise} 
                                        addOption={this.props.addOption}
                                        removeOption={this.props.removeOption}
                                        addExercise={this.addExercise}
                                        removeExercise={this.removeExercise}
                                    />
                                );
                            })}
                        </List>
                    </Segment>
                </Image.Group>
            </div>
        );
    }
}

export default ExerciseList;