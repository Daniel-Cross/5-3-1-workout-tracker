import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import '../styles/Login.css';
import { FormControlLabel } from '@material-ui/core';

class Login extends Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  };

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
      <Paper className="Login" elevation={1}>
        <div className="login-title">Login</div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Email"
            type="email"
            className="email"
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
          <FormControlLabel
            control={<Switch />}
            label="Remember Email"
            className="remember-switch"
          />
          <Button
            variant="contained"
            color="secondary"
            className="login-button"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Paper>
    );
  }
}

export default Login;
