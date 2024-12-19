import React from 'react'
import SignUpForm from '../components/SignUpForm'
import AuthCard from '../components/AuthCard'
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className='flex justify-center w-full h-screen p-5 font-mona max-w-[1400px] mx-auto'>
        
        <div className='w-[45%] flex flex-col justify-between'>
          <h1 className='text-2xl font-semibold'>Link<span className='text-blue-primary'>Up</span></h1>

          <SignUpForm />

          <div className='flex gap-2 self-center mb-5'>
            <p>Already have an account?</p>
            <Link to="/login" className='font-semibold underline'>Sign in</Link>
          </div>
        </div>

        <AuthCard />
    </div>
  )
}

export default Register