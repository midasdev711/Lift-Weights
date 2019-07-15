import React, { Component } from 'react';
import './index.css';


class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.state = { exerciseList: [] };
    }

    render() {
        this.state.exerciseList = this.props.exercises.map((exercise) => {
            return <div key={exercise.data.id}>{exercise.data.name}</div>
        });

        return <div>{this.state.exerciseList}</div>;
    }
}

export default ExerciseList;