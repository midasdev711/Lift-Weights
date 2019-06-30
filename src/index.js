import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './shared_components/Header';
import Footer from './shared_components/Footer';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import './index.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Profile />
                <Login />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);
