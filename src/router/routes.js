import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//common styling
import '../assets/style/app.css'
//templates
import Navigation from '../component/template/Navigation'
import Footer from '../component/template/Footer'
//components
import Home from '../component/home/Index'
import About from './../component/about/Index'
import NoMatch from './../component/NoMatch'
import Submit from './../component/test/Submit'

import Todos from './../component/todo/Todos'
import TicTacToe from './../component/tictactoe/Index'

import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory();

const Router =
<BrowserRouter>
  <div>
    <Navigation history={history} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/submit" component={Submit} />
      <Route path="/todos" component={Todos}/>
      <Route path="/tictactoe" component={TicTacToe}/>
      <Route component={NoMatch}/>
    </Switch>
    <Footer />
  </div>
</BrowserRouter>

export default Router;
