import React, { Component } from 'react';
// import axios from 'axios';

import './Practice.css';

class Practice extends Component {
  token = null;
  state = {
    query: '',
    people: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    // axios.get(url)
    // .then(res => {
    //   const people = res.data;
    //   if (this.token === token) {
    //     this.setState({ people });
    //   }
    // })
    fetch(url)
    .then(results => results.json())
    .then(data => {
      if (this.token === token) {
        this.setState({ people: data.results });
      }
    });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="search-box"
          placeholder="Search for..."
          onChange={this.onChange}
        />
        {this.state.people.map(person => (
          <ul key={person.name}>
            <li>{person.name}</li>
          </ul>
        ))}
      </form>
    );
  }
}

export default Practice;