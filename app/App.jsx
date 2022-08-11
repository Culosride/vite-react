import React from 'react'
import MainContent from './components/Main.jsx'
import Navbar from '../app/components/Navbar.jsx'

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <MainContent />
    </div>
  )
}
