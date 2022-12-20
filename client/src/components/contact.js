import React, { Component} from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Form from './Form'


class Contact extends Component {

    handleOnClick = () => {
        this.props.history.push("/About");
      }

    render(){

        return(
            <div className="App">
                <Container>
                        <Card style={{ backgroundColor: "transparent" }} body >
                        <CardTitle><h1>Contact Information</h1></CardTitle>
                        <hr />
                        <CardText>
                            <ul>
                                Phone number: 305-467-2859
                            </ul>
                            <ul>
                                Location: Orlando, FL
                            </ul>
                        </CardText>
                        <Button color="info" onClick={this.handleOnClick}>Learn more</Button>
                        </Card>

                        {/* <Card  style={{ backgroundColor: "transparent" }} body>
                            <Form />
                        </Card> */}
                </Container>
                    
                
      </div>

        );
    }
}
export default Contact;