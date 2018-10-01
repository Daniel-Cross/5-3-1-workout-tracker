import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  handleLogin = user => {
    this.setState({ user });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.state.user ? (
                <Home {...props} user={this.state.user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} onLogin={this.handleLogin} />}
          />
          <Route exact path="/register" component={RegisterForm} />
          <div className="App">
            <Login />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
