import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }

  deleteUser(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => {
      return axios.get('https://jsonplaceholder.typicode.com/users')
    })
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }

  render() {
    // const { users } = this.state

    return(
      <div>
        { this.state.users.map(user =>
          <div>
            <h3 key={user.id}>{user.name}</h3>
            <button onClick={ () => this.deleteUser(user.id) }>Delete</button>
          </div>
        ) }
      </div>
    )
  }

}

export default Users;
