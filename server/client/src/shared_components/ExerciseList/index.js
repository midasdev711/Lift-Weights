import React, { Component } from 'react';
import { Segment, List, Image } from 'semantic-ui-react';

import ExerciseItem from '../ExerciseItem';
import './index.css';

class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addOption: props.addOption,
        }
    }

    addExercise = (exercise) => {
        console.log('received exercise ' + exercise + ' in ExerciseList')
        this.props.addExercise(exercise);
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
                                        exercise={exercise.data} 
                                        addOption={this.state.addOption}
                                        addExercise={this.addExercise}
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