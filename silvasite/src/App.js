import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import NavBar from './Nav.jsx';
import Hero from './Hero.jsx'
class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Hero />
        <Container>
            <Row>More Sruff</Row>
            <Row>More Struff</Row>
            <Row>MORe and more</Row>
            <Row>More stuff</Row>
        </Container>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
