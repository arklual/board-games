import React, { Component } from "react";
import { useParams } from "react-router-dom";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      article: {},
    };
  }
  componentDidMount() {
    fetch("/api/articles")
      .then((response) => {
        return response.json();
      })
      .then((articleList) => {
        const { id } = this.props.params;
        const article = articleList.filter(item => item.id == id)[0];
        this.setState(() => {
          return {
            articleList,
            article,
          };
        });
      });
  }
  render() {
    console.log(this.state.articleList);
    console.log(this.state.article);
    return (
      <>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.text}</p>
      </>
    );
  }
}
export default (props) => <Article params={useParams()} />;
