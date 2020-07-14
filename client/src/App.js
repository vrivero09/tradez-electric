import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Container  } from 'reactstrap';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar className = "navbar navbar-dark bg-dark"color="dark" light expand="md">
          <NavbarBrand href="/Home" className="mr-auto">Tradez Electric</NavbarBrand>
            <Nav className="navbar-toggle collapsed" navbar>
              <NavItem>
                <NavLink href="/Home">Casa</NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Marine Electric</h1>
          <p className="lead">"COMING SOON!"</p>
        </Container>
      </Jumbotron>

      </div>
    );
  }
}

export default App;
