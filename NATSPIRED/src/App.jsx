import React from 'react'
import { Header, TopBar } from './Components/Index'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Navbar/>
    </div>
  )
}

export default App