import React, {Component} from 'react';
import { Grid, List, Label, Input } from 'semantic-ui-react';

import './index.css';


class ExerciseDataForm extends Component {

    render() {
        const { set, reps, weights, rpe, duration } = this.props;

        return (
            <List.Description className='measurement'>
                <Grid columns='equal'>
                    <Grid.Row columns={5}>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                reps
                            </Label>
                            <Input type='text' placeholder={reps}  className='tinyInput' />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                set
                            </Label>
                            <Input type='text' placeholder={set}  className='tinyInput' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                weights
                            </Label>
                            <Input type='text' placeholder={weights}  className='smallInput' />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                rpe
                            </Label>
                            <Input type='text' placeholder={rpe}  className='tinyInput' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                duration
                            </Label>
                            <Input type='text' placeholder={duration}  className='smallInput' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </List.Description>
        );
    }
}

export default ExerciseDataForm;