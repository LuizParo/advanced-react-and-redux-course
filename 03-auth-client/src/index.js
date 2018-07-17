import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Signup from './components/auth/Signup';
import Welcome from './components/Welcome';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" component={Welcome} />
            <Route path="/signup" component={Signup} />
        </App>
    </BrowserRouter>,
    document.querySelector('#root')
);