import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
    
  } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css'

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
            <Navbar className = "navbar navbar-dark bg-dark"color="dark" light expand="md" >
            <NavbarBrand className="mr-auto"><Link to={'./Home'} style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                Tradez Electric</Link></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="navbar right" isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="nav-item" eventKey={1}>
                    <NavLink to={'./Home'} style={{color: 'white', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                         Home </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./Services'} style={{color: 'white', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                         Services </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'./Contact'} style={{color: 'white', textDecoration: 'none', marginRight: 10}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                         Contact </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink to={'./About'} style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                        About</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
          )
      }
  }

  export default Navigation;