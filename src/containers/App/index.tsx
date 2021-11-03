import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import store from 'stores'
import history from 'utils/history'
import PrivateRoute from 'components/PrivateRoute'
import Loader from 'components/Loader'

const MainPage = lazy(() => import('containers/Public/MainPage'))
const SaunterPage = lazy(() => import('containers/Public/SaunterPage'))
const RegistrationPage = lazy(
  () => import('containers/Public/RegistrationPage')
)
const PrintInputPage = lazy(() => import('containers/Public/PrintInputPage'))

const App = () => {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateRoute exact path="/sounter" component={SaunterPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/print" component={PrintInputPage} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
