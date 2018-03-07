import React from "react";
import ReactDOM from "react-dom";
import {AboutPage, DefaultPage, HomePage, NotFoundPage} from "./pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={DefaultPage} exact/>
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
};


ReactDOM.render(<Root/>, document.getElementById('root'));
