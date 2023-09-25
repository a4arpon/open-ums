import '@/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './providers/Provider'

// Aos Initialization
AOS.init()

// Render react components on root dom.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Global Provider */}
    <Provider />
  </React.StrictMode>
)
