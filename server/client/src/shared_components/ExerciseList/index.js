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
        const { exercises, addOption, removeOption, display } = this.props;
        let count = 0;

        return (
            <div className='ExerciseList'>
                <Image.Group size='mini'>
                    <Segment>
                        <List divided relaxed='very' animated verticalAlign='middle'>
                            {exercises.map((exercise) => {
                                count += 1;
                                if (display === 'minimal' && count > 4) {
                                    if (count > 4) return null;
                                } else if (display === 'minimal' && count <= 4) {
                                    return (
                                        <ExerciseItem 
                                            className='ExerciseItem' 
                                            key={exercise[1]} 
                                            exercise={exercise} 
                                            addOption={addOption}
                                            removeOption={removeOption}
                                            addExercise={this.addExercise}
                                            removeExercise={this.removeExercise}
                                            display={display}
                                        />
                                    );
                                }
                                return (
                                    <ExerciseItem 
                                        className='ExerciseItem' 
                                        key={exercise.data.id} 
                                        exercise={exercise} 
                                        addOption={addOption}
                                        removeOption={removeOption}
                                        addExercise={this.addExercise}
                                        removeExercise={this.removeExercise}
                                        display={display}
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