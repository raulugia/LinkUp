import {useState} from 'react'
import blueBg from "../assets/login.jpg"
import { Link } from "react-router-dom"
import Input from '../components/Input'
import Button from '../components/Button'

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
  auth: string[]
}
const Login = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [error, setError] = useState<Error>({} as Error)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div className='flex w-full h-screen p-5'>

        <div className='w-[45%] flex flex-col justify-between'>
          <h1 className='text-2xl font-semibold'>Link<span className='text-blue-primary'>Up</span></h1>

          <form className='flex flex-col justify-between px-28'>
            <div className='mb-8'>
              <h1 className='text-3xl font-semibold mb-2'>Sign In</h1>
              <p>Enter your email and password to sing in</p>
            </div>
            <div className="flex flex-col gap-3 mb-16">
              <Input type="email" label="email" placeholder='Email' />
              <Input type="password" label="password" placeholder='Password' />
              <div className='text-right'>
                    <Link to="/reset-password" className='text-sm text-gray-500 hover:cursor-pointer hover:underline'>Forgot password?</Link>
              </div>
            </div>
            <Button value="Sign In" onClick={handleSubmit} disabled={loading} type="button" className='bg-blue-primary'/>

            <div className='flex items-center gap-2 my-10'>
              <div className='bg-gray-300 h-[1px] w-full'></div>
              <p className='text-gray-300 text-sm'>or</p>
              <div className='bg-gray-300 h-[1px] w-full'></div>
            </div>

            <Button value="Continue with Google" onClick={handleSubmit} disabled={loading} type="button" className="bg-white text-black border border-slate-200"/>
          </form>

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