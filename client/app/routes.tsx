
import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import DefaultLayout from './layouts/default';
import IndexPage from './pages/index';
import HomePage from './pages/home';
import AboutPage from './pages/about';

let routeMap = (
    <Route path="/" component={DefaultLayout}>
        <IndexRoute component={IndexPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
    </Route>
);

export default routeMap;
