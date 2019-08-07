import React, {Component} from 'react';

import WorkoutModal from '../../../shared_components/WorkoutModal';
import './index.css';


class Workouts extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            userId: this.props.userId,
            workouts: [],
            workoutList: <div></div>,
        };
    }

    render() {
        return (
            <div className='Workouts'>
                <WorkoutModal userId={this.state.userId} modalType="create" />
                <WorkoutModal userId={this.state.userId} modalType="edit" />
                <WorkoutModal userId={this.state.userId} modalType="workout" />
            </div>
        );
    }
}

export default Workouts;