import React, { Component } from 'react';
import axios from 'axios';

import './Practice.css';

class Practice extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(res => {
      const items = res.data;
      this.setState({ items });
    })
  }

  render() {
    return (
      <section>
        { this.state.items.map(item =>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ) }
      </section>
    );
  }
}

export default Practice;