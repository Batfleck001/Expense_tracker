import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import {useNavigate} from "react-router-dom"
import Input from '../../components/inputs/input'
const Login = () => {

    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()
  //handle Login below func

    const handleLogin = async(e) =>{

    }

  return (
    <AuthLayout className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to log in 
      </p>
      <form onSubmit={handleLogin}>
        <Input 
        value={email} 
        onChange={({target}) => SetEmail(target.value)}
        label="Email Address"
        placeholder="john@example.com"
        type = "text"/>
      </form>
    </AuthLayout>
  )
}

export default Login