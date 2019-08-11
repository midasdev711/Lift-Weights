import React, {Component} from 'react';
import { Grid, List, Label, Input, Button } from 'semantic-ui-react';

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

    renderInput = (placeholder, name) => {
        return (
            <Input type='text' placeholder={placeholder[0]}  className={name} />
        );
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
                            {this.renderInput(reps, 'tinyInput')}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                set
                            </Label>
                            {this.renderInput(set, 'tinyInput')}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                weights
                            </Label>
                            {this.renderInput(weights, 'smallInput')}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                rpe
                            </Label>
                            {this.renderInput(rpe, 'tinyInput')}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                duration
                            </Label>
                            {this.renderInput(duration, 'smallInput')}
                        </Grid.Column>
                        <Grid.Column width={3} className='addButtonColumn'>
                            <Button circular icon='add' size='mini' className='addButton' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </List.Description>
        );
    }
}

export default ExerciseDataForm;