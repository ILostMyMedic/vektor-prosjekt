import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import * as serviceWorker from './serviceWorker';

let state = {};
// NOTE: Will rerender on state changes
window.setState = (changes) => {
    state = Object.assign({}, state, changes);

    // NOTE: Render method
    ReactDOM.render(
        <Router>
            <App {...state}>
                <Routes />
                {/* Code... */}

            </App>
        </Router>, 
        document.getElementById('root')
    );
}

// NOTE: Required to make the page load
window.setState({
    load: true
});

// serviceworker
serviceWorker.unregister();
