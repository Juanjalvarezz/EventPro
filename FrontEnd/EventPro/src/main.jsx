import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import AnimatedPage from "./components/AnimatedPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedPage>
      <App />
    </AnimatedPage>
  </React.StrictMode>,
)
