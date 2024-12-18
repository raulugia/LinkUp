import {useState} from 'react'

type UserData = {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  phone?: string,
  usernames: string
}
const Login = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  return (
    <div>
        
    </div>
  )
}

export default Login