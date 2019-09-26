import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/actions/loginActions'
import { uportConnect } from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/utils/uport.js'
import { withRouter } from 'react-router-dom'
import { connectUport } from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/actions/loginActions'
import { connectUportPat } from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/actions/loginActions'

const ConnectReqID =
  'e8ebbe28b0463ffb02fc63a619abf969ec4d95362f7276b55cc0cb0b5cb21ba0'

class Login extends Component {
  constructor(props) {
    super(props)
    this.connectUport = this.connectUport.bind(this)
    this.connectUportPat = this.connectUportPat.bind(this)
  }

  async connectUport() {
    console.log('Doctor Func')
    const reqObj = {
      requested: ['name', 'phone', 'country', 'avatar', 'email'],
      notifications: true,
    }
    console.log(reqObj)
    uportConnect.requestDisclosure(reqObj, ConnectReqID)
    uportConnect.onResponse(ConnectReqID).then((res) => {
      console.log('res.payload doctor')
      console.log(res.payload)
      this.props.actions.connectUport(uportConnect.state)
      this.props.history.push('/confirmLoginDoctor')
    })
  }

  async connectUportPat() {
    console.log('Patient Func')
    const reqObj = {
      requested: ['name', 'phone', 'country', 'avatar', 'email'],
      notifications: true,
    }
    console.log(reqObj)
    uportConnect.requestDisclosure(reqObj, ConnectReqID)
    uportConnect.onResponse(ConnectReqID).then((res) => {
      console.log('res.payload patient')
      console.log(res.payload)
      this.props.actions.connectUportPat(uportConnect.state)
      this.props.history.push('/confirmLoginPatient')
    })
  }

  render() {
    return (
      <div>
        <section className="banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h4>Caring for better life</h4>
                <h1>Healthcare of tomorrow, today</h1>
                <p>
                  Through this platform, we can modernize the health systems
                  infrastructure, advance care and power individuals to create a
                  healthier world
                </p>
                <div className="template-btn mt-3 mr-3">
                  <a onClick={this.connectUport}>Doctor Login</a>
                </div>
                <div className="template-btn mt-6">
                  <a onClick={this.connectUportPat}>Patient Login</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature1.png')}
                    alt=""
                  />
                  <h3>advance technology</h3>
                  <p className="pt-3">
                    Helping population health stay in control of their medical
                    data using blockchain technologies
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding mt-4 mt-md-0">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature2.png')}
                    alt=""
                  />
                  <h3>ensuring compliance</h3>
                  <p className="pt-3">
                    Focuses on HL7 design standards to create patient first
                    relationships
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature3.png')}
                    alt=""
                  />
                  <h3>better diagnosis</h3>
                  <p className="pt-3">
                    Helping doctors worldwide make better patient diagnosis
                    decisions, saving lives
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature4.png')}
                    alt=""
                  />
                  <h3>securing data</h3>
                  <p className="pt-3">
                    Using the latest technology in decentralised storage to
                    ensure all data is secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="welcome-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="welcome-img">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/welcome.png')}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="welcome-text mt-5 mt-lg-0">
                  <h2>Welcome to MDsmrt</h2>
                  <p className="pt-3">
                    MDsmrt is a decentralised platform which empowers technology
                    to create a healthier world. This platform creates an
                    environment for lung cancer patients that improves the
                    portability of CT scan images through the blockchain,
                    creating a decentralised platform with the ability to
                    analyse these scans to aid doctors in their diagnosis of a
                    given CT scan.
                  </p>
                  <p>
                    Each patients scan image, with their consent will be stored
                    on a peer to peer network called IPFS, which will be only
                    through the blockchain, making it an anonymous, tamper-proof
                    platform.
                  </p>
                  <a href="https://ipfs.io/" className="template-btn mt-3">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="specialist-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-top text-center">
                  <h2>What our users say</h2>
                  <p>
                    We ensure that we are the forefront of technology, to aid
                    and provide doctors with the best possible tools to store
                    and analyse scans
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor mb-4 mb-lg-0">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor1.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>dr. mark watt</h3>
                      <h6>Plaza Memorial hospital</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        Using this technology has revolutionised the health
                        space as we know it
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor mb-4 mb-lg-0">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor2.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>Dr. dand mories</h3>
                      <h6>VA Medical Center</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        A easy to use, easy to understand system that aids both
                        doctor and patient
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor mb-4 mb-sm-0">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor3.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>Dr. olive sears </h3>
                      <h6>Parkland Memorial Hospital</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        This technology is the future, decentralised storage
                        gives great privacy to patients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor4.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>dr. jason stone</h3>
                      <h6>Forest Park Medical Center</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        I am able to make better diagnosis decisions, helping me
                        do my life's best work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.login.uport,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
