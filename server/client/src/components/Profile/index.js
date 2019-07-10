import React, {Component} from 'react';

import Nav from '../../shared_components/Nav';
import Tabs from '../Tabs';

import './index.css';

class Profile extends Component {
    render() {
        return (
            <div className="Profile" >
                <Nav />
                <Tabs />
            </div>
        );
    }
}

export default Profile;