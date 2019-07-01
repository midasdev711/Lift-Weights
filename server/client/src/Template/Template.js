// TODO: replace 'Template' with new component name

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Template.css';

class Template extends Component {
    
    static propTypes = {
        paragraph: PropTypes.string,
        required_paragraph: PropTypes.string.isRequired
    };

    render() {
        const {
            paragraph = 'Some Interesting Content HERE',
            required_paragraph = 'Required to be interesting',
        } = this.props;
        return (
            <div className="Template">
                <p>{required_paragraph}</p>
            </div>
        );
    }
}

export default Template;