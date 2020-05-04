import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {

    render() {
     return (
         <>
         <CarouselBox />
        <Container>
         <h3 className="text-center m-3">Demo</h3>
        <CardDeck>
            <Card>
             <Card.Img
             variant="top"
             src="https://images.pexels.com/photos/72354/theme-staircase-redwood-wood-woods-72354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
             />
             <Card.Body>
                 <Card.Title className="text-center">Card 1</Card.Title>
                 <Card.Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </Card.Text>
                 <Button variant="success" >Read more</Button>
             </Card.Body>
            </Card>
            <Card>
             <Card.Img
             variant="top"
             src="https://images.pexels.com/photos/132428/pexels-photo-132428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             />
             <Card.Body>
                 <Card.Title className="text-center">Card 2</Card.Title>
                 <Card.Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </Card.Text>
                 <Button variant="success">Read more</Button>
             </Card.Body>
            </Card>
            <Card>
             <Card.Img
             variant="top"
             src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             />
             <Card.Body>
                 <Card.Title className="text-center">Card 3</Card.Title>
                 <Card.Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </Card.Text>
                 <Button variant="success">Read more</Button>
             </Card.Body>
            </Card>
        </CardDeck>
        </Container>
        </>
     );
    }
} 