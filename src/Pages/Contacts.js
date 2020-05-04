import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';

export default class Contacts extends Component {

    render() {
     return (
         <Container>
         <Form className="mt-4"> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
 <Row>
   <Col md="12">

   <Image className="m-5" src="https://miro.medium.com/max/1920/1*uzN1l0eG7VaPBLAuDrTW-Q.png" fluid />
  </Col>
 </Row>
         </Container> 
     );
    }
} 