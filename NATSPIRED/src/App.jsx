import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Carousel, FreshAndHealthy, FreshFruits, Header, Navbar, ShopByCategory, TopBar } from './Components/Index';
const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Navbar />
      <Carousel />
      <FreshFruits />
      <ShopByCategory />
      <FreshAndHealthy/>
    </div>
  )
}

export default App