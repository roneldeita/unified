import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from '../component/template/Navigation.js'
//components
import Home from './../component/Home';
import About from './../component/About';
import NoMatch from './../component/NoMatch';
import Submit from './../component/test/Submit';

import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory();

const Router =
<BrowserRouter>
  <div>
    <Navigation/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/submit" component={Submit} history={history} />
      <Route component={NoMatch}/>
    </Switch>
  </div>
</BrowserRouter>

export default Router;
