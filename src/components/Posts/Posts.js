import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      comments: [],
      selectPost: null,
      visible: 4
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 4 }
    });
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const articles = res.data;
      this.setState({ articles });
    })

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res=> {
      const comments = res.data;
      this.setState({ comments });
    })
  }

  setPostState(id) {
    this.setState({ selectPost: id });
  }

  render() {
    return(
      <div>
        <div className="items">
          { this.state.articles.slice(0, this.state.visible).map(article =>
            <div key={article.id} className="post" onClick={() => this.setPostState(article.id)}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
            </div>
          ) }
        </div>
        { this.state.visible < this.state.articles.length &&
          <div className="parent-button">
            <button className="button" onClick={this.loadMore} type="button">Load more</button>
          </div>
        }
        <div className="items">
          { this.state.comments.map(comment => {
            if(comment.postId === this.state.selectPost)
              return(
                <div className="frame comment" key={comment.id}>
                  <div>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                    <div className="items">
                      <h4>{comment.email}</h4>
                      <h4>Post ID: {comment.postId}</h4>
                    </div>
                  </div>
                </div>
              );
              return null;
          } ) }
        </div>
      </div>
    )
  }
}

export default Posts;
