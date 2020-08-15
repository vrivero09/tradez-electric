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
                    <NavLink href="./Home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Services">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./About">About</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
            </div>
          )
      }
  }

  export default Navigation;