import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/*' element={<NotFoundPage/>}></Route>
    </Routes>
  )
}

export default App
