import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import './App.css';

// shared components
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';


class App extends Component {

    render() {
        return (
            <BrowserRouter>                
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;