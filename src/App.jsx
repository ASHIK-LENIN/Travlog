import React from 'react'
import Navbar from './components/Navbar'
import Footer from './sections/Footer'
import KeySection from './sections/keySection'
import TravelPoint from './sections/TravelPoint'
import TopDestination from './sections/Destination'
import Hero from './sections/Hero'
import BookingLogo from './sections/BookingLogo'
import Services from './sections/Services'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <BookingLogo />
      <Services />
      <TopDestination />
      <TravelPoint />
      <KeySection />
      <Footer />
    </div>
  )
}

export default App