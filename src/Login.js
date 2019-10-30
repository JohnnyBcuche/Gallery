import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      usernameError: '',
      password: '',
      passwordError: ''
    }
  }

  // handleChange = e => {
  //   this.props.onChange({ [e.target.name]: e.target.value });
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  // validate = () => {
  //   const isError = false;
  //   const errors = {
  //     usernameError: "",
  //     passwordError: ""
  //   };
  //   if(this.state.password.indexOf('@') === -1) {
  //     this.isError = true;
  //     errors.usernameError = "Require valid email"
  //   }
  //   if(this.state.username.length < 5) {
  //     this.isError = true;
  //     errors.passwordError = "Password needs to be atleast 5 character long!"
  //   }

  //   this.setState({
  //     ...this.state,
  //     ...errors
  //   });

  //   return isError;
  // }

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
          // value={ this.state.username }
          // onChange={ e => this.handleChange(e) }
        />
        <input
          className="input"
          type="password"
          ref="password"
          placeholder="enter your password"
          // value={ this.state.password }
          // onChange={ e => this.handleChange(e) }
        />
        <input className="button" type="submit" value="Login" />
      </form>
    )
  }

}

export default LoginForm;
