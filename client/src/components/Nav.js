import React, { Component } from 'react';
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

    render() {
        return (

            <div>
                <Navbar className="navbar navbar-dark bg-dark" color="dark" light expand="md" >
                    <h4 className="mr-auto"><Link to={'./Home'} style={{ color: 'white', textDecoration: 'none' }} activestyle={{ color: 'white', textDecoration: 'none' }}>
                        Tradez Electric</Link></h4>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="navbar right" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="nav-item" eventkey={1}>
                                <NavLink id="RouterNavLink" to={'./Home'} style={{ color: 'white', textDecoration: 'none', marginRight: 10 }} activestyle={{ color: 'white', textDecoration: 'none' }}>
                                    Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id="RouterNavLink" to={'./Services'} style={{ color: 'white', textDecoration: 'none', marginRight: 10 }} activestyle={{ color: 'white', textDecoration: 'none' }}>
                                    Services </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id="RouterNavLink" to={'./Contact'} style={{ color: 'white', textDecoration: 'none', marginRight: 10 }} activestyle={{ color: 'white', textDecoration: 'none' }}>
                                    Contact </NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink to={'./About'} style={{ color: 'white', textDecoration: 'none' }} activestyle={{ color: 'white', textDecoration: 'none' }}>
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