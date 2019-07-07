import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './shared_components/Header';
import Footer from './shared_components/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

import './index.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>                
                <div className="App">
                    <Header />
                    <Profile />
                    <Route exact={true} path="/" component={Login} />
                    <Route exact={true} path="/register" component={Register} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);
