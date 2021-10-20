import "core-js"
import 'regenerator-runtime/runtime'

import React from "react"
import ReactDom from "react-dom"
import { Provider } from 'react-redux'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from "./App"
import { store } from './store'

ReactDom.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
