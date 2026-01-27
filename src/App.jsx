import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Middle from './Components/Middle/Middle'
import Section from './Components/Section/Section'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Hero />
    <Middle />
    <Section />
    <Footer />
    </>
  )
}

export default App