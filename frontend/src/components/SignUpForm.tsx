import React, {useState} from 'react'
import Button from './Button'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from 'react-router-dom'
import { validateEmail, validatePassword, validateName, validateLocation, validateUsername } from '../utils/helpers'
import PasswordFeedback from './PasswordFeedback'

type UserData = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    city: string,
    country: string,
}

type Errors = {
    firstName: string[],
    lastName: string[],
    username: string[],
    email: string[],
    password: string[],
    city: string[],
    country: string[],
}
const SignUpForm = () => {
    const [userData, setUserData] = useState<UserData>({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        city: "",
        country: "",
    })
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<Errors>({
        firstName: [],
        lastName: [],
        username: [],
        email: [],
        password: [],
        city: [],
        country: [],
    })

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

    }

    const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name

        setUserData(prevUserData => ({...prevUserData, [name]: value}))
    }

    const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        
        if(name === "email"){
            const { isValid, errorMessage } = validateEmail(value)
            setErrors(prevErrors => ({...prevErrors, email: isValid ? [] : [errorMessage]}))
        }else if(name === "first_name" || name === "last_name"){
            const { isValid, errors } = validateName(value, name)
            setErrors(prevErrors => ({...prevErrors, [name]: isValid ? [] : errors}))
        }else if(name === "city" || name === "country"){
            const { isValid, errors } = validateLocation(value, name)
            setErrors(prevErrors => ({...prevErrors, [name]: isValid ? [] : errors}))
        }else if(name == "username"){
            const { isValid, errors } = validateUsername(value)
            setErrors(prevErrors => ({...prevErrors, [name]: isValid ? [] : errors}))
        }
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setUserData(prevUserData => ({...prevUserData, password: value}))

        const { isValid, errors } = validatePassword(value)
        setErrors(prevErrors => ({...prevErrors, password: isValid? [] : errors}))
    }

  return (
    <form className='flex flex-col justify-between px-28'>
        <div className='mb-8'>
            <h1 className='text-3xl font-semibold mb-2'>Register</h1>
            <p>Enter the following details to create an account</p>
        </div>
        <div className="flex flex-col gap-5 mb-16">
            <div className='flex gap-3'>
                <Input type="text" label="first name" name="first_name" placeholder='First Name' onChange={handleUserData} onBlur={handleValidation} errors={errors.firstName}/>
                <Input type="text" label="last name" name="last_name" placeholder='Last Name' onChange={handleUserData} onBlur={handleValidation} errors={errors.lastName}/>
            </div>
            <Input type="text" label="username" name="username" placeholder='Username' onChange={handleUserData} onBlur={handleValidation} errors={errors.username}/>
            <Input type="email" label="email" name="email" placeholder='Email' onChange={handleUserData} onBlur={handleValidation} errors={errors.email}/>
            <Input type="password" label="password" name="password" placeholder='Password' onChange={handlePassword} errors={errors.password}/>
            <PasswordFeedback errors={errors.password} isPassword={userData.password.length > 0}/>
        </div>

        <Button value="Sign Up" onClick={handleSubmit} disabled={loading} type="button" className='bg-blue-primary text-white'/>
    </form>
  )
}

export default SignUpForm