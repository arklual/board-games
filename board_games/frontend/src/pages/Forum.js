import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";

export default class Forum extends Component {
  render() {
    let a = []
    for (let i = 0; i < 10; i++){
      a[i] = i
    }
    return (
      <Container>
        {a.map(item => (
          <a key={item}>{item}</a>
        ))}
      </Container>
    );
  }
}
