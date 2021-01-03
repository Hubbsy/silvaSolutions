import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Container></Container>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
