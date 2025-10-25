import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// Components assemble
import Header from './components/header.jsx'
import Banner from './components/landing-banner.jsx'
import Card from './components/card.jsx'
import Statement from './components/image-gallery.jsx'
import Footer from './components/footer.jsx'

  // so basically: (24 grid)
  // xl: 1-2[3-22]23-24
  // lg: 1-3[4-21]22-24
  // 1[2-23]24
  // gap-2 md:gap-4 lg:gap-6
  // px-6

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <div className="grid grid-cols-24">
      <div className="col-start-2 col-end-24 lg:col-start-4 lg:col-end-21 xl:col-start-3 xl:col-end-22 flex flex-col gap-8 py-8">
        <Statement></Statement>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-stretch gap-4 flex-1 p-8
        bg-primary-gray-100 rounded-4xl border-white border-2 border-solid shadow-2xl shadow-white/20">
          <Card>Hello|Description|Welcome!</Card>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
    <Footer />
  </StrictMode>
)
