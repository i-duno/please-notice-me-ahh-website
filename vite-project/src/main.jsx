import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// Components assemble
import Header from './components/header.jsx'
import Banner from './components/landing-banner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
  </StrictMode>,
)
