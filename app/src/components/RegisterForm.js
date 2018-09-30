import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import '../styles/RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleLogin(e) {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8080/users', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
      .then(() => {
        this.props.history.push('/login');
      });
  }

  render() {
    console.log(this.props.history);
    const style = {
      margin: 20
    };

    return (
      <Paper className="RegisterForm" elevation={1}>
        <div className="register-title">Register</div>
        <form className="registration-form" onSubmit={this.handleLogin}>
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            className="firstName"
            margin="normal"
            variant="outlined"
            required
            onChange={this.handleInputChange}
          />
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            className="lastName"
            margin="normal"
            variant="outlined"
            required
            onChange={this.handleInputChange}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            className="email"
            margin="normal"
            variant="outlined"
            required
            onChange={this.handleInputChange}
          />
          <TextField
            variant="outlined"
            className="password"
            name="password"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            required
            margin="normal"
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
          {/* <TextField
            variant="outlined"
            className="confirmPassword"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Confirm Password"
            required
            margin="normal"
            value={this.state.confirmPassword}
            onChange={this.handleChange('confirmPassword')}
          /> */}

          <Button
            variant="contained"
            color="secondary"
            className="submit-button"
            type="submit"
            size="large"
            style={style}
          >
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}

export default RegisterForm;
