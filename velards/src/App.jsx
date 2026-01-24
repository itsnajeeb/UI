import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './components/Login/login'
import Singup from './components/signup/signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
      </Routes>
    </div>
  )
}

export default App