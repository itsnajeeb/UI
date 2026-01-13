import { ArrowLeft, ArrowRight } from 'lucide-react'
import doubleQuotes from '/image/icon/doubleQuotes.png'
import '../../styles/Feedback.css'

export const Feedback = () => {

    return (
        <div className='flex flex-col lg:flex-row py-10 lg:pt-20 px-6 md:px-10 lg:px-20 gap-2  overflow-hidden' >

            {/* Left Section: Title & Controls */}
            <div className='w-full lg:w-[35%] flex  flex-col gap-5 z-10 bg-white lg:bg-transparent'>
                <div className='subTittle w-fit flex gap-3 px-6 py-2 rounded-full border border-gray-100 shadow-sm'>
                    <img src={doubleQuotes} alt="" className='self-center w-4 lg:w-5' />
                    <h3 className=' text-sm lg:text-base font-semibold text-(--text-color-2)'>User Stories</h3>
                </div>

                <h1 className='text-3xl md:text-5xl textGredient font-semibold pb-3 lg:pr-10 leading-tight'>
                    What Teams Are Saying
                </h1>

            </div>
            <div className='w-[75%] mx-auto '>
                <ul className='grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-10 list-none '>
                    <li className='flex-row  flex items-start gap-2'>
                        <span className='mt-2 w-3 h-3 rounded-full bg-(--bg-color-1) shrink-0' />
                        <p className='text-justify text-(--text-dark) leading-6.5'> GENZ Network secures your
                            investment with powerful profits
                            from the world's largest forex &
                            crypto market,
                            Our mission is to help members earn while they learn by
                            combining knowledge with real-world income opportunities.
                            Driven by excellence and innovation, we focus on maximizing
                            efficiency and optimizing returns for long-term success.</p>
                    </li>
                    <li className='flex-row  flex items-start gap-2'>
                        <span className='mt-2 w-3 h-3 rounded-full bg-(--bg-color-1) shrink-0' />
                        <p className='text-justify text-(--text-dark) leading-6.5'> We provide training, tools, and partner connections to
                            brokers and automated trading systems.
                            We do not give financial advice. Trading carries high
                            risk. Past performance does not guarantee future results.
                            Always consult a financial advisor and do your own
                            research. See our website for full terms and disclaimers.</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

