import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useStore } from 'stores'

const PrivateRoute: React.FC<any> = ({ path, exact, component }) => {
  const { authAPI } = useStore()

  return !authAPI.accessToken ? (
    <Redirect to={'/'} />
  ) : (
    <Route path={path} exact={exact} component={component} />
  )
}

export default PrivateRoute
