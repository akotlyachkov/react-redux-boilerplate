import * as React from "react";
import * as ReactDOM from "react-dom";
import {AboutPage, AdminPage, DefaultPage, HomePage, NotFoundPage,ErrorPage} from "./pages";
import {RestrictRoute} from "./controls";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import * as ReactRouterDOM from "react-router-dom";
import {Reducer} from './reducers'
export interface StoreState {
    sample: {};
}

const rootReducer = Redux.combineReducers<StoreState>({
    Reducer
});
let store = Redux.createStore(rootReducer);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ReactRouterDOM.BrowserRouter>
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path="/" component={DefaultPage}/>
                <ReactRouterDOM.Route path="/home" component={HomePage}/>
                <ReactRouterDOM.Route path="/about" component={AboutPage}/>
                <ReactRouterDOM.Route path="/error" component={ErrorPage}/>
                <RestrictRoute path="/admin" failPath={'/hz'} component={AdminPage}/>
                <ReactRouterDOM.Route component={NotFoundPage}/>
            </ReactRouterDOM.Switch>
        </ReactRouterDOM.BrowserRouter>
    </ReactRedux.Provider>,
    document.getElementById('root')
);
