import React, { Component } from 'react';
import axios from 'axios';

import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
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
  }

  render() {
    return(
      <div>
        <div className="posts">
          { this.state.articles.slice(0, this.state.visible).map(article =>
            <div key={article.id} className="post">
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
      </div>
    )
  }
}

export default Posts;
