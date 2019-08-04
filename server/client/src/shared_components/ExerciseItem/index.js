import React, {Component} from 'react';
import { List, Image, Button, Icon } from 'semantic-ui-react';
import './index.css';


class ExerciseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addOption: this.props.addOption
        }
    }

    handleClick = async e => {
        e.preventDefault();
        await this.props.addExercise(this.props.exercise);
    }

    render() {
        const { image, name, category } = this.props.exercise.data;

        if (this.state.addOption === false) {
            return (
                <List.Item>
                    <Image className="ExerciseImage" src={image} verticalAlign="middle" floated='right' />
                    <List.Content floated='left'>
                        <List.Header>{name}</List.Header>
                        <p>{category}</p>
                    </List.Content>
                </List.Item>
            );

        } else {
            return (
                <List.Item>
                    <Image className="ExerciseImage" src={image} verticalAlign="middle" floated='left' />
                    <List.Content floated='left'>
                        <List.Header>{name}</List.Header>
                        <p>{category}</p>
                    </List.Content>
                    <List.Content floated='right'>
                        <Button inverted color='green' size='tiny' onClick={this.handleClick}>
                            <Icon name='plus'/> Add Exercise
                        </Button>
                    </List.Content>
                </List.Item>
            );
        }
    }
}

export default ExerciseItem;