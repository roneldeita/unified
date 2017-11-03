//subclass
import React from 'react'
import { Nav, NavItem,  Navbar } from 'react-bootstrap'
import Logo from '../../assets/images/UPS-Logo_Rasterize.png'
import '../../assets/style/navigation.css'


class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state ={ activekey:'1'}
  };
  render() {
    return (
          <Navbar collapseOnSelect className="navigation">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">
                  <img src={Logo} className="logo" alt="logo"/>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem href="#">Login</NavItem>
                <NavItem href="#">Register</NavItem>
                <hr />
              </Nav>
              <Nav pullRight>
                <NavItem href="#">Home</NavItem>
                <NavItem href="#">About</NavItem>
                <NavItem href="#">Services</NavItem>
                <NavItem href="#">Product</NavItem>
                <NavItem href="#">Activities</NavItem>
                <NavItem href="#">Contacts</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
  }
}

export default Navigation;
