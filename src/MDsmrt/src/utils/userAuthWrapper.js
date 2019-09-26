import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect'
import { routerActions } from 'react-router-redux'

export const userIsAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: (state) => state.user !== null,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectAction: routerActions.replace,
})
