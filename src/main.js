import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import UserPage from './components/UserPage';
import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Route, Routes} from 'react-router';

let routes = (
    <Route name="app" path="/" handler={App} >
        <Route name="about" handler={About} />
        <Route name="home" handler={Home} />
        <Route name="user" handler={UserPage} />
        <Route name="login" handler={Login} />
        <DefaultRoute handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocalion, function(Handler) {
    React.render(<Handler />, document.body);
});
