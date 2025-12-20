import React from 'react'
import Card from './CommonComponents/Card'
import img1 from "/assets/images/features_img01.png"; // apna coin / bitcoin image
import img2 from "/assets/images/features_img02.png"; // apna coin / bitcoin image
import img3 from "/assets/images/features_img03.png"; // apna coin / bitcoin image
import img4 from "/assets/images/features_img04.png"; // apna coin / bitcoin image

const Revolutionary = () => {
    return (
        <div className='mt-36 mb-28'>
            <div className='flex item-center flex-col justify-center space-y-3'>
                <h1 className=' text-5xl text-center font-semibold text-gray-200/95'>Revolutionary ICO Platform with Exclusive </h1>
                <h4 className='text-white text-4xl text-center font-medium '>Rewards Program</h4>
            </div>

            <br />

            <div className='flex flex-wrap justify-center gap-8 mt-10 '>
                <Card title="Mobile Payment Make Easy" description=" Add new, trending and rare artwork to your collection." img={img1} />
                <Card title="Lifetime Free Transaction" description=" Add new, trending and rare artwork to your collection." img={img2} />
                <Card title="Protect the Identity" description=" Add new, trending and rare artwork to your collection." img={img3} />
                <Card title="Security & Control Over Money" description=" Add new, trending and rare artwork to your collection." img={img4} />
            </div>

        </div>
    )
}

export default Revolutionary