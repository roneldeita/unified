import React from 'react'
//import { Nav, NavItem, Navbar } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/UPS-Logo_Rasterize.png'
import '../../assets/style/navigation.css'


export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = { activeTab:"home"};
  };
  navigate(e){
    console.log(e)
  }


  render() {
    return (
        // <Navbar collapseOnSelect classNameName="navigation" fixedTop>
        //   <Navbar.Header>
        //     <Navbar.Brand>
        //       <a href="/">
        //         <img src={Logo} classNameName="logo" alt="logo"/>
        //       </a>
        //     </Navbar.Brand>
        //     <Navbar.Toggle />
        //   </Navbar.Header>
        //   <Nav pullRight>
        //     <NavItem href="#">Login</NavItem>
        //     <NavItem href="#">Register</NavItem>
        //   </Nav>
        //   <Navbar.Collapse>
        //     <Navbar.Text pullRight>
        //       <span classNameName="space"></span>
        //     </Navbar.Text>
        //     <Nav pullRight>
        //       <LinkContainer to="/home">
        //         <NavItem href="#">Home</NavItem>
        //       </LinkContainer>
        //       <LinkContainer to="/about">
        //         <NavItem href="#">About</NavItem>
        //       </LinkContainer>
        //       <NavItem href="#">Services</NavItem>
        //       <NavItem href="#">Product</NavItem>
        //       <NavItem href="#">Activities</NavItem>
        //       <NavItem href="#">Contacts</NavItem>
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
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
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Register</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}
