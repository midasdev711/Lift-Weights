import React, {Component} from 'react';
import { Grid, List, Label, Input, Icon } from 'semantic-ui-react';

import './index.css';


class ExerciseDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            set: [],
            reps: [],
            weights: [],
            rpe: [],
            duration: []
        }

        this.setDefaultValues();
    }

    setDefaultValues = () => {
        let { set, reps, weights, rpe, duration } = this.state;
        
        if (this.props.set === null) {
            set[0] = 0;
        }

        if (this.props.reps === null) {
            reps[0] = 0;
        }

        if (this.props.weights === null) {
            weights[0] = 0;
        }

        if (this.props.rpe === null) {
            rpe[0] = 0;
        }

        if (this.props.duration === null) {
            duration[0] = '0:00';
        }

    }

    render() {
        const { set, reps, weights, rpe, duration } = this.state;

        return (
            <List.Description className='measurement'>
                <Grid columns='equal'>
                    <Grid.Row columns={5}>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                reps
                            </Label>
                            <Input type='text' placeholder={reps[0]}  className='tinyInput' />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                set
                            </Label>
                            <Input type='text' placeholder={set[0]}  className='tinyInput' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                weights
                            </Label>
                            <Input type='text' placeholder={weights[0]}  className='smallInput' />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                rpe
                            </Label>
                            <Input type='text' placeholder={rpe[0]}  className='tinyInput' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                duration
                            </Label>
                            <Input type='text' placeholder={duration[0]}  className='smallInput' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='add circle' size='large' className='addIcon' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </List.Description>
        );
    }
}

export default ExerciseDataForm;