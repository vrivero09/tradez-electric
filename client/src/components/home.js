import React, { Component} from 'react';
import Navigation from './Nav';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Container  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render(){
    return (
      <div>
          <Navigation/>
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

export default Home;
