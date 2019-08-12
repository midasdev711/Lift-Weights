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
    handleInput = async (data, val) => {
        await console.log('pre push data = ')
        await console.log(data)
        if (data === await []) {
            await data.push(val)
        } else {
            await data.pop();
            await data.push(val)
        }
        await console.log('post push data = ')
        await console.log(data)
    }

    // render all inputs 
    renderAllInputs = () => {
        console.log('renderAllInputs set = ')
        console.log(this.state.set)

        this.setState({ setJSX: this.renderInput(this.state.set, 'tinyInput'),
                        repsJSX: this.renderInput(this.state.reps, 'tinyInput'),
                        weightsJSX: this.renderInput(this.state.weights, 'smallInput'),
                        rpeJSX: this.renderInput(this.state.rpe, 'tinyInput'),
                        durationJSX: this.renderInput(this.state.duration, 'smallInput')
        })
                                        
        /*
        this.setState({ setJSX: this.state.set.map((set) => {
                                    this.setState({ exerciseCount: this.state.exerciseCount + 1 })
                                    return (
                                        <Input 
                                            key={this.state.exerciseCount} 
                                            type='text' 
                                            placeholder={7} 
                                            className='tinyInput' 
                                            value={this.state.set[0]} 
                                            onChange={e => this.setState({ set: set.push(e.target.value) })} 
                                        />
                                    );
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
        */
    }

    // render one input
    renderInput = (data, name) => {
        let value = '';

        if (data === []) {
            value = 0;
        } else {
            value = data[data.length - 1]
        }

        this.setState({ exerciseCount: this.state.exerciseCount + 1 });

        return (
            <Input 
                key={this.state.exerciseCount} 
                type='text' 
                placeholder={0} 
                className={name}
                value={value}
                onChange={e => this.handleInput(data, e.target.value) } 
            />
        );
    }

    // add a new row of inputs when Add button is clicked
    handleAdd = async (e) => {
        e.preventDefault();
        const { set, reps, weights, rpe, duration } = await this.state;
        let index = this.state.totalSets - 1;
        await console.log('INDEX: ' + index)

        await console.log('handle ADD')

        // TODO: copy values from previous row into new row and render

        await reps.push(reps[index])
        await weights.push(weights[index])
        await rpe.push(rpe[index])
        await duration.push(duration[index])
        await set.push(set[index])

        await this.setState({ totalSets: this.state.totalSets + 1 })

        await console.log('post ADD')
        await console.log(this.state)
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