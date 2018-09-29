import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';

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
            render={props => (
              <LoginPage {...props} onLogin={this.handleLogin} />
            )}
          />
          <Route exact path="/register" component={RegisterPage} />
          <div className="App">
            <LoginPage />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
