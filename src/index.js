import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-normalize'
import 'react-tippy/dist/tippy.css'
import 'emoji-mart/css/emoji-mart.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
