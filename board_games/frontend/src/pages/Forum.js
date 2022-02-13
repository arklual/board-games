import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    };
  }
  componentDidMount() {
    fetch("api/articles")
      .then((response) => {
        return response.json();
      })
      .then((articleList) => {
        this.setState(() => {
          return {
            articleList,
          };
        });
      });
  }
  render() {
    return (
      <Container>
        It's the main forum page
      </Container>
    );
  }
}
