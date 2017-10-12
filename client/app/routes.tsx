import React from "react";
import {BrowserRouter, Link, Route, Routes, Switch} from "react-router-dom";
import {AboutPage, AdminPage, DefaultPage, HomePage, NotFoundPage} from "./pages";
import {RestrictRoute} from "./controls";

let routes = (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={DefaultPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <RestrictRoute path="/admin" failPath={'/hz'} component={AdminPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

export default routes;
