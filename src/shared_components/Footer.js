import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = props => {

    let date = new Date();
    let {
        startYear = '2019',
        currYear = date.getFullYear(),
        endYear = ''
    } = props;

    if (startYear !== currYear.toString()) {
        endYear = ' - ' + currYear;
    }

    return (
        <div className="Footer">
            <p>&#x24B8; {startYear}{endYear} Lift Weights by Michelle Duer</p>
        </div>
    );
}

Footer.propTypes = {
    startYear: PropTypes.string.isRequired,
    currYear: PropTypes.number.isRequired,
    endYear: PropTypes.string,
};

export default Footer;