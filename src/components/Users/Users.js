import React, { Component } from 'react';
import axios from 'axios';

import AddUser from './AddUser';

class Users extends Component {
  state = {
    users: [],
    username: '',
    id: ''
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const username = {
        username : this.state.username
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`,  username )
    .then(res => {
        console.log(res.data);
        console.log(this.state.users);
        this.setState({
            users: [...this.state.users, res.data]
        });
    })
  }
  
  handleChange = event => {
    this.setState({ username: event.target.value });
  }

  deleteUser(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      console.log(res)
      console.log(res.data);
      // const users = res.data;
      // this.setState({ users });
    })
  }

  render() {
    return(
      <div>
        <AddUser addUser={this.handleSubmit} handleChange={this.handleChange} username={this.state.username} />
        { this.state.users.map(user =>
          <div key={user.id}>
            <h3>{user.username}</h3>
            <button onClick={ () => this.deleteUser(user.id) }>Delete</button>
          </div>
        ) }
      </div>
    )
  }

}

export default Users;
