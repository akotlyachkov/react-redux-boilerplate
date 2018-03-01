import * as React from "react";
import * as ReactDOM from "react-dom";
import {DefaultPage} from "./pages";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import NotFoundPage from "./pages/not-found";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

export interface StoreState {
    sample: {};
}


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={DefaultPage} exact/>
            <Route path="/home" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
