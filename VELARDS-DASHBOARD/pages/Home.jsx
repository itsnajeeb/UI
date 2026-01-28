import React from 'react'
import { Advantage, Certification, Footer, Hero, Investment, Navbar, Partnership, Payment, PowerPiggyBank } from '../components'
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