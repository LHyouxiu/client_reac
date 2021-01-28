import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from './containers/layout/layout'
import './assets/css/layout.css'

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* <Route path="/layout" component={Layout}/> */}
      <Route component={Layout}/>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

