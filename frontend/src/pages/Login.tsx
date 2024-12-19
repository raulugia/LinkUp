import { Link } from "react-router-dom"
import LoginForm from '../components/LoginForm'
import AuthCard from '../components/AuthCard'
const Login = () => {


  return (
    <div className='flex justify-center w-full h-screen p-5 font-mona max-w-[1400px] mx-auto'>
        
        <div className='w-[45%] flex flex-col justify-between'>
          <h1 className='text-2xl font-semibold'>Link<span className='text-blue-primary'>Up</span></h1>

          <LoginForm />

          <div className='flex gap-2 self-center mb-5'>
            <p>Need an account?</p>
            <Link to="/signup" className='font-semibold underline'>Sign up</Link>
          </div>
        </div>

        <AuthCard />
    </div>
  )
}

export default Login