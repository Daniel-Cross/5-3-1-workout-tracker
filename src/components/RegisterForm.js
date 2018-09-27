import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import '../styles/RegisterForm.css';
import { FormControlLabel } from '@material-ui/core';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="RegisterForm">
        <div className="register-title">Register!</div>
        <form className="registration-form" onSubmit={this.handleSubmit}>
          <TextField
            label="First Name"
            type="text"
            className="firstName"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Last Name"
            type="text"
            className="lastName"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            variant="outlined"
            className="password"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            required
            value={this.state.password}
            onChange={this.handleChange('password')}
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
          <TextField
            variant="outlined"
            className="confirmPassword"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Confirm Password"
            required
            value={this.state.confirmPassword}
            onChange={this.handleChange('confirmPassword')}
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
        </form>
      </div>
    );
  }
}

export default RegisterForm;
