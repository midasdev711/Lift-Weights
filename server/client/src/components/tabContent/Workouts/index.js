import React, {Component} from 'react';

import WorkoutModal from '../../../shared_components/WorkoutModal';
import './index.css';


class Workouts extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            workouts: [],
            workoutList: <div></div>,
        };
    }

    render() {
        return (
            <div className='Workouts'>
                <WorkoutModal />
            </div>
        );
    }
}

export default Workouts;