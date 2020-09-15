import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';


class Contact extends Component {
    render(){
        return(
            <div className="App">
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Contact info</h1>
                    <p className="lead">"INFO COMING SOON!"</p>
                </Container>
            </Jumbotron>
        </div>

        );
    }
}
export default Contact;