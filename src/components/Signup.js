import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './styles.css'
import { useUserAuth } from '../context/UserAuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signup} = useUserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(email, password)
      navigate('/')
    } catch(err) {
      setError(err.message)
    }
  }

  return (
    <div className='login-container'>
        <form className='form' onSubmit={handleSubmit}>
        <h1>Signup</h1>
        {error && <alert style={{color: 'red'}}>{error}</alert>}
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
            <button type='submit' className='button'>Signup</button>
            <h4>Already have an account? <Link to='/'>Login</Link></h4>
        </form>
    </div>
  )
}

export default Signup