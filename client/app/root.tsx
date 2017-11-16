import React from "react";
import ReactDOM from "react-dom";
import {AboutPage, AdminPage, DefaultPage, HomePage, NotFoundPage} from "./pages";
import {RestrictRoute} from "./controls";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";


ReactDOM.hydrate(
    <Provider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={DefaultPage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <RestrictRoute path="/admin" failPath={'/hz'} component={AdminPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
