import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExpenseTracker from './ExpenseTracker.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenseTracker/>
  </React.StrictMode>,
)
