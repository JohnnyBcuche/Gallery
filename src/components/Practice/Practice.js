import React, { Component } from 'react';
// import axios from 'axios';

import './Practice.css';

function ListItem(props) {
  return <li>{props.value}</li>
}

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
    const numbers = [ 1, 2, 3, 4, 5 ];
    const listItems = numbers.map(number => 
      <ListItem
        key={ number.toString() }
        value={ number }
      />
    );
    return (
      <div className="container">
        <form className="component">
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
        <div className="component">
          <ul>
            { listItems }
          </ul>
        </div>
      </div>
    );
  }
}

export default Practice;
