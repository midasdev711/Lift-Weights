import React, {Component} from 'react';

import './index.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                id: '',
                username: ''
            }
        }
    }

    render() {
        return (
            // Theme is modified from Semantic UI React's Tab Layout
            // https://react.semantic-ui.com/modules/tab/
            <div className="Profile">

            </div>
        );
    }
}

export default Profile;