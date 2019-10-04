import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }

  render() {
    return(
      <div>
        { this.state.persons.map(person => <h3 key={person.id}>{person.name}</h3>) }
      </div>
    )
  }

}

export default Users;
