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
import MilitaryPress from './components/MilitaryPress';
import DeadLift from './components/DeadLift';
import BenchPress from './components/BenchPress';
import Squat from './components/Squat';

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
          <Route
            exact
            path="/military-press"
            render={props =>
              this.state.user ? (
                <MilitaryPress {...props} user={this.state.user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/dead-lift"
            render={props =>
              this.state.user ? (
                <DeadLift {...props} user={this.state.user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/bench-press"
            render={props =>
              this.state.user ? (
                <BenchPress {...props} user={this.state.user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/squat"
            render={props =>
              this.state.user ? (
                <Squat {...props} user={this.state.user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <div className="App">
            <Login />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
