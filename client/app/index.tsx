import React from "react";
import ReactDOM from "react-dom";
import './styles'
import routes from './routes';
import {Provider} from "react-redux";
import configureStore from "./store";


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
