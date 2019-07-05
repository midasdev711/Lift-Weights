import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
            <div className="App">
                <Header />
                <Profile />
                <p> login test </p>
                <Login />
                <p> register test </p>
                <Register />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);
