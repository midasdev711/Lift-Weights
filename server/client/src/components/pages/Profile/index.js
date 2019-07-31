import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Nav from '../../../shared_components/Nav';
import Tabs from '../../tabContent/Tabs';
import Workouts from '../../tabContent/Workouts';
import Exercises from '../../tabContent/Exercises';
import Measurements from '../../tabContent/Measurements';
import Settings from '../../pages/Settings';
import Logout from '../Logout';

import './index.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        }
    }

    onLogout = async status => {
        await this.setState({ logout: status })
    }

    render() {
        if (this.state.logout === true) {
            return (
                <Logout onLogout={this.onLogout} />
            );
        } else {
            return (
                <BrowserRouter>                
                    <div className="Profile" >
                        <Nav user={this.props.location.state.user} id={this.props.location.state.id} onLogout={this.onLogout} />
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
}

export default Profile;