import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/About/AboutPage'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
