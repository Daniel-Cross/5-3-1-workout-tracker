import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <div className="App">
            <LoginPage />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
