import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import this!
import App from './app.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)