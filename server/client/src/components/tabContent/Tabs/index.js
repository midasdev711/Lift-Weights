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
            paddingBottom: '0px',
            itemPadding: 64,
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
                        <Tab.Pane className="TabPane" style={{paddingBottom:`${this.state.paddingBottom}px`}}>
                            <Exercises updateBottomPadding={this.updateBottomPadding}/>
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
    updateBottomPadding = async length => {
        await this.setState({paddingBottom: (length * this.state.itemPadding) + 10})
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