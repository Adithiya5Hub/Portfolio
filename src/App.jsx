import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import "./App.css"
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'
import ContactMe from './components/ContactMe/ContactMe'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Project />
        <ContactMe />
      </div>
    </>
  )
}

export default App