import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login/Login.display';
import Home from './Pages/Home/Home.display';
import AuthCallback from './Pages/AuthCallback/AuthCallback.display';
import _404 from './Pages/Error/404'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/auth/success' component={AuthCallback} />
          <Route component={_404} />
        </Switch>
      </Router>
    )
  }
}

export default App;
