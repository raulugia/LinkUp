import React from 'react'

type Input = {
    type: string,
    label: string,
    placeholder: string,
    errors?: string[]
}
const Input = ({type, label, placeholder, errors =[]} : Input) => {
  return (
    <div>
        <label htmlFor={label} className="sr-only">{label}</label>
        <input type={type} id={label} placeholder={placeholder} 
            className={`border border-gray-200 px-3 py-2 w-full rounded-md ${errors.length > 0 ? "border-red-600" : "border-gray-200"}`}
        />
        {
            errors.map((error, index) => (
                <p key={index} className='text-sm text-red-600'>{error}</p>
            ))
        }

    </div>
  )
}

export default Input