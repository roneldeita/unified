import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/UPS_Logo.png'
import '../../assets/style/navigation.css'

export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navClass:"navbar-default"
    };
  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(){
    var scrollX = window.pageYOffset;
    const Navclass = scrollX <= 50 ? 'navbar-default' : 'navbar-default-active';
    console.log(scrollX);
    console.log(Navclass);
    this.setState({navClass:Navclass})
  }

  render() {
    return (
        <nav className={`navbar ${this.state.navClass} navbar-fixed-top`}>
          <div className="container">
            <div className="row">
              <div className="col-md-offset-1 col-md-10">
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
                    <li><Link to="/" className="space"></Link></li>
                    <li><Link className="btn btn-login" to="/">Login</Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
                    <li><NavLink activeClassName="active" to="/a">PRODUCTS</NavLink></li>
                    <li><NavLink activeClassName="active" to="/b">SERVICES</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                    <li><NavLink activeClassName="active" to="/c">CONTACT</NavLink></li>
                    {/*<li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
                    <li><NavLink activeClassName="active" to="/tictactoe">Tic-Tac-Toe</NavLink></li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
  }
}
