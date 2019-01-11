import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
            <div className="wrapper">
              <SayFullName name="Denys" surname="Kolesnyk" link="fb.com" />
              <SayFullName name="Ivan" surname="Petrychenko" link="vc.com" />
              <SayFullName name="Anna" surname="Kam" link="tw.com" />
            </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h2> My name {props.name}, surname - {props.surname} </h2>
      <a href={props.link}> My Profile </a>
      </div>
    )
}


export default App;
