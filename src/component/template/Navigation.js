import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/UPS_Logo.png'
import '../../assets/style/navigation.css'

export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  };

  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavLink to="/" className="navbar-brand"><img src={Logo} className="logo" alt="logo"/></NavLink>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link className="btn btn-success" to="/">Login</Link></li>
                <li><Link to="/">Register</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
                <li><NavLink activeClassName="active" to="/tictactoe">Tic-Tac-Toe</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}
