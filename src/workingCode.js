import React, { useEffect, useState } from 'react'
import {GoogleButton} from 'react-google-button'
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyAF8oJz4_KrmWMtp4k25S0Ms8Q3Nke7zro",
  authDomain: "basic--auth.firebaseapp.com",
  projectId: "basic--auth",
  storageBucket: "basic--auth.appspot.com",
  messagingSenderId: "335147253371",
  appId: "1:335147253371:web:f2ea18d4c69ff160972cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const App = () => {
  const [user, setUser] = useState('')
  const handleClick = async() => {
    try{
      const data = await signInWithPopup(auth, provider)
      const name = data.user.displayName
      setUser(name)
      localStorage.setItem('userName', name)
    }
    catch(error) {
      console.log(error)
    }
  }

  const logout = async() => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    setUser(localStorage.getItem('userName'))
  }, [])

  return (
    <div className='app'>
      {
        user ? (
            <>
              <h1>Welcome {user}</h1>
              <button className='logout' onClick={logout}>Signout</button>
            </>
        ) : (
          <>
            <h2>CLick below to sign in with Google</h2>
            <button onClick={handleClick} className="button" >
              <GoogleButton />
            </button>
          </>
        )

      }
    </div>
  )
}

export default App
