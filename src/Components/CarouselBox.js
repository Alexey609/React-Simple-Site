import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gforest from '../assets/gforest.jpg';
import aforest from '../assets/rforest.jpeg';
import sky from '../assets/sky.jpeg';

export default class CarouselBox extends Component {
  render() {
      return (
          <Carousel>
              <Carousel.Item>
                  <img
                   className="d-block w-100"
                   src={gforest}
                   alt="Dark forest"
                  />
                <Carousel.Caption>
                 <h4>Grey forest</h4>        
               </Carousel.Caption>  
              </Carousel.Item>
              <Carousel.Item>
                  <img
                   className="d-block w-100"
                   src={aforest}
                   alt="Autumn forest"
                  />
                <Carousel.Caption>
                 <h4>Autumn forest</h4>        
               </Carousel.Caption>  
              </Carousel.Item>
              <Carousel.Item>
                  <img
                   className="d-block w-100"
                   src={sky}
                   alt="Night sky"
                  />
                <Carousel.Caption>
                 <h4>Night sky</h4>        
               </Carousel.Caption>  
              </Carousel.Item>
          </Carousel>
      );
  }
    
}