import React from 'react'

type ButtonProps = {
    value: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    type?: 'submit' | 'button',
    className?: string,
}
const Button = ({value, onClick, disabled = false, type, className} : ButtonProps) => {
  return (
    <button value={value} onClick={onClick} disabled={disabled} type={type} 
        className={`text-white font-semibold py-2 text-lg rounded-md ${className}`}>
            {value}
        </button>
  )
}

export default Button