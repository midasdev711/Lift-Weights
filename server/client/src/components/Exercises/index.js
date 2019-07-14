import React, {Component} from 'react';

import wger from '../../api/wger';
import Search from '../../shared_components/Search';
import './index.css';

class Exercises extends Component {
    state = { exercises: [] };

    onSearch = async search => {
        const response = await wger.get('/exercise/search', {
            params: { term: search }, 
        });
        this.setState({ exercises: response.data.suggestions });
    };

    render() {
        return (
            <div className='Exercises'>
                <Search onSearch={this.onSearch} />
                Found: {this.state.exercises.length} exercises
            </div>
        );
    }
}

export default Exercises;