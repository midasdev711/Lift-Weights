import React, {Component} from 'react';

import Nav from '../Nav';
import Tabs from '../Tabs';

import './index.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Tabs />
            </div>
        );
    }
}

export default Profile;