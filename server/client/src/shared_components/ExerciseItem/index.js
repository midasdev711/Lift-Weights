import React, {Component} from 'react';
import { List, Image } from 'semantic-ui-react';
import './index.css';


class ExerciseItem extends Component {
    render() {
        const { image, name, category } = this.props.exercise;
        return (
            <List.Item>
                <Image className="ExerciseImage" src={image} verticalAlign="middle" />
                <List.Content>
                    <List.Header>{name}</List.Header>
                    <p>{category}</p>
                </List.Content>
            </List.Item>
        );
    }
}

export default ExerciseItem;