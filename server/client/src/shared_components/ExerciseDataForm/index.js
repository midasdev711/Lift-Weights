import React, {Component} from 'react';
import { Grid, List, Label, Input, Button } from 'semantic-ui-react';

import './index.css';


class ExerciseDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            set: [],
            setJSX: <div />,
            reps: [],
            repsJSX: <div />,
            weights: [],
            weightsJSX: <div />,
            rpe: [],
            rpeJSX: <div />,
            duration: [],
            durationJSX: <div />,
            exerciseCount: 0
        }

        this.setDefaultValues();
    }

    componentDidMount = () => {
        this.renderAllInputs();
    }

    // set values if null
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

    // render all inputs 
    renderAllInputs = () => {
        this.setState({ setJSX: this.state.set.map((set) => {
                                    this.setState({ exerciseCount: this.state.exerciseCount + 1 })
                                    return this.renderInput(this.state.exerciseCount, set, 'tinyInput');
                                }),
                        repsJSX: this.state.reps.map((rep) => {
                                    this.setState({ exerciseCount: this.state.exerciseCount + 1 })
                                    return this.renderInput(this.state.exerciseCount, rep, 'tinyInput');
                                }),
                        weightsJSX: this.state.weights.map((weight) => {
                                    this.setState({ exerciseCount: this.state.exerciseCount + 1 })
                                    return this.renderInput(this.state.exerciseCount, weight, 'smallInput');
                                }),
                        rpeJSX: this.state.rpe.map((rpe) => {
                                    this.setState({ exerciseCount: this.state.exerciseCount + 1 })
                                    return this.renderInput(this.state.exerciseCount, rpe, 'tinyInput');
                                }),
                        durationJSX: this.state.duration.map((duration) => {
                                    this.setState({ exerciseCount: this.state.exerciseCount + 1 })
                                    return this.renderInput(this.state.exerciseCount, duration, 'smallInput');
                                })
        })
    }

    // render one input
    renderInput = (key, placeholder, name) => {
        return (
            <Input key={key} type='text' placeholder={placeholder} className={name} />
        );
    }

    render() {
        return (
            <List.Description className='measurement'>
                <Grid columns='equal'>
                    <Grid.Row columns={5}>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                set
                            </Label>
                            {this.state.setJSX}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                reps
                            </Label>
                            {this.state.repsJSX}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                weights
                            </Label>
                            {this.state.weightsJSX}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Label className='tinyLabel'>
                                rpe
                            </Label>
                            {this.state.rpeJSX}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Label className='smallLabel'>
                                duration
                            </Label>
                            {this.state.durationJSX}
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