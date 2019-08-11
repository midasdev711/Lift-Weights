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
        const maxDisplay = 3;
        let count = 0;

        return (
            <div className='ExerciseList'>
                <Image.Group size='mini'>
                    <Segment>
                        <List size='small' divided relaxed='very' selection verticalAlign='middle'>
                            {exercises.map((exercise) => {
                                count += 1;
                                if (display === 'minimal' && count > maxDisplay) {
                                    // stops displaying exercises
                                    return null;
                                } else if (display === 'minimal' && count <= maxDisplay) {
                                    // restricts number of exercises from DB that are displayed
                                    return (
                                        <ExerciseItem 
                                            className='ExerciseItem' 
                                            key={exercise[1]}    // note unique id
                                            name={exercise[0]}
                                            exercise={exercise} 
                                            addOption={addOption}
                                            removeOption={removeOption}
                                            addExercise={this.addExercise}
                                            removeExercise={this.removeExercise}
                                            display={display}
                                        />
                                    );
                                } else if (display === 'full') {
                                    // for displaying all personalized exercise details from DB (e.g. reps, sets, etc)
                                    return (
                                        <ExerciseItem 
                                            className='ExerciseItem' 
                                            key={exercise[1]}    // note unique id
                                            name={exercise[0]} 
                                            id={exercise[1]} 
                                            equipment={exercise[2]} 
                                            set={exercise[3]} 
                                            reps={exercise[4]} 
                                            weights={exercise[5]} 
                                            rpe={exercise[6]} 
                                            duration={exercise[7]} 
                                            addOption={addOption}
                                            removeOption={removeOption}
                                            addExercise={this.addExercise}
                                            removeExercise={this.removeExercise}
                                            display={display}
                                        />
                                    );
                                }
                                return (
                                    // for displaying exercises added to workout from API
                                    // therefore, the unique id differs from above!
                                    <ExerciseItem 
                                        className='ExerciseItem' 
                                        key={exercise.data.id}  // note unique id
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