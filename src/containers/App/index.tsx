import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import AppLoading from 'components/AppLoading'
import Admin from '../Admin'
import store from 'stores'

class App extends Component {
  state = {
    initialized: false,
  }

  render = (): JSX.Element => {
    return (
      <Provider {...store}>
        {this.state.initialized ? (
          <Router history={history}>
            <Switch>{/* <Route path="/" component={Public} /> */}</Switch>
          </Router>
        ) : (
          <AppLoading />
        )}
      </Provider>
    )
  }
}

export default App
