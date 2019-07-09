import React, {Component} from 'react';
import faker from 'faker';

import './Avatar.css';

class Avatar extends Component {
    render() {
        return (
            <div className="Avatar">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.animals()} />
                </a>
            </div>
        );
    }
}

export default Avatar;
