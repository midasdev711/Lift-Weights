import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import WorkoutCard from '../WorkoutCard';
import './index.css';

class WorkoutCardList extends Component {

    render() {

        return (
            <Card.Group itemsPerRow='3' className='cardGroup'>
                {this.props.workouts.map((workout) => {
                    return (
                        <WorkoutCard 
                            className='WorkoutCard' 
                            key={workout[1]} 
                            id={workout[1]} 
                            name={workout[0]}
                        />
                    );
                })}
            </Card.Group>
        );
    }
}

export default WorkoutCardList;