import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

import './styles.css'


const Home = () => {
  const {user, logout} = useUserAuth()
  const handleLogout = async() => {
    try{
      await logout()
    } catch(err) {
      console.log(err.message)
    }
  }
  return (
    <div className='login-container'>
        <h1>Hello World!</h1>
        <p>You are logged in with email <span style={{color: 'blue'}}>{user && user.email}</span></p>
        <button style={{width: 150}} type='submit' className='button' onClick={handleLogout}>Signout</button>
    </div>
  )
}

export default Home