import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nature from './components/Nature'
import Humans from './components/Humans'
import Collection from './components/Collection'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Events from './components/Event'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showSplash ? 'hidden' : 'auto'
  }, [showSplash])

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-inner">
          <div className="splash-logo-wrapper">
            <img className="splash-logo" src="/logo.png" alt="Logo" />
          </div>
          <p className="splash-text">ECHOEXOTICA</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/humans" element={<Humans />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/info" element={<Info />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

