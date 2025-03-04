import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Works from './components/Works'
import Tech from './components/Tech'
import Feedbacks from './components/Feedbacks'
import Contact from './components/Contact'
import Stars from './components/canvas/Stars'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <header className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </header>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Stars />
        </div>
        <Footer />
      </div>
      
    </BrowserRouter>
  )
}

export default App
