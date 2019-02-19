import React from 'react'
import {renderToString} from 'react-dom/server';
import {AboutPage} from "./pages/about";
import {DefaultPage} from "./pages/default";
import {Layout} from "./controls/layout";
import {StaticRouter, Route, Switch} from "react-router-dom";
import {ListPage} from "./pages/list";

function renderHtml(url, context={}) {

  let html = renderToString(
    <StaticRouter location={url} context={context}>
      <Layout>
        <Switch>
          <Route path='/' exact component={DefaultPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/list' component={ListPage}/>
        </Switch>
      </Layout>
    </StaticRouter>
  );
  return html;

}

function render(url) {
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <base href="/">
      <title>React Flux boilerplate</title>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="/build/styles.css">
    </head>
    <body>
      <div id="root">${renderHtml(url)}</div>
      <script src="/build/script.js"></script>
    </body>
    </html>
  `;
  return html;
}


export {render};