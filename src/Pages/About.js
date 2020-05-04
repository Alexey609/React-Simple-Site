import React, { Component } from 'react';
import  { Container, Tab, Row, Nav, Col, Card } from 'react-bootstrap';

export default class About extends Component {

    render() {
     return (
         <Container>
         <Tab.Container id="ledt-tabs-example"  defaultActiveKey="first">
           <Row>
               <Col sm={4}>
                <Nav variant="pills" className="flex-column mt-2"> 
                 <Nav.Item>
                     <Nav.Link eventKey="first">Seo</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                     <Nav.Link eventKey="second">Programming</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                     <Nav.Link eventKey="third">Technology</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                     <Nav.Link eventKey="fourth">Team</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                     <Nav.Link eventKey="fifrth">Info</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                     <Nav.Link eventKey="sixth">Links</Nav.Link>
                 </Nav.Item>
                </Nav>
               </Col>
               <Col sm={8}>
                   <Tab.Content className="mt-3">
                       <Tab.Pane eventKey="first">
                       <img src="https://img-a.udemycdn.com/course/750x422/2150122_6aae_3.jpg" alt="1"/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Tab.Pane>

                       <Tab.Pane eventKey="second">
                       <img src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg"alt="1"/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Tab.Pane>
                   
                       <Tab.Pane eventKey="third">
                       <img src="https://img-a.udemycdn.com/course/750x422/2150122_6aae_3.jpg" alt="1"/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Tab.Pane>
                   
                       <Tab.Pane eventKey="fourth">
                       <img src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg" alt="1"/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Tab.Pane>
                
                       <Tab.Pane eventKey="fifrth">
                       <img src="https://img-a.udemycdn.com/course/750x422/2150122_6aae_3.jpg" alt="1"/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Tab.Pane>

                       
                       <Tab.Pane eventKey="sixth">
                       <img src="https://img-a.udemycdn.com/course/750x422/607938_dc85_2.jpg" alt="1"/>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       </Tab.Pane>
                   </Tab.Content>
               </Col>
           </Row>
         </Tab.Container>
         <Row>
          <Col sm={12}>
          <Card className="bg-dark text-white">
  <Card.Img src="https://www.redesigns.org/images/website-coding-engine-backend.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>    
          </Col>   
         </Row>
         </Container>
     );
    }
} 