import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

import './index.css';

class Avatar extends Component {
    render() {
        return (
            <div className='Avatar'>
                <Link to='/profile'>
                    <img alt='Avatar' src={faker.image.cats()} />
                    <div className='Username'>
                        <span>Username</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Avatar;
