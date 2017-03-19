import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store";
import IndexPage from "./pages/index";
import './styles'
import routes from './routes';

//const store = configureStore();

ReactDOM.render(
    routes,
    document.getElementById('root')
);
/*<Provider  compiler="TypeScript" framework="React" store={store}>

    <IndexPage />
</Provider>*/