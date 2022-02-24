import React, { Component } from "react";
import { useParams } from "react-router-dom";
import {Container} from "react-bootstrap";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
    };
  }
  componentDidMount() {
    fetch("/api/messages")
      .then((response) => {
        return response.json();
      })
      .then((messageList) => {
        const { id } = this.props.params;
        messageList = messageList.filter(message => message.topic == id)
        this.setState(() => {
          return {
            messageList,
          };
        });
      });
  }
  render() {
    return (
      <Container>
        {this.state.messageList.map((message) => (
          <div key={message.id}><h3>{message.title}</h3><p>{message.text}</p><hr/></div>
        ))}
      </Container>
    );
  }
}

export default (props) => <Topic params={useParams()} />;
