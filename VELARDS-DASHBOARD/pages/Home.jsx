import React from 'react'
import { Advantage, CertiTemp, Footer, Hero, Investment, Navbar, Partnership, Payment, PowerPiggyBank } from '../components'
export const Home = () => {
    return (
        <>
            < Navbar />
            <Hero />
            <PowerPiggyBank />
                <Investment />
            <CertiTemp />
            <Advantage />
            <Payment />
            <Partnership />
            <Footer />
        </>

    )
}

export default Home