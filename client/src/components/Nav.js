import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import Home from './home';
import Services from './services';
import Contact from './contact';
import About from './about';

  class Navigation extends Component {
      render(){
          return(
            <div>
            <Navbar className = "navbar navbar-dark bg-dark"color="dark" light expand="md">
            <NavbarBrand href="/Home" className="mr-auto">Tradez Electric</NavbarBrand>
                <Nav className="navbar-toggle collapsed" navbar>
                <NavItem>
                    <Link to={Home}> Home </Link>
                </NavItem>
                <NavItem>
                    <Link to={Services}> Services </Link>
                </NavItem>
                <NavItem>
                    <Link to={Contact}> Contact </Link>
                </NavItem>
                <NavItem>
                    <Link to={About}>About</Link>
                </NavItem>
                </Nav>
            </Navbar>
            </div>
          )
      }
  }

  export default Navigation;