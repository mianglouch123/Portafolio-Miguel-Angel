import React from 'react';
import Navbar from './components/Navbar'
import { Main } from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contac'

export const HomePage = () => {
    return (
        <div>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Work />
    <Contact />
        </div>
    )
}

