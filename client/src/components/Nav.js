import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

  class Navigation extends Component {
      constructor(props) {
            super(props);

            this.state = {
                isOpen: false,
                };

            this.toggle = this.toggle.bind(this);
        }

        toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }

        render(){
          return(
             
            <div>
            <Navbar className = "navbar navbar-dark bg-dark"color="dark" light expand="md">
            <NavbarBrand href={'./Home'} className="mr-auto">Tradez Electric</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="navbar right" isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to={'./Home'}> Home </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./Services'}> Services </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./Contact'}> Contact </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./About'}>About</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
          )
      }
  }

  export default Navigation;