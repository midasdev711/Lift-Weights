import React, {Component} from 'react';
import { Container, Tab } from 'semantic-ui-react';

import Overview from '../Overview';
import Workouts from '../Workouts';
import Exercises from '../Exercises';
import Measurements from '../Measurements';

import './index.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                            <Workouts />
                        </Tab.Pane>,
                },
                {
                    menuItem: {
                        key: 'exercises',
                        icon: 'unordered list',
                        content: 'Exercises'
                    },
                    render: () =>
                        <Tab.Pane className="TabPane">
                            <Exercises />
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