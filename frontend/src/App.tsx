import { useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  
  return (
    <div className=''>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
