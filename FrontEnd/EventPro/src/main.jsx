import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedPage from './components/Animation/AnimatedPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedPage>
      <App />
    </AnimatedPage>
  </React.StrictMode>,
)
