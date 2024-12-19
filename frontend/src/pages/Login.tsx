import {useState} from 'react'
import blueBg from "../assets/login.jpg"
import { Link } from "react-router-dom"
import LoginForm from '../components/LoginForm'
const Login = () => {


  return (
    <div className='flex justify-center w-full h-screen p-5 font-mona'>
        
        <div className='w-[45%] flex flex-col justify-between'>
          <h1 className='text-2xl font-semibold'>Link<span className='text-blue-primary'>Up</span></h1>

          <LoginForm />

          <div className='flex gap-2 self-center mb-5'>
            <p>Need an account?</p>
            <Link to="/signup" className='font-semibold underline'>Sign up</Link>
          </div>
        </div>

        <div className='w-[55%] object-cover overflow-hidden rounded-2xl relative flex justify-center'>
          <img src={blueBg} alt="blue background" className='h-full w-full'/>
          <div className='absolute top-20 bg-white rounded-xl'>
            <div className='text-center w-[400px]'>
              <h1 className='text-xl font-semibold font-mona'>Connect With People</h1>
              <p ></p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Login