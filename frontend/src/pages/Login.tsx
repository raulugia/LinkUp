import {useState} from 'react'
import blueBg from "../assets/login.jpg"
import { Link } from "react-router-dom"
import Input from '../components/Input'

type UserData = {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  phone?: string,
  usernames: string
}

type Error = {
  email: string[],
  password: string[]
}
const Login = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [errors, setErrors] = useState<Error>({} as Error)

  return (
    <div className='flex w-full h-screen p-5'>

        <div className='w-[45%] flex flex-col justify-between'>
          <h1>LinkUp</h1>
          <form className='flex flex-col items-center justify-between'>
            <div className='mb-5'>
              <h1 className='text-3xl font-semibold mb-2'>Sign In</h1>
              <p>Enter your email and password to sing in</p>
            </div>
            <div>
              <Input type="email" label="email" placeholder='Email' />
            </div>
          </form>
          <div className='flex gap-2 self-center'>
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