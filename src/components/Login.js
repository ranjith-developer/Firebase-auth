import React, { useState } from 'react'
import {GoogleButton} from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

import './styles.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {login, googleSignin} = useUserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/home')
    } catch(err) {
      setError(err.message)
    }
  }

  const handleGoogleSignin = async(e) => {
    e.preventDefault()
    try {
      await googleSignin()
      navigate('/home')
    } catch(err) {
      setError(err.message)
    }
  }

  return (
    <div className='login-container'>
        <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <alert style={{color: "red"}}>{error}</alert>}
            <input 
            type='email' 
            id='email' 
            placeholder='Email Address' 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type='password' 
            id='password' 
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='button'>Login</button>
            <hr />
            <GoogleButton onClick={handleGoogleSignin} />
            <h4>Don't have an account? <Link to='/signup'>Signup</Link></h4>
        </form>
    </div>
  )
}

export default Login