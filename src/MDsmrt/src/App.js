import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import * as AppActions from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/actions/loginActions.js'

import './App.css'

import Navbar from './components/layout/Navbar'
import Main from './components/layout/Main'
import Login from './components/login/Login'
import ConfirmLogin from './components/login/ConfirmLoginDoctor'
import ConfirmLoginPatient from './components/login/ConfirmLoginPatient'
import Images from './components/images/Images'
import PatientImages from './components/images/PatientImages'
import PatientImageItem from './components/images/PatientImageItem'
import UploadImage from './components/image/UploadImage'
import ImageDetail from './components/image/ImageDetail'
import NotFound from './components/notFound/NotFound'
import { uportConnect } from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/utils/uport.js'
import Footer from './components/layout/Footer.js'
import { userIsAuthenticated } from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/utils/userAuthWrapper.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.actions.connectUport(uportConnect.state)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Main>
          <Route exact path="/" component={Login} />
          <Route
            path="/confirmLoginDoctor"
            component={userIsAuthenticated(ConfirmLogin)}
          />
          <Route
            path="/confirmLoginPatient"
            component={userIsAuthenticated(ConfirmLoginPatient)}
          />
          <Route path="/imageHome" component={userIsAuthenticated(Images)} />
          <Route
            path="/patientImages"
            component={userIsAuthenticated(PatientImages)}
          />
          <Route
            path="/patientImageItem"
            component={userIsAuthenticated(PatientImageItem)}
          />
          <Route
            path="/uploadimage"
            component={userIsAuthenticated(UploadImage)}
          />
          <Route
            path="/images/:index"
            component={userIsAuthenticated(ImageDetail)}
          />
          {/*<Route exact component={NotFound} />*/}
        </Main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.login.uport,
    logOutPage: state.login.logOutPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
