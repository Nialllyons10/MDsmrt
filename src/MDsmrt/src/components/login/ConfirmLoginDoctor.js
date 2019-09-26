import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/actions/loginActions'
import { uportConnect } from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/utils/uport.js'
import { withRouter, Link } from 'react-router-dom'

class ConfirmLoginDoctor extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    uportConnect.logout()
    this.props.actions.connectUport(uportConnect.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <section className="banner-area other-page">
          <div className="container" />
        </section>
        <div className="album py-5 bg-light">
          <div className="col text-center">
            <div className="container">
              <img
                className="author_img rounded-circle"
                src={require('/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/assets/images/doctor4.jpg')}
                alt=""
              />
              <h4 />
              <h4>You are signed in as: {this.props.uport.name}</h4>
              <h4>Phone number: {this.props.uport.phone}</h4>
              <h4>Email: {this.props.uport.email}</h4>
              <h4>Country: {this.props.uport.country}</h4>

              <Link to="/imageHome" className="template-btn mt-3 mr-3">
                Continue
              </Link>
              <Link to="/" onClick={this.logout} className="template-btn mt-6">
                Logout
              </Link>

              <div className="br" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.confirmLogin.uport,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmLoginDoctor)
)
