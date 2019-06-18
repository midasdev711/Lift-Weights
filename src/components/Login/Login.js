import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <p>
                    <input id="name" type="text" />
                    <input id="password" type="password" />
                    <button id="login">Login</button>
                </p>
            </div>
        );
    }
}

export default Login;