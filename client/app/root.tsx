import * as React from "react";
import * as ReactDOM from "react-dom";
import {DefaultPage} from "./pages";
import {BrowserRouter, Route} from "react-router-dom";
import {Reducer} from './reducers'

export interface StoreState {
    sample: {};
}


ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={DefaultPage}/>
    </BrowserRouter>,
    document.getElementById('root')
);
