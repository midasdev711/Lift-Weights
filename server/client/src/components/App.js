import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import './App.css';

// shared components
import Footer from '../shared_components/Footer';


class App extends Component {

    render() {
        return (
            <BrowserRouter>                
                <div className="App">
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/logout" component={Logout} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;