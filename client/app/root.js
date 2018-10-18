import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {AboutPage} from "./containers/about";

ReactDOM.render(
  <BrowserRouter>
    <AboutPage/>
  </BrowserRouter>,
  document.getElementById('root'));
