import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Nav from '../../shared_components/Nav';
import Tabs from '../Tabs';
import Workouts from '../Workouts';
import Exercises from '../Exercises';
import Measurements from '../Measurements';
import Settings from '../Settings';
import Logout from '../Logout';

import './index.css';

class Profile extends Component {
    render() {
        return (
            <BrowserRouter>                
                <div className="Profile" >
                    <Nav />
                    <Container>
                        <Route exact path="/profile" component={Tabs} />
                        <Route exact path="/profile/workouts" component={Workouts} />
                        <Route exact path="/profile/exercises" component={Exercises} />
                        <Route exact path="/profile/measurements" component={Measurements} />
                        <Route exact path="/profile/settings" component={Settings} />
                        <Route exact path="/logout" component={Logout} />
                    </Container>
                </div>
            </BrowserRouter>                
        );
    }
}

export default Profile;