import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { HOME } from './routes/path'

function App() {

  return (
    <Routes>
      <Route path={HOME} element={<LandingPage />}></Route>
      <Route path='/*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
