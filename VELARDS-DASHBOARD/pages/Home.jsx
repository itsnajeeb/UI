import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import PowerPiggyBank from '../components/Home/PowerPiggyBank/PowerPiggyBank'
import Certification from '../components/Home/certification/Certification'
import Advantage from '../components/Home/Advatange/Advantage'
import Payment from '../components/Home/Payment/Payment'
import Partnership from '../components/Home/Partnership/Partnership'
import Footer from '../components/Home/Footer/Footer'
import Navbar from '../components/Home/Navbar/Navbar'
import Investment from '../components/Home/Investment/Investment'
export const Home = () => {
    return (
        <div>
            < Navbar />
            <Hero />
            <PowerPiggyBank />
            <div className='mt-40'>
                <Investment />
            </div>
            <Certification />
            <Advantage />
            <Payment />
            <Partnership />
            <Footer />

        </div>

    )
}

export default Home