import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import store from 'stores'
import history from 'utils/history'
import PrivateRoute from 'components/PrivateRoute'
import Loader from 'components/Loader'

// import MainPage from 'containers/Public/MainPage'
// import SaunterPage from 'containers/Public/SaunterPage'

const MainPage = lazy(() => import('containers/Public/MainPage'))
const SaunterPage = lazy(() => import('containers/Public/SaunterPage'))

const App = () => {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <PrivateRoute exact path="/sounter" component={SaunterPage} />
            {/* <Route exact path="/sounter" component={SaunterPage} /> */}
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
