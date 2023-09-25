import '@/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './providers/Provider'
AOS.init()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
)
