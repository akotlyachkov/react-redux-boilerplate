import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import store from './store';
import {Router,browserHistory} from 'react-router'
import DefaultPage from "./containers/default";
import AboutPage from "./containers/about";
import Layout from "./containers/layout";

const routes = {
    path: '/',
    component: Layout,
    indexRoute: {component: DefaultPage},
    childRoutes: [
        {path: 'about', component: AboutPage}
    ]
};

ReactDOM.render(
    <Provider store={store}>
        <Router  history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root'));
