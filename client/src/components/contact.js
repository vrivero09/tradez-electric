import React, { Component} from 'react';
import {  Container } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Form from './Form'


class Contact extends React.Component {

    handleOnClick = () => {
        this.props.history.push("/About");
      }

    render(){

        return(
            <div className="App">
                <Container>
                <Row style={{paddingTop: "100px"}}>
                    <Col sm="6">
                        <Card style={{ backgroundColor: "transparent" }} body >
                        <CardTitle><h1>Contact Information</h1></CardTitle>
                        <hr />
                        <CardText>
                            <ul>
                                Phone number: 305-467-2859
                            </ul>
                            <ul>
                                Location: Miami Gardens, FL
                            </ul>
                        </CardText>
                        <Button color="info" onClick={this.handleOnClick}>Learn more</Button>
                        </Card>
                    </Col>

                    <Col sm="6">
                        <Card  style={{ backgroundColor: "transparent" }} body>
                            <Form />
                        </Card>
                    </Col>
    </Row>
                </Container>
                    
                
      </div>

        );
    }
}
export default Contact;