import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import AppLoading from 'components/AppLoading'
import store from 'stores'
import MainPage from 'containers/Public/MainPage'

class App extends Component {
  render = (): JSX.Element => {
    return (
      <Provider {...store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            {/* <Route path="/" component={MainPage} /> */}
          </Switch>
        </Router>
        {/* <AppLoading /> */}
      </Provider>
    )
  }
}

export default App
