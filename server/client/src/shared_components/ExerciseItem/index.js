import React, {Component} from 'react';
import { List, Image, Button, Icon, Header } from 'semantic-ui-react';

import ExerciseDataForm from '../ExerciseDataForm';
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

    render() {

        if (this.props.display === 'minimal') {
            return (
                <List.Item>
                    <List.Content floated='left'>
                        <List.Header>
                            {this.props.name}
                        </List.Header>
                    </List.Content>
                </List.Item>
            );
        } else if (this.props.collapse === true && this.props.display === 'full') {
            return (
                <List.Item>
                    <Header as='h4' className='exerciseName'>
                        {this.props.name}
                    </Header>
                </List.Item>
            );
        } else if (this.props.collapse !== true && this.props.display === 'full') {
            return (
                <List.Item>
                    <Header as='h4' className='exerciseName'>
                        {this.props.name}
                    </Header>
                     <ExerciseDataForm 
                        name={this.props.name} 
                        id={this.props.id} 
                        equipment={this.props.equipment} 
                        set={this.props.set} 
                        reps={this.props.reps} 
                        weights={this.props.weights} 
                        rpe={this.props.rpe} 
                        duration={this.props.duration} 
                    />
                </List.Item>
            );
        } else {
            const { name, category } = this.props.exercise.data;

            return (
                <List.Item>
                    {this.addImage()}
                    <List.Content floated='left'>
                        <List.Header>
                            {name} ({category})
                        </List.Header>
                    </List.Content>
                    {this.addOrRemoveIcons()}
                </List.Item>
            );
        }
    }
}

export default ExerciseItem;