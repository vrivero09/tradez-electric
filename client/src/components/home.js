import React, { Component} from 'react';
import './home.css';
import { Jumbotron, Container  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render(){
    return (
        <div className="App" >
          <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Marine Electric</h1>
            <p className="lead">"INFO COMING SOON!"</p>
          </Container>
          </Jumbotron>
        </div>
     
    );
  }
}

export default Home;
