import React, {Component} from 'react';
import { Form, Grid } from 'semantic-ui-react';
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
                <Grid className='Grid' textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='Column'>
                    <Form size='large' onSubmit={this.onFormSubmit}>
                        <Form.Input 
                            placeholder='Search' 
                            type='text'
                            value={this.state.search}
                            onChange={e => this.setState({ search: e.target.value })}
                        />
                    </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Search;