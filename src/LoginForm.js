import React, { Component } from 'react';

import Login from './Login';
import Welcome from './components/Welcome';

class LogOut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signOut() {
    this.setState({ user:null })
  }

  render() {
    return(
      <div className="login-form">
        <h1 className="title">My login app</h1>
        {
          (this.state.user) ?
          <Welcome
            user={ this.state.user }
            onSignOut={ this.signOut.bind(this) }
          />
          :
          <Login
            onSignIn={ this.signIn.bind(this) }
          />
        }
      </div>
    )
  }
}

export default LogOut;