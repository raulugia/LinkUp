import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

const Home = () => {

  const logOut = async() => {
    await signOut(auth)
  }
  return (
    <div>
      <h1>Welcome Home!</h1>
      <button onClick={logOut}>Sign Out</button>
    </div>
  )
}

export default Home