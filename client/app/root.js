import React from "react";
import "@babel/polyfill";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {AboutPage} from "./containers/about";
import {DefaultPage} from "./containers/default";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={DefaultPage}/>
      <Route path='/about' component={AboutPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
