import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import { UserAuthContextProvider } from './context/UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'


const App = () => {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/home" element={<ProtectedRoute>{<Home />}</ProtectedRoute>} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App