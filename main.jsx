import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import Navigation from './Navigation.jsx'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
<BrowserRouter>

<Navigation />

    </BrowserRouter>
  </React.StrictMode>,
)