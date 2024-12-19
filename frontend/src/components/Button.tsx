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
        className={`font-semibold py-2 text-lg rounded-md hover:cursor-pointer ${className}`}>
            {value}
        </button>
  )
}

export default Button