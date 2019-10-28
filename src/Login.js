import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const username = this.refs.username.value
    const password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <h3>Sign In</h3>
        <input
          className="input"
          type="text"
          ref="username"
          placeholder="enter your username"
          onChange={ this.handleChange.bind(this) }
        />
        <input
          className="input"
          type="password"
          ref="password"
          placeholder="enter your password"
        />
        <input className="button" type="submit" value="Login" />
      </form>
    )
  }

}

export default LoginForm;
