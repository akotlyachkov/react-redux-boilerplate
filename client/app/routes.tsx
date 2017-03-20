import React from "react";
import HomePage from "./pages/home";
import AboutPage from "./pages/About";
import {BrowserRouter,Switch, Routes, Route, Link} from "react-router-dom";
import IndexPage from "./pages/index";
import NotFoundPage from "./pages/not-found";
import AdminPage from "./pages/Admin";
import RestrictRoute from "./controls/RestrictRoute";

let routeMap = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <RestrictRoute path="/admin" failPath={'/hz'} component={AdminPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

export default routeMap;
