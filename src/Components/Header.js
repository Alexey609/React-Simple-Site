import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, Container, FormControl } from "react-bootstrap";
import logo from '../logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contacts from '../Pages/Contacts';

export default class Header extends Component {

    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
             <Navbar.Brand href="/">
             <img src={logo}
             height="30"
             width="30"
             className="d-inline-block align-top"
             alt="logo"
             /> My test react
             </Navbar.Brand> 
             <Navbar.Toggle aria-controls="responsitive-navbar-nav"/>
             <Navbar.Collapse id="responsitive-navbar-nav">
             <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
             </Nav>
             <Form inline>
                 <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                 />
                 <Button variant="outline-success">Search</Button>
             </Form>
             </Navbar.Collapse>
            </Container>
            </Navbar>
            <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/contacts" component={Contacts}/>
            </Switch>
            </Router>
            </>
        );
    }
}

