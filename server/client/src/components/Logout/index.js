import React, {Component} from 'react';

import { Grid, Message } from 'semantic-ui-react';
import './index.css';

class Logout extends Component {

    render() {
        return (
            <div className='Logout'>
                <Grid className='Grid' textAlign='center' verticalAlign='middle'>
                    <Grid.Row className='Row'>
                        <Grid.Column>
                            <Message>Plan Your Next Session!</Message>
                            <Message>
                                <a href='/'>Login</a>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>  
            </div>
        );
    }
}

export default Logout;