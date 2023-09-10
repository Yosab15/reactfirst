import ReactDOM from 'react-dom/client'
import {App} from './App.js'
import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const myelement =document.getElementById('root')

const rootelement=ReactDOM.createRoot(myelement)
rootelement.render(<App/>)