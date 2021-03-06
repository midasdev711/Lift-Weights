import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import wger from '../../../api/wger';
import Search from '../../../shared_components/Search';
import ExerciseList from '../../../shared_components/ExerciseList';
import './index.css';

class Exercises extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            exercises: [],              // API results
            exerciseResults: <div></div>,  // JSX list
            visible: false,
            foundStatement: <p id="Found"></p>,
        };
    }

    // search for exercise results
    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });

        await this.setState({ exercises: response.data.suggestions, 
                              visible: true });
        await this.updateVisibility();
        await this.props.updateExercisePadding(this.state.exercises.length);
    };

    updateVisibility = () => {
        if (this.state.visible === true) {
            this.setState({ exerciseResults: <ExerciseList 
                                                exercises={this.state.exercises} 
                                                addOption={false} 
                                                removeOption={false} 
                                             />,
                             foundStatement: <p id="Found">Found: {this.state.exercises.length} exercises</p>
            });
        }
    };

    render() {
        const { foundStatement, exerciseResults } = this.state;

        return (
            <div className='Exercises'>
                <Grid className='Grid' textAlign='center' divided='vertically'>
                    <Grid.Row className='Row'>
                        <Grid.Column className='Column'>
                            <Search onSearch={this.onSearch} />
                            {foundStatement}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='Row'>
                        <Grid.Column className='Column'>
                            {exerciseResults}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Exercises;