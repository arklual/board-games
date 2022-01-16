import React, { Component } from "react";
import { render } from "react-dom";

export default class Blog extends Component {
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
    return(
      <>
      {this.state.articleList.map(item => <li key={item.id}><a href={"/blog/" + item.id}>{item.title}</a></li>)}
      </>
    )
  }
}
