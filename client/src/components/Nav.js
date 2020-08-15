import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  class Navigation extends Component {
      render(){
          return(
            <div>
            <Navbar className = "navbar navbar-dark bg-dark"color="dark" light expand="md">
            <NavbarBrand href="/Home" className="mr-auto">Tradez Electric</NavbarBrand>
                <Nav className="navbar-toggle collapsed" navbar>
                <NavItem>
                    <NavLink to={'./Home'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./Services'}>Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./Contact'}>Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./About'}>About</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
            </div>
          )
      }
  }

  export default Navigation;