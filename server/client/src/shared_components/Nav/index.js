import React, {Component} from 'react';
import { Icon, Menu, Container, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';
import Logo from '../Logo';
import './index.css';

class Nav extends Component {
    render() {
        // modified from example of SemanticUI nav bar
        // source: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
        return (
            <div className='Menu'>
                <Menu size='large' inverted >
                    <Container>
                        <Menu.Item>
                            <Logo />
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Link to='/profile'>
                                    <Icon name='home' />
                                </Link>
                            </Menu.Item>
                            <Dropdown text='Account' pointing className='link item' >
                                <Dropdown.Menu >
                                    <Dropdown.Item>
                                        <div>
                                            <Link to='/workouts'>
                                                <Icon name='list layout' /> Workouts
                                            </Link>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div>
                                            <Link to='/exercises'>
                                                <Icon name='unordered list' /> Exercises
                                            </Link>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div>
                                            <Link to='/measurements'>
                                                <Icon name='line graph' /> Measurements
                                            </Link>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                        <div>
                                            <Link to='/settings'>
                                                <Icon name='cog' /> Settings 
                                            </Link>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div>
                                            <Link to='/logout'>
                                                <Icon name='sign out' /> Logout
                                            </Link>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item>
                                <Avatar />
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default Nav;