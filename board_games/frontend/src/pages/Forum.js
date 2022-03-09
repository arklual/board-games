import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";

function CreateTopicForm({isVisible}){
  if (isVisible){
    return(
      <form action="/api/create-topic/">
        <label>Название темы:</label>
        <input style={{color: "black"}} type="text" name="title" placeholder=""></input>
        <input onClick={isVisible=false} type="submit" className="btn btn-primary"></input>
      </form>
    )
  }else{
    return(<></>)
  }
}

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: [],
      formVisible: false,
    };
  }
  componentDidMount() {
    fetch("api/forum")
      .then((response) => {
        return response.json();
      })
      .then((topicList) => {
        const formVisible = false;
        this.setState(() => {
          return {
            topicList,
            formVisible,
          };
        });
      });
  }
  onClick = () => {
    this.setState({
      formVisible: true, 
      topicList: this.state.topicList
    })
  }
  render() {
    return (
      <Container>
        <h1>Темы:</h1>
        {this.state.topicList.map(topic => (
          <a href={'/forum/topic/'+topic.id} key={topic.id}>{topic.title}<br/></a>
        ))}
        <button onClick={this.onClick} className="btn btn-primary">Создать тему</button>
        <CreateTopicForm isVisible={this.state.formVisible}/>
      </Container>
    );
  }
}
