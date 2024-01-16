import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < ErrorBoundary fallback = "Im sorry to inform you the combination  chosen is invalid , please try again " >
    <App />
    </ErrorBoundary>
  </React.StrictMode>
)
