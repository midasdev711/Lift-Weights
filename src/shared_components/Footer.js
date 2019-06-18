import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        let date = new Date();
        let thisYear = date.getFullYear();
        let startYear = '2019';
        let endYear = '';

        if (startYear !== thisYear.toString()) {
            endYear = ' - ' + thisYear;
        }

        return (
            <div className="Footer">
                <p>&#x24B8; {startYear}{endYear} Lift Weights by Michelle Duer</p>
            </div>
        );
    }
}

export default Footer;