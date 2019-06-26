import React, {Component} from 'react';
import faker from 'faker';

import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.animals()} />
                </a>
            </div>
        );
    }
}

export default Profile;