import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Routes>

      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
