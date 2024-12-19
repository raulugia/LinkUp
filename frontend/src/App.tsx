import { useEffect} from 'react'
import './App.css'
import { Routes, Route, Outlet } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  
  return (
    <div className=''>
      <Routes>
        <Route element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
          <Route path="/home" element={<Home />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
