import React, { Component} from 'react';
import './home.css';
import Navigation from './Nav';
import { Jumbotron, Container  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './footer';

class Home extends Component {
  render(){
    return (
        <div className="App" >
          <Navigation/>

          <Jumbotron className="jumbo">
          <Container className="container">
            <h1 className="display-3">Marine Electric</h1>
            <p className="lead">"COMING SOON!"</p>
          </Container>
          </Jumbotron>
          
          <Footer />
      </div>
     
    );
  }
}

export default Home;
