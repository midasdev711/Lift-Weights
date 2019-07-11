import React, {Component} from 'react';
import './index.css';

class Settings extends Component {

    render() {
        return (
            <div className="Settings">
                <p>Account Settings</p>
                <ul>
                    <li>Change Username</li>
                    <li>Change Password</li>
                    <li>Delete Account</li>
                </ul>
            </div>
        );
    }
}

export default Settings;