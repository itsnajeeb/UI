import React from 'react'
import Card from './CommonComponents/Card'
import img1 from "/assets/images/features_img01.png"; 
import img2 from "/assets/images/features_img02.png"; 
import img3 from "/assets/images/features_img03.png"; 
import img4 from "/assets/images/features_img04.png"; 
import GradientText from './CommonComponents/GradientText';

const Revolutionary = () => {
    return (
        <div id="FEATURE" className= ' min-h-screen scroll-mt-28 mb-20 mt-20'>
            <div className='flex item-center flex-col justify-center my-20'>
                <div className='px-5 text-center max-w-4xl mx-auto'>
                    <GradientText title={"Revolutionary ICO Platform with Rewards Program "} />
                </div>
            </div>

            <br />

            <div className='flex flex-wrap justify-center gap-8  px-3 md:mt-10 '>
                <Card title="Mobile Payment Make Easy" description=" Add new, trending and rare artwork to your collection." img={img1} />
                <Card title="Lifetime Free Transaction" description=" Add new, trending and rare artwork to your collection." img={img2} />
                <Card title="Protect the Identity" description=" Add new, trending and rare artwork to your collection." img={img3} />
                <Card title="Security & Control Over Money" description=" Add new, trending and rare artwork to your collection." img={img4} />
            </div>

        </div>
    )
}

export default Revolutionary