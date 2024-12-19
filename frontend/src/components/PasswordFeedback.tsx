type PasswordProps = {
    errors: string[],
    isPassword: boolean,
}
const PasswordFeedback = ({errors, isPassword}: PasswordProps) => {
  return (
    <div className='text-sm mb-10'>
        <p>Your password must:</p>
        <ul>
            <li className={!isPassword ? "text-gray-400" : errors.includes("long") ? "text-red-600" : "text-green-600"}>Be at least 8 characters long</li>
            <li className={!isPassword ? "text-gray-400" : errors.includes("lowercase") ? "text-red-600" : "text-green-600"}>Have at least 1 lowercase letter</li>
            <li className={!isPassword ? "text-gray-400" : errors.includes("uppercase") ? "text-red-600" : "text-green-600"}>Have at least 1 uppercase letter</li>
            <li className={!isPassword ? "text-gray-400" : errors.includes("number") ? "text-red-600" : "text-green-600"}>Have at least one number</li>
        </ul>
    </div>
  )
}

export default PasswordFeedback