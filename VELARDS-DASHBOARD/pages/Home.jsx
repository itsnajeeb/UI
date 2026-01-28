import React from 'react'
import { Advantage, CertiTemp, Footer, Hero, Investment, Navbar, Partnership, Payment, PowerPiggyBank } from '../components'
export const Home = () => {
    return (
        <>
            < Navbar />
            <Hero />
            <PowerPiggyBank />
            <div className='mt-40'>
                <Investment />
            </div>
            <CertiTemp />
            <Advantage />
            <Payment />
            <Partnership />
            <Footer />
        </>

    )
}

export default Home