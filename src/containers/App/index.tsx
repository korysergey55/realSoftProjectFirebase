import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import { paths } from 'utils/routePath'
import store from 'stores'
import history from 'utils/history'
import PrivateRoute from 'components/PrivateRoute'
import Loader from 'components/Loader'
import { ToastContainer } from 'react-toastify'
const MainPage = lazy(() => import('containers/Public/MainPage'))
const SaunterPage = lazy(() => import('containers/Public/SaunterPage'))
const RegistrationPage = lazy(
  () => import('containers/Public/RegistrationPage')
)
const PrintInputPage = lazy(
  () => import('containers/Public/PrintInputPage/PrintItem')
)
const ResetPassword = lazy(
  () => import('containers/Public/RegistrationPage/ResetPassword')
)
const MapComponent = lazy(() => import('utils/MapComponent/index'))
const App = () => {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateRoute exact path={paths.sounter} component={SaunterPage} />
            <Route exact path={paths.home} component={MainPage} />
            <Route exact path={paths.print} component={PrintInputPage} />
            <Route
              exact
              path={paths.registration}
              component={RegistrationPage}
            />
            <Route exact path={paths.resetPassword} component={ResetPassword} />
            <Route exact path={paths.map} component={MapComponent} />
          </Switch>
        </Suspense>
      </Router>
      <ToastContainer />
    </Provider>
  )
}

export default App
