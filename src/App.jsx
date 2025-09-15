import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Makerspace from './routes/Makerspace.jsx'
import Projects from './routes/Projects.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/makerspace" element={<Makerspace />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
