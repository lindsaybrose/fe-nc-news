import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './App.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
