import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <input id="name" type="text" />
                <input id="password" type="password" />
                <button id="login">Login</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);
