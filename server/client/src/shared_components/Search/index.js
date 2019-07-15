import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './index.css';

class Search extends Component {

    state = { search: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.search);
    }

    render() {
        return (
            <div className='Search'>
                <Form size='large' onSubmit={this.onFormSubmit}>
                    <Form.Input 
                        placeholder='Search for Exercise' 
                        type='text'
                        value={this.state.search}
                        onChange={e => this.setState({ search: e.target.value })}
                    />
                </Form>
            </div>
        );
    }
}

export default Search;