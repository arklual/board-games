import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CSRFToken from "../components/CSRFToken";

function CreateMessageForm({ isVisible, topicId, current_user }) {
  if (isVisible && current_user.username) {
    return (
      <form action={`/api/create-message/${topicId}/`} method="POST">
        <label>Название сообщения:</label>
        <input
          style={{ color: "black" }}
          type="text"
          name="title"
          placeholder=""
        ></input>
        <textarea style={{ color: "black" }} name="message"></textarea>
        <CSRFToken></CSRFToken>
        <input
          onClick={(isVisible = false)}
          type="submit"
          className="btn btn-primary"
        ></input>
      </form>
    );
  } else if (isVisible) {
    return <>Сначала вы должны зарегистрироваться или войти</>;
  } else {
    return <></>;
  }
}

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      messageList: [],
      current_user: {},
    };
  }
  componentDidMount() {
    fetch("/api/messages")
      .then((response) => {
        return response.json();
      })
      .then((messageList) => {
        const formVisible = false;
        const { id } = this.props.params;
        const current_user = {};
        messageList = messageList.filter((message) => message.topic == id);
        this.setState(() => {
          return {
            messageList,
            formVisible,
            current_user,
          };
        });
      });
    fetch("/api/current_user")
      .then((response) => {
        return response.json();
      })
      .then((current_user) => {
        this.setState(() => {
          const messageList = this.state.messageList;
          const formVisible = this.state.formVisible;
          return {
            messageList,
            formVisible,
            current_user,
          };
        });
      });
  }
  onClick = () => {
    this.setState({
      formVisible: true,
      messageList: this.state.messageList,
      current_user: this.state.current_user,
    });
  };
  render() {
    return (
      <Container>
        {this.state.messageList.map((message) => (
          <div key={message.id}>
            <h3>{message.title}</h3>
            <p>{message.text}</p>
            <hr />
          </div>
        ))}
        <button onClick={this.onClick} className="btn btn-primary">
          Написать сообщение
        </button>
        <CreateMessageForm
          isVisible={this.state.formVisible}
          topicId={this.props.params.id}
          current_user={this.state.current_user}
        ></CreateMessageForm>
      </Container>
    );
  }
}

export default (props) => <Topic params={useParams()} />;
