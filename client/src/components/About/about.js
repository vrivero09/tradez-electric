import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';


class About extends Component {
    render(){
        return(
            <div className="App">
                <Container fluid>
                <h1 className="display-3" style={{marginTop: "100px"}}>About Info</h1>
                    <p className="lead">"COMING SOON!"</p>
                </Container>
        </div>

        );
    }
}
export default About;