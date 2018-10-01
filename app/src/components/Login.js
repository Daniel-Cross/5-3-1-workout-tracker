import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Logo from './Logo';
import SignUp from './SignUp';
import '../styles/Login.css';
import axios from 'axios';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      showPassword: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleLogin(e) {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8080/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.props.onLogin(response.data);
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ errorMessage: error.response.data.message });
      });
  }

  render() {
    const style = {
      margin: 20
    };

    return (
      <div className="LoginPage">
        <Logo />
        <Paper className="Login" elevation={1}>
          <div className="login-title">Login</div>
          <form className="login-form" onSubmit={this.handleLogin}>
            <TextField
              label="Email"
              name="email"
              type="email"
              className="email"
              margin="normal"
              variant="outlined"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              className="password"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              className="login-button"
              type="submit"
              style={style}
            >
              Login
            </Button>
          </form>
          {this.state.errorMessage && (
            <div>
              <span>{this.state.errorMessage}</span>
            </div>
          )}
        </Paper>
        <SignUp />
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
