import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import MenuDisplay from './Components/MenuDisplay'
import ReservationForm from './Components/ReservationForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <MenuDisplay />
      <ReservationForm />
    </div>
  )
}

export default App