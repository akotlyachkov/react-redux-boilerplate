import React from 'react'
import ReactDOMServer from 'react-dom/server';
import {AboutPage} from "./pages/about";
import {DefaultPage} from "./pages/default";
import {Layout} from "./controls/layout";
import {StaticRouter, Route, Switch} from "react-router-dom";

function render(initialState) {

  const context = {};
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Layout>
        <Switch>
          <Route path='/' exact component={DefaultPage}/>
          <Route path='/about' component={AboutPage}/>
        </Switch>
      </Layout>
    </StaticRouter>
  );

}



module.exports =