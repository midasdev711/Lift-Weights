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
        exerciseList: <div></div>,
        foundStatement: <p id="Found"></p>,
    };

    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });
        await this.setState({ exercises: response.data.suggestions, 
                              visible: true });
        await this.updateVisibility();
    };

    updateVisibility = () => {
        if (this.state.visible === true) {
            this.setState({ exerciseList: <ExerciseList exercises={this.state.exercises} />,
                            foundStatement: <p id="Found">Found: {this.state.exercises.length} exercises</p>
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
                    <Grid.Row className='Row'>
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