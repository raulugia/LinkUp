import React from 'react'
import { Link } from 'react-router-dom'

type Input = {
    type: string,
    label: string,
    name?: string,
    placeholder: string,
    errors?: string[],
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({type, label, name, placeholder, errors =[], onBlur, onChange} : Input) => {
  return (
    <div>
        <label htmlFor={label} className="sr-only">{label}</label>
        <input type={type} id={label} name={name} placeholder={placeholder} 
            className={`border border-gray-200 px-3 py-2 w-full rounded-md ${errors.length > 0 ? "border-red-600" : "border-gray-200"}`}
            onBlur={onBlur} onChange={onChange}
        />
        {
            type !== "password" && errors.map((error, index) => (
                <p key={index} className='text-sm text-red-600'>{error}</p>
            ))
        }

    </div>
  )
}

export default Input