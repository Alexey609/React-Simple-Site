import React, { Component } from 'react';
import { Container, Media, Row, Col } from 'react-bootstrap';

export default class Portfolio extends Component {

    render() {
     return (
         <Container>
         <Row>
           <Col md="9">
               <Media className="m-5">
               <img 
               width={150}
               height={150}
               className="mr-3"
               src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg"
               alt="1"
               />    
              <Media.Body>
                  <h4>Picture Title</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </Media.Body>
               </Media>
               <Media className="m-5">
               <img 
               width={150}
               height={150}
               className="mr-3"
               src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg"
               alt="1"
               />    
              <Media.Body>
                  <h4>Picture Title</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </Media.Body>
               </Media>
               <Media className="m-5">
               <img 
               width={150}
               height={150}
               className="mr-3"
               src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg"
               alt="1"
               />    
              <Media.Body>
                  <h4>Picture Title</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </Media.Body>
               </Media>
               <Media className="m-5">
               <img 
               width={150}
               height={150}
               className="mr-3"
               src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg"
               alt="1"
               />    
              <Media.Body>
                  <h4>Picture Title</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </Media.Body>
               </Media>
               </Col>  
         </Row>
         </Container>
     );
    }
} 