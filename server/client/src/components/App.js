import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';

import './App.css';
class App extends Component {

    render() {
        return (
            <BrowserRouter>                
                <div className="App">
                    <Header />
                    <Profile />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;