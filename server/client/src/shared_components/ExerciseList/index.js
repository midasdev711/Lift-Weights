import React from 'react';
import './index.css';


const ExerciseList = props => {
    const exerciseList = props.exercises.map((exercise) => {
        return <div>{exercise.data.name}</div>
    });

    return <div>{exerciseList}</div>;
}

export default ExerciseList;