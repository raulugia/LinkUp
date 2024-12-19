import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({children} : { children: React.ReactNode }) => {
    const user = auth.currentUser
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsAuthenticated(true)
            console.log("User signed in:", user);
          } else {
            console.log("User signed out");
            navigate("/login")
          }
        });
    
        // unsubscribe on unmount
        return () => unsubscribe();
      }, [navigate])

  return (
    <>
        isAuthenticated && (
            {children}
        )
    </>
  )
}

export default ProtectedRoute