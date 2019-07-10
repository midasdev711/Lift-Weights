import React, {Component} from 'react';
import { Icon, Menu, Container, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar'
import './index.css';

class Nav extends Component {
    render() {
        // modified from example of SemanticUI nav bar
        // source: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
        return (
            <Menu size='large'>
                <Container>
                    <Menu.Item as='a' active>
                        A Nice Logo
                    </Menu.Item>
                    <Menu.Item as='a' active>
                        <Link to="/profile">
                            <Icon name="home" />
                        </Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown text='Options' pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Workouts</Dropdown.Item>
                                <Dropdown.Item>Exercises</Dropdown.Item>
                                <Dropdown.Item>Measurements</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item as='a' active>
                            <Link to="/settings">
                                Settings <Icon name="cog" />
                            </Link>
                        </Menu.Item>
                        <Menu.Item as='a' active>
                            <Link to="/profile">
                                <Avatar />
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

export default Nav;