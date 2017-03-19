import React from "react";
import DefaultLayout from "./layouts/default";
import IndexPage from "./pages/index";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

let routeMap = (
    <Router history={browserHistory}>
        <Route path="/" exact component={DefaultLayout}>
            <IndexRoute component={IndexPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
        </Route>
    </Router>
);

export default routeMap;
