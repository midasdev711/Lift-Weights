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

    // return correct id based on exercise type
    exerciseId = (exercise) => {
        if (this.props.display === 'simple') {
            return exercise[1];
        } else {
            return exercise.data.id;
        }
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
                                        key={this.exerciseId(exercise)} 
                                        exercise={exercise} 
                                        addOption={this.props.addOption}
                                        removeOption={this.props.removeOption}
                                        addExercise={this.addExercise}
                                        removeExercise={this.removeExercise}
                                        display={this.props.display}
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