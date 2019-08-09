import React, {PureComponent} from 'react';
import { Container, Tab } from 'semantic-ui-react';

import Overview from '../Overview';
import Workouts from '../Workouts';
import Exercises from '../Exercises';
import Measurements from '../Measurements';

import './index.css';

class Tabs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            paddingBottom: '0px',
            exercisePadding: 64,
            panes: [
                {
                    menuItem: {
                        key: 'overview',
                        icon: 'user circle',
                        content: 'Overview'
                    },
                    render: () => 
                        <Tab.Pane className="TabPane">
                            <Overview />
                        </Tab.Pane>,
                },
                {
                    menuItem: {
                        key: 'workouts',
                        icon: 'list layout',
                        content: 'Workouts'
                    },
                    render: () => 
                        <Tab.Pane className="TabPane">
                            <Workouts userId={this.state.userId} />
                        </Tab.Pane>,
                },
                {
                    menuItem: {
                        key: 'exercises',
                        icon: 'unordered list',
                        content: 'Exercises'
                    },
                    render: () =>
                        <Tab.Pane className="TabPane" style={{paddingBottom:`${this.state.paddingBottom}px`}}>
                            <Exercises updateExercisePadding={this.updateExercisePadding}/>
                        </Tab.Pane>,
                },
                {
                    menuItem: {
                        key: 'measurements',
                        icon: 'line graph',
                        content: 'Measurements'
                    },
                    render: () =>
                        <Tab.Pane className="TabPane">
                            <Measurements />
                        </Tab.Pane>,
                }
            ]
        }
    }

    // updates the value of paddingBottom 
    updateExercisePadding = async length => {
        await this.setState({paddingBottom: (length * this.state.exercisePadding) + 10})
    }

    render() {
        return (
            <div className="Tabs">
                <Container className="Container">
                    <Tab panes={this.state.panes} />
                </Container>
            </div>
        );
    }
}

export default Tabs;