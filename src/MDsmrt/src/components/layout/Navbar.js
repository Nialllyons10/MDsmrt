import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/assets/css/style.css'

class Navbar extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="header">
          <div className="home">
            <div className="container">
              <div id="logo">
                <a href="#">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/public/logoMDsmrt.png')}
                    alt="MDsmrt Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
