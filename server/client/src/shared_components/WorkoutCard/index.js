import React, { Component } from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';

import WorkoutModal from '../WorkoutModal';
import ExerciseList from '../ExerciseList';
import './index.css';

class WorkoutCard extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            exercises: [],
            exercisesJSX: <div />
        };
    }

    componentDidMount = () => {
        this.getExercises();
    }

    // retrieve user's exercises for specified workout
    getExercises = async () => {
        let exercises = [];
        const res = await fetch(`http://localhost:5000/exercises/retrieve?id=${this.props.id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })

        const resJSON = await res.json();

         resJSON.forEach(async e => {
            await exercises.push([e.name, e.id])
        })
        await this.setState({ exercises: exercises });
        await this.renderExercises();
    }

    renderExercises = async () => {
        if (await this.state.exercises.length > 0) {
            await this.setState({ exercisesJSX: <ExerciseList exercises={this.state.exercises} display='minimal' /> })
        }
    }

    render() {

        return (
            <Card className='workoutCard'>
                <Card.Content>
                    <Header as='h3' color='blue'>
                        {this.props.name}
                    </Header>
                </Card.Content>
                <Card.Content>
                    {this.state.exercisesJSX}
                    <Grid columns='equal'>
                        <Grid.Row columns={3}>
                            <Grid.Column width={4}>
                                <WorkoutModal userId={this.state.userId} modalType='delete' />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <WorkoutModal userId={this.state.userId} modalType='edit' />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <WorkoutModal userId={this.state.userId} modalType='workout' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        );
    }
}

export default WorkoutCard;