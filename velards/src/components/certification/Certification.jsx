import React from 'react'
import dollerIcon from '/icons/icon-10.png'
import centerBox from '/websiteimg/centerImage.png'
import icon3 from '/websiteimg/icon-3.png'
import A4 from '/websiteimg/A4.png'
import './certification.css'
const Certification = () => {
    return (
        <div className='certifictionHeader bgImage  mb-20  relative  ' style={{}}>
            <div className='content px-20  flex relative w-full  h-full '>
                <div className='pr-40  w-1/2  absolute  top-25 left-40     flex gap-6 flex-col'>
                    <h2 className=' subTitle font-semibold text-2xl uppercase whiteGredient subHeading'>Few words about</h2>
                    <h1 className='font-bold uppercase text-5xl w-full whiteGredient heading'>Company</h1>

                    <div className='para'>
                        <div className='leftBorder'/>
                        <p className='pl-4'>Our Company is officially registered in the registry of compa nies of the United kingdom, as evidenced  </p>
                    </div>
                    <div className='description text-xs'>
                        <p>Our Company is officially registered in the registry of compa nies of the United kingdom, as evidenced by the relevent records and available certificate, which guara ntees the officiality. </p>
                    </div>


                    <button class="deposit-btn self-start  py-4 px-6 border-none cursor-pointer flex items-center gap-3 font-bold text-base">
                        Registration
                        <span class="icon"><img src={dollerIcon} alt="" className=' w-7 ' /></span>
                    </button>
                </div>

                <div className='left-1/2 w-full  flex  justify-center items-center '>
                    <div className='  bottom-25  absolute flex flex-col-reverse  h-[60%]'>
                        <img src={A4} alt="" className='w-55  z-20 top-0 self-center absolute' />
                        <img src={icon3} alt="" className='w-20 absolute top-30 left-[60%] z-99' />
                        <div className='bottom-0 relative'>
                            <img src={centerBox} alt="" className='w-80 h-55  bottom-0' />
                            <div className='absolute top-[60%] text-center text-black  w-full' >
                                <h1 className='font-bold text-2xl'>ID 14058056</h1>
                                <p className='uppercase font-semibold text-gray-600/80  '>Official registered <br /> company</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" absolute right-40 top-30 ">
                    <div className="rightWrapper relative ">

                        <div className='rightBox bg-[url("/websiteimg/rightBox.png")] flex  flex-col justify-center items-center px-6'>
                            <div className='squareBoxContainer absolute left-3 rotate-45'>
                                <div className='squareBox '></div>
                            </div>
                            <h1 className='heading uppercase text-lg font-semibold text-(--primary-text-color)'>Official Register</h1>
                            <p className='mt-1 text-xs w-[200px] pl-1 desc '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta tempore nisi hic. </p>
                        </div>

                        <div className='rightBox mt-3 bg-[url("/websiteimg/rightBox.png")] flex  flex-col justify-center items-center px-6'>
                            <div className='squareBoxContainer absolute left-3 rotate-45'>
                                <div className='squareBox '></div>
                            </div>
                            <h1 className=' heading text-lg uppercase font-semibold text-(--primary-text-color)'>Ddos protection</h1>
                            <p className='mt-1 text-xs w-[200px] pl-1 desc '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta tempore nisi hic. </p>
                        </div>

                        <div className=' rightBox mt-3 bg-[url("/websiteimg/rightBox.png")] flex  flex-col justify-center items-center px-6'>
                            <div className='squareBoxContainer absolute left-3 rotate-45'>
                                <div className='squareBox '></div>
                            </div>
                            <h1 className=' heading text-lg uppercase font-semibold text-(--primary-text-color)'>ssl protection</h1>
                            <p className='mt-1 text-xs w-[200px] pl-1 desc '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta tempore nisi hic. </p>
                        </div>


                    </div>
                </div>
                <div className='absolute left-[43%] bottom-7 certificationBtn'>
                    <button className='btn border rounded-full px-7 py-2 font-medium hover:duration-300'>Show Certification <span className='icon'><i class="bi bi-arrow-right-short"></i></span></button>
                </div>
            </div>
        </div>
    )
}

export default Certification