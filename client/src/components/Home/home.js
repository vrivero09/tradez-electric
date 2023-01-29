import React, { Component} from 'react';
import './home.css';
import { Jumbotron, Container, Card  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render(){
    return (
        <div className="App" >
          <Container fluid>
            <h1 className="display-3" style={{marginTop: "100px"}}>Marine Electric</h1>
            <div className = "row" style={{paddingTop: "100px"}}>
              <div className="col-md">
                <Card body>Electrical</Card>
                
              </div>
              <div className="col-md">
              <Card body>Electronics</Card>
              </div>
              <div className="col-md">
              <Card body>Engineering Design</Card>
              </div>
            </div>

          </Container>
        </div>
     
    );
  }
}

export default Home;
