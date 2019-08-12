import React, {Component} from 'react';
import { Grid, List, Label, Input, Button } from 'semantic-ui-react';
import moment from 'moment';

import './index.css';


class ExerciseDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            set: [''],
            setJSX: <div />,
            reps: [''],
            repsJSX: <div />,
            weights: [''],
            weightsJSX: <div />,
            rpe: [''],
            rpeJSX: <div />,
            duration: [''],
            durationJSX: <div />,
            datetime: [''],
            exerciseCount: 0,
            totalSets: 1
        }
    }

    componentDidMount = () => {
        this.setDefaultValues();
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

        this.renderAllInputs();
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

    // render array inputs
    renderInput = (data, name) => {
        return (
            <div>
                {data.map((_, index) => {
                    this.setState({ exerciseCount: this.state.exerciseCount + 1 });

                    let pval = 0
                    let val = undefined;

                    if (index > 0 && data[index - 1] !== '') {
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

    updateExercises = async () => {
        const { set, reps, weights, rpe, duration, datetime } = await this.state;
        const length = set.length - 1
        const updatedExercises = await [set.slice(0, length), reps.slice(0, length), weights.slice(0, length), rpe.slice(0, length), duration.slice(0, length), datetime.slice(0, length)];
        await this.props.updateExercises(updatedExercises);
    }

    // add a new row of inputs when Add button is clicked
    handleAdd = async (e) => {
        e.preventDefault();
        const { set, reps, weights, rpe, duration, datetime } = await this.state;
        const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");

        await reps.push('')
        await weights.push('')
        await rpe.push('')
        await duration.push('')
        await set.push('')
        await datetime.pop()
        await datetime.push(currentTime)
        await datetime.push('')

        await this.setState({ totalSets: this.state.totalSets + 1,
                              setJSX: this.renderInput(this.state.set, 'tinyInput'),
                              repsJSX: this.renderInput(this.state.reps, 'tinyInput'),
                              weightsJSX: this.renderInput(this.state.weights, 'smallInput'),
                              rpeJSX: this.renderInput(this.state.rpe, 'tinyInput'),
                              durationJSX: this.renderInput(this.state.duration, 'smallInput')
        })

        await this.updateExercises();
    }

    render() {
        return (
            <List.Description className='measurement'>
                <Grid columns='equal'>
                    <Grid.Row columns={6} className='formRow'>
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