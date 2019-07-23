import React from 'react';
import { Segment, List, Image } from 'semantic-ui-react';

import ExerciseItem from '../ExerciseItem';
import './index.css';

const ExerciseList = props => {
    const exerciseList = props.exercises.map((exercise) => {
        return (
            <ExerciseItem className="ExerciseItem" key={exercise.data.id} exercise={exercise.data}/>
        );
    });

    return (
        <div className="ExerciseList">
            <Image.Group size="mini">
                <Segment>
                    <List divided relaxed>
                        {exerciseList}
                    </List>
                </Segment>
            </Image.Group>
        </div>
    );
}

export default ExerciseList;