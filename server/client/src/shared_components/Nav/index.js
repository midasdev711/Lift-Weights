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
                    <Menu.Item>
                        A Nice Logo
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/profile">
                            <Icon name="home" />
                        </Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown text='Options' pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to='/workouts'>
                                        Workouts
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='/exercises'>
                                        Exercises
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='/measurements'>
                                        Measurements
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <Link to='/logout'>
                                        Logout
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item>
                            <Link to="/settings">
                                Settings <Icon name="cog" />
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Avatar />
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

export default Nav;