import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import DyingInterface from './pages/DyingInterface'
import AnatomyVR from './pages/AnatomyVR'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/case-studies">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dying-interface" element={<DyingInterface />} />
        <Route path="/anatomy-vr" element={<AnatomyVR />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
