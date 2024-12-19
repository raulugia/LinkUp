import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from '../utils/helpers'
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

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
    password: string[],
    auth: string[]
}

const LoginForm = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [error, setError] = useState<Error>({
    email: [],
    password: [],
    auth: []
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const isDataValid = Object.values(error).every(error => error.length === 0)

    if(!isDataValid) return

    try{
        setLoading(true)

        const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password)

        if(userCredential) {
            navigate("/home")
        }
    }catch(error: any){
        console.log("error: ", error.message)
    }finally{
        setLoading(false)
    }
  }

  const handleEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value
    setError(prevError => ({...prevError, email: []}))
    
    const { isValid, errorMessage } = validateEmail(email)

    if(!isValid){
      setError(prevError => ({...prevError, email: [...prevError.email, errorMessage]}) )
    }
  }

  const handlePassword = (e: React.FocusEvent<HTMLInputElement>) => {
    const password = e.target.value
    setError(prevError => ({...prevError, password: []}))

    if(password.trim().length === 0){
      setError(prevError => ({...prevError, password: [...prevError.auth, 'Password should not be empty']}))
      return
    }
    
    setUserData(prevUserData => ({...prevUserData, password}))
  }


  return (
    <form className='flex flex-col justify-between px-28'>
        <div className='mb-8'>
            <h1 className='text-3xl font-semibold mb-2'>Sign In</h1>
            <p>Enter your email and password to sing in</p>
        </div>
        <div className="flex flex-col gap-3 mb-16">
            <Input type="email" label="email" placeholder='Email' onChange={e => setUserData(prevUserData => ({...prevUserData, email: e.target.value}))} onBlur={handleEmail} errors={error.email}/>
            <Input type="password" label="password" placeholder='Password' onChange={e => setUserData(prevUserData => ({...prevUserData, password: e.target.value}))} onBlur={handlePassword} errors={error.password}/>
            <div className='text-right'>
                <Link to="/reset-password" className='text-sm text-gray-500 hover:cursor-pointer hover:underline'>Forgot password?</Link>
            </div>
        </div>

        <Button value="Sign In" onClick={handleSubmit} disabled={loading} type="button" className='bg-blue-primary text-white'/>

        <div className='flex items-center gap-2 my-10'>
            <div className='bg-gray-300 h-[1px] w-full'></div>
            <p className='text-gray-300 text-sm'>or</p>
            <div className='bg-gray-300 h-[1px] w-full'></div>
        </div>

        <Button value="Continue with Google" onClick={handleSubmit} disabled={loading} type="button" className="bg-white text-black border border-slate-200 hover:bg-slate-50"/>
    </form>
  )
}

export default LoginForm