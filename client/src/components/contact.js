import React, { Component} from 'react';
import Navigation from './Nav';
import { Jumbotron, Container } from 'reactstrap';


class Contact extends Component {
    render(){
        return(
            <div className="App">
            <Navigation />
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Contact info</h1>
                    <p className="lead">"COMING SOON!"</p>
                </Container>
            </Jumbotron>
        </div>

        );
    }
}
export default Contact;