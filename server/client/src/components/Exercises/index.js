import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import wger from '../../api/wger';
import Search from '../../shared_components/Search';
import ExerciseList from '../../shared_components/ExerciseList';
import './index.css';

class Exercises extends Component {
    state = { exercises: [] };

    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });
        this.setState({ exercises: response.data.suggestions });
    };

    render() {
        return (
            <div className='Exercises'>
                <Grid className='Grid' textAlign='center'>
                    <Grid.Column className='Column' rows={3}>
                        <Grid.Row className='RowSearch'>
                            <Search onSearch={this.onSearch} />
                        </Grid.Row>
                        <Grid.Row className='RowFound'>
                            Found: {this.state.exercises.length} exercises
                        </Grid.Row>
                        <Grid.Row className='RowList'>
                            <ExerciseList exercises={this.state.exercises} />
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Exercises;