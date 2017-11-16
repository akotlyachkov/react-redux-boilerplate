import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";
import {AboutPage, AdminPage, DefaultPage, HomePage, NotFoundPage} from "./pages";
import {RestrictRoute} from "./controls";

let routes = (
    <ReactRouterDOM.BrowserRouter >
        <ReactRouterDOM.Switch>
            <ReactRouterDOM.Route exact path="/" component={DefaultPage}/>
            <ReactRouterDOM.Route path="/home" component={HomePage}/>
            <ReactRouterDOM.Route path="/about" component={AboutPage}/>
            <ReactRouterDOM.RestrictRoute path="/admin" failPath={'/hz'} component={AdminPage}/>
            <ReactRouterDOM.Route component={NotFoundPage}/>
        </ReactRouterDOM.Switch>
    </ReactRouterDOM.BrowserRouter>
);

export default routes;
