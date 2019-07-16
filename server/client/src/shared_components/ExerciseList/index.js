import React from 'react';
import { Segment, List, Image } from 'semantic-ui-react';
import './index.css';


const ExerciseList = props => {
    const exerciseList = props.exercises.map((exercise) => {
        return (
            <List.Item className="ExerciseItem" key={exercise.data.id}>
                <Image className="ExerciseImage" src={exercise.data.image} verticalAlign="middle" />
                <List.Content>
                    <List.Header>{exercise.data.name}</List.Header>
                    <p>{exercise.data.category}</p>
                </List.Content>
            </List.Item>
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