import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Pages/Login/Login.display';
import Home from './Pages/Home/Home.display';
import AuthCallback from './Pages/AuthCallback/AuthCallback.display';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/auth/success' component={AuthCallback} />
        </Fragment>
      </Router>
    )
  }
}

export default App;
