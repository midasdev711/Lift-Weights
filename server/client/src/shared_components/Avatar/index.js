import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

import './index.css';

class Avatar extends Component {
    render() {
        return (
            <div className="Avatar">
                <Link to="/">
                    <img alt="avatar" src={faker.image.animals()} />
                </Link>
            </div>
        );
    }
}

export default Avatar;
