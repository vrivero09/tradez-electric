import React, { Component} from 'react';
import './home.css';
import { Jumbotron, Container  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render(){
    return (
        <div className="App" >
          <Container fluid>
            <h1 className="display-3">Marine Electric</h1>
            <p className="lead">"COMING SOON!"</p>
          </Container>
        </div>
     
    );
  }
}

export default Home;
