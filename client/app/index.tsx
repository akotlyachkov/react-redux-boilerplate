import React from "react";
import ReactDOM from "react-dom";
import './styles'
import routes from './routes';
import {Provider} from "react-redux";



ReactDOM.render(
    <Provider>
        {routes}
    </Provider>,
    document.getElementById('root')
);
