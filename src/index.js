import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login/Login';
import Footer from './shared_components/Footer';
import Header from './shared_components/Header';
import './index.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
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
