import * as React from "react";
import * as ReactDOM from "react-dom";
import { AboutPage, AdminPage, DefaultPage, HomePage, NotFoundPage, ErrorPage } from "./pages";
import { RestrictRoute } from "./controls";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import * as ReactRouterDOM from "react-router-dom";
import { Reducer } from './reducers';
const rootReducer = Redux.combineReducers({
    Reducer
});
let store = Redux.createStore(rootReducer);
ReactDOM.render(React.createElement(ReactRedux.Provider, { store: store },
    React.createElement(ReactRouterDOM.BrowserRouter, null,
        React.createElement(ReactRouterDOM.Switch, null,
            React.createElement(ReactRouterDOM.Route, { exact: true, path: "/", component: DefaultPage }),
            React.createElement(ReactRouterDOM.Route, { path: "/home", component: HomePage }),
            React.createElement(ReactRouterDOM.Route, { path: "/about", component: AboutPage }),
            React.createElement(ReactRouterDOM.Route, { path: "/error", component: ErrorPage }),
            React.createElement(RestrictRoute, { path: "/admin", failPath: '/hz', component: AdminPage }),
            React.createElement(ReactRouterDOM.Route, { component: NotFoundPage })))), document.getElementById('root'));
//# sourceMappingURL=root.js.map