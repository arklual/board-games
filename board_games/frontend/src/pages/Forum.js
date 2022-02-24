import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: [],
    };
  }
  componentDidMount() {
    fetch("api/forum")
      .then((response) => {
        return response.json();
      })
      .then((topicList) => {
        this.setState(() => {
          return {
            topicList,
          };
        });
      });
  }
  render() {
    return (
      <Container>
        <h1>Темы:</h1>
        {this.state.topicList.map(topic => (
          <a href={'/forum/topic/'+topic.id} key={topic.id}>{topic.title}<br/></a>
        ))}
      </Container>
    );
  }
}
