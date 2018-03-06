import {AboutPage, DefaultPage, HomePage, NotFoundPage} from "./pages";
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default (props)=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={DefaultPage} exact/>
                <Route path="/home" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
}

