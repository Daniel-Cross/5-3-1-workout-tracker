import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import WorkoutSelect from './components/WorkoutSelect';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/workout" component={WorkoutSelect} />
          <div className="App">
            <LoginPage />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
