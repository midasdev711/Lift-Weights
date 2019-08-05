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
            logout: false,
            userId: this.props.location.state.id,
            userName: this.props.location.state.user
        }
    }

    onLogout = async status => {
        await this.setState({ logout: status })
    }

    render() {
        const { userId, userName } = this.state;

        if (this.state.logout === true) {
            return (
                <Logout onLogout={this.onLogout} />
            );
        } else {
            return (
                <BrowserRouter>                
                    <div className="Profile" >
                        <Nav user={userName} id={userId} onLogout={this.onLogout} />
                        <Container>
                            <Route exact path="/profile" 
                                         render={(props) => <Tabs {...props} userId={userId} />}/>
                            <Route exact path="/profile/workouts" 
                                         render={(props) => <Workouts {...props} userId={userId} />}/>
                            <Route exact path="/profile/exercises"
                                         render={(props) => <Exercises {...props} userId={userId} />}/>
                            <Route exact path="/profile/measurements"
                                         render={(props) => <Measurements {...props} userId={userId} />}/>
                            <Route exact path="/profile/settings" 
                                         render={(props) => <Settings {...props} userId={userId} />}/>
                            <Route exact path="/logout" component={Logout} />
                        </Container>
                    </div>
                </BrowserRouter>                
            );
        }
    }
}

export default Profile;