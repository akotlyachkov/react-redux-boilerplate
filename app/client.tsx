import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AboutPage} from "./pages/about";
import {DefaultPage} from "./pages/default";
import {ListPage} from "./pages/list";
import {Layout} from "./controls/layout";
import {Provider} from 'mobx-react';
import {Store} from './stores/store';

let store = new Store();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={DefaultPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/list' component={ListPage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
