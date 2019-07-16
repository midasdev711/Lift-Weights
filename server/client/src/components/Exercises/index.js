import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import wger from '../../api/wger';
import Search from '../../shared_components/Search';
import ExerciseList from '../../shared_components/ExerciseList';
import './index.css';

class Exercises extends Component {
    state = { 
        exercises: [],
        visible: false,
        foundStatement: <p id="Found"></p>,
        exerciseList: <div></div>
    };

    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });
        await this.setState({ exercises: response.data.suggestions, visible: true });
        await this.updateVisibility();
        console.log('set visibility state to: ' + this.state.visible);
    };

    updateVisibility = () => {
        if (this.state.visible === true) {
            this.setState({ foundStatement: <p id="Found">Found: {this.state.exercises.length} exercises</p>,
                            exerciseList: <ExerciseList exercises={this.state.exercises} />
            });
        }
    };

    render() {
        return (
            <div className='Exercises'>
                <Grid className='Grid' textAlign='center' divided='vertically'>
                    <Grid.Row className='Row'>
                        <Grid.Column className='Column'>
                            <Search onSearch={this.onSearch} />
                            {this.state.foundStatement}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='Row' columns={1}>
                        <Grid.Column className='Column'>
                            {this.state.exerciseList}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Exercises;