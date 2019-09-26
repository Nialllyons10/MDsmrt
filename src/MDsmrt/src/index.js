import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Store from '/Users/niall/Documents/2019-ca400-lyons4/src/MDsmrt/src/store'
import { Provider } from 'react-redux'
import './index.css'
import '../node_modules/toastr/build/toastr.min.css'
import App from './App'

const StoreInstance = Store()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
