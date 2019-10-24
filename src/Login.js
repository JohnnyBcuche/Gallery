import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component {
  handleSignIn(e) {
    e.preventDefault()
    const username = this.username.value
    const password = this.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return(
      <form onSubmit={ this.handleSignIn.bind(this) }>
        <h3>Sign In</h3>
        <input
          className="input"
          type="text"
          placeholder="enter your username"
        />
        <input
          className="input"
          type="password"
          placeholder="enter your password"
        />
        <input className="button" type="submit" value="Login" />
      </form>
    )
  }

}

export default LoginForm;