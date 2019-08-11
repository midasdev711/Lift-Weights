import React, {Component} from 'react';
import { Grid, List, Image, Button, Icon, Header, Label, Input } from 'semantic-ui-react';
import './index.css';


class ExerciseItem extends Component {

    handleClick = async e => {
        e.preventDefault();
        const { addOption, removeOption } = this.props;

        if (addOption === true && removeOption === false) {
            await this.props.addExercise(this.props.exercise);
        } else if (removeOption === true && addOption === false) {
            await this.props.removeExercise(this.props.exercise.data.id);
        }
    }

    addImage = () => {
        const { image } = this.props.exercise.data;

        if (this.props.addOption === true || this.props.removeOption === true) {
            return <Image className="ExerciseImage" src={image} verticalAlign="middle" floated='left' />;
        } else {
            return <Image className="ExerciseImage" src={image} verticalAlign="middle" floated='right' />;
        }
    }

    addOrRemoveIcons = () => {

        const { addOption, removeOption } = this.props;

        if (addOption === true && removeOption === false) {
            return (
                <List.Content floated='right'>
                    <Button inverted color='green' size='tiny' onClick={this.handleClick} >
                        <Icon name='plus'/> Add Exercise
                    </Button>
                </List.Content>
            );
        } 
        
        if (removeOption === true && addOption === false) {
            return (
                <List.Content floated='right'>
                    <Button inverted color='red' size='tiny' onClick={this.handleClick} >
                        <Icon name='minus'/> Remove Exercise
                    </Button>
                </List.Content>
            );
        } 
        
        if (removeOption === true && addOption === true) {
            return (
                <List.Content floated='right'>
                    <Button inverted color='green' size='tiny' onClick={this.handleClick} >
                        <Icon name='plus'/> Add 
                    </Button>
                    <Button inverted color='red' size='tiny' onClick={this.handleClick} >
                        <Icon name='minus'/> Remove 
                    </Button>
                </List.Content>
            );
        }
        return <div />;
    }

    renderInputs = () => {
        const { set, reps, weights, rpe, duration } = this.props;
        return (
            <List.Description>
                <Grid columns='equal' className='measurement'>
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
 

    render() {

        if (this.props.display === 'minimal') {
            return (
                <List.Item>
                    <List.Content floated='left'>
                        <List.Header>{this.props.name}</List.Header>
                    </List.Content>
                </List.Item>
            );
        } else if (this.props.display === 'full') {
            return (
                <List.Item>
                    <Header as='h4'>{this.props.name}</Header>
                    {this.renderInputs()}
                </List.Item>
            );
        } else {
            const { name, category } = this.props.exercise.data;

            return (
                <List.Item>
                    {this.addImage()}
                    <List.Content floated='left'>
                        <List.Header>{name} ({category})</List.Header>
                    </List.Content>
                    {this.addOrRemoveIcons()}
                </List.Item>
            );
        }
    }
}

export default ExerciseItem;