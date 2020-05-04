import React, { Component } from 'react';
import { Navbar, Container } from "react-bootstrap";
import logo from '../logo.svg';

export default class Footer extends Component {
 render() {
     return (
      <>
       <Navbar collapseOnSelect expand="md" bg="dark" variant="fix-bottom">
            <Container>
             <Navbar.Brand href="/">
             <img src={logo}
             height="30"
             width="30"
             className="d-inline-block align-top"
             alt="logo"
             /> 
             </Navbar.Brand> 
            </Container>
            </Navbar>
      </>
     );
 }
}