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
            exerciseCount: 0,
            totalSets: 1
        }
        this.setDefaultValues();
    }

    componentDidMount = () => {
        this.renderAllInputs();
    }

    // set values if null
    setDefaultValues = () => {

        if (this.props.set !== null) {
            console.log('setting this.props.set in setDefaultValues')
            this.setState({ set: this.props.set })
        }

        if (this.props.reps !== null) {
            this.setState({ reps: this.props.reps })
        }

        if (this.props.weights !== null) {
            this.setState({ weights: this.props.weights })
        }

        if (this.props.rpe !== null) {
            this.setState({ rpe: this.props.rpe })
        }

        if (this.props.duration !== null) {
            this.setState({ duration: this.props.duration })
        }
    }

    // adds data into the respective measurement's array
    handleInput = (e, data, val) => {
        e.preventDefault();
        if (data.length > 0) {
            data.pop();
        }
        data.push(val)
    }

    // render inputs for all measurements
    renderAllInputs = () => {
        this.setState({ setJSX: this.renderInput(this.state.set, 'tinyInput'),
                        repsJSX: this.renderInput(this.state.reps, 'tinyInput'),
                        weightsJSX: this.renderInput(this.state.weights, 'smallInput'),
                        rpeJSX: this.renderInput(this.state.rpe, 'tinyInput'),
                        durationJSX: this.renderInput(this.state.duration, 'smallInput')
        })
    }

    // render one input for a single measurement type
    renderInput = (data, name) => {
        let value = data[data.length - 1]

        this.setState({ exerciseCount: this.state.exerciseCount + 1 });

        return (
            <Input 
                key={this.state.exerciseCount} 
                type='text' 
                placeholder={0} 
                className={name}
                value={value}
                onChange={e => this.handleInput(e, data, e.target.value) } 
            />
        );
    }

    // render array inputs
    renderMultiInput = (data, name) => {
        return (
            <div>
                {data.map((_, index) => {
                    this.setState({ exerciseCount: this.state.exerciseCount + 1 });

                    let pval = 0
                    let val = undefined;

                    if (index > 0) {
                        pval = data[index - 1]
                    }
                    if (index < data.length - 1) {
                        val = data[index]
                    }

                    return (
                        <Input 
                            key={this.state.exerciseCount} 
                            type='text' 
                            placeholder={pval} 
                            className={name}
                            value={val}
                            onChange={e => this.handleInput(e, data, e.target.value) } 
                        />
                    );
                })}
            </div>
        );
    }

    // add a new row of inputs when Add button is clicked
    handleAdd = async (e) => {
        e.preventDefault();
        const { set, reps, weights, rpe, duration } = await this.state;

        await reps.push('')
        await weights.push('')
        await rpe.push('')
        await duration.push('')
        await set.push('')

        await this.setState({ totalSets: this.state.totalSets + 1,
                              setJSX: this.renderMultiInput(this.state.set, 'tinyInput'),
                              repsJSX: this.renderMultiInput(this.state.reps, 'tinyInput'),
                              weightsJSX: this.renderMultiInput(this.state.weights, 'smallInput'),
                              rpeJSX: this.renderMultiInput(this.state.rpe, 'tinyInput'),
                              durationJSX: this.renderMultiInput(this.state.duration, 'smallInput')
        })
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
                            <Button circular icon='add' size='mini' className='addButton' onClick={(e) => this.handleAdd(e)} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </List.Description>
        );
    }
}

export default ExerciseDataForm;