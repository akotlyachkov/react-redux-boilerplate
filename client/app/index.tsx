import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store";
import IndexPage from "./pages/index";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <IndexPage />
    </Provider>,
    document.getElementById('root')
);
