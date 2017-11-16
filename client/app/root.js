import React from "react";
import ReactDOM from "react-dom";
import { AboutPage, AdminPage, DefaultPage, HomePage, NotFoundPage } from "./pages";
import { RestrictRoute } from "./controls";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.hydrate(React.createElement(Provider, null,
    React.createElement(BrowserRouter, null,
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/", component: DefaultPage }),
            React.createElement(Route, { path: "/home", component: HomePage }),
            React.createElement(Route, { path: "/about", component: AboutPage }),
            React.createElement(RestrictRoute, { path: "/admin", failPath: '/hz', component: AdminPage }),
            React.createElement(Route, { component: NotFoundPage })))), document.getElementById('root'));
//# sourceMappingURL=root.js.map