import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Modal, Button, Form } from "react-bootstrap";
import CSRFToken from "../components/CSRFToken";

function CreateMessageForm({ topicId, current_user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const username = current_user.username;
  const handleShow = () => {
    if (username != false) {
      setShow(true);
    } else alert("Сначала вы должны зарегистрироваться или войти!");
  };
  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        Написать сообщение
      </button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Написать сообщение</Modal.Title>
        </Modal.Header>
        <form action={`/api/create-message/${topicId}/`} method="POST">
          <Modal.Body>
            <Form.Control name="message" as="textarea" rows={10} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <input
              type="submit"
              className="btn btn-primary"
              value="Отправить сообщение"
            ></input>
          </Modal.Footer>
          <CSRFToken></CSRFToken>
        </form>
      </Modal>
    </>
  );
}

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      current_user: {},
      userList: [],
    };
  }
  componentDidMount() {
    fetch("/api/messages")
      .then((response) => {
        return response.json();
      })
      .then((messageList) => {
        const { id } = this.props.params;
        const current_user = {};
        const userList = this.state.userList;
        messageList = messageList.filter((message) => message.topic == id);
        this.setState(() => {
          return {
            messageList,
            current_user,
            userList,
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
          const userList = this.state.userList;
          return {
            messageList,
            current_user,
            userList,
          };
        });
      });
    fetch("/api/accounts")
      .then((response) => {
        return response.json();
      })
      .then((userList) => {
        this.setState(() => {
          const messageList = this.state.messageList;
          const current_user = this.state.current_user;
          return {
            messageList,
            current_user,
            userList,
          };
        });
      });
  }
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <br></br>
        {this.state.messageList.map((message) => (
          <div key={message.id}>
            <h3>{this.state.userList.filter((user) => user.id == message.user).map(user =>  (
              <>
                {user.username}
              </>
            ))}</h3>
            <p>{message.text}</p>
            <hr />
          </div>
        ))}
        <CreateMessageForm
          topicId={this.props.params.id}
          current_user={this.state.current_user}
        ></CreateMessageForm>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default (props) => <Topic params={useParams()} />;
