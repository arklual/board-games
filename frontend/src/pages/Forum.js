import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";

function CreateTopicForm({ isVisible, current_user }) {
  if (isVisible && current_user.username != false) {
    return (
      <form action="/api/create-topic/" method="GET">
        <label>Название темы: </label>
        <input
          style={{ color: "black" }}
          type="text"
          name="title"
          placeholder=""
        ></input>
        <input
          onClick={(isVisible = false)}
          type="submit"
          className="btn btn-primary"
        ></input>
      </form>
    );
  } else if (isVisible) {
    alert('Сначала вы должны зарегистрироваться или войти!')
    return <></>;
  } else {
    return <></>;
  }
}

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: [],
      formVisible: false,
      current_user: {},
    };
  }
  componentDidMount() {
    fetch("/api/forum")
      .then((response) => {
        return response.json();
      })
      .then((topicList) => {
        const formVisible = false;
        const current_user = {};
        this.setState(() => {
          return {
            topicList,
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
          const topicList = this.state.topicList;
          const formVisible = this.state.formVisible;
          return {
            topicList,
            formVisible,
            current_user,
          };
        });
      });
  }
  onClick = () => {
    this.setState({
      formVisible: true,
      topicList: this.state.topicList,
      current_user: this.state.current_user,
    });
  };
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <h1>Темы:</h1>
        {this.state.topicList.map((topic) => (
          <a href={"/forum/topic/" + topic.id} key={topic.id}>
            {topic.title}
            <br />
          </a>
        ))}
        <button onClick={this.onClick} className="btn btn-primary">
          Создать тему
        </button>
        <CreateTopicForm
          isVisible={this.state.formVisible}
          current_user={this.state.current_user}
        />
      </Container>
    );
  }
}
