import React from 'react'
import Navbar from './components/Navbar'
import Footer from './sections/Footer'
import KeySection from './sections/keySection'
import TravelPoint from './sections/TravelPoint'
import TopDestination from './sections/Destination'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <TopDestination />
      <TravelPoint />
      <KeySection />
      <Footer />
    </div>
  )
}

export default App