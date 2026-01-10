import { ChartNoAxesColumn, PanelsTopLeft, PenLine, Settings } from 'lucide-react'
import React from 'react'
import team1 from '/image/team-1.png'
import team2 from '/image/team-2.png'
import team3 from '/image/team-3.png'
const OurTeam = () => {
    return (
        <div className='px-20 grid grid-cols-[1fr_1.2fr_400px] gap-10 mt-20'>
            <div className=''>
                <div className='btnGradient w-fit rounded-xl p-4 mb-5'>
                    <Settings  size={20} color='#4e4f4c'/>
                </div>
                <div className='mb-5'>
                    <h1 className='text-dark-green font-medium text-2xl'>For Operation Teams</h1>
                </div>
                <div className='text-color-gray flex flex-col justify-between '>
                    <p className='text-lg font-medium mb-5 pr-8'>Create efficient, repeatable processes that reduce manual work, speed up decisions, and keep your entire operation running smoothly.</p>
                    <div className='flex flex-col  h-full text-base pr-9 gap-1'>
                        <li className='text-lg font-medium'>
                            Automate repetitive, high-volue task
                        </li>
                        <li className='text-lg font-medium'>
                            Maintain consistency across daily workflows
                        </li>

                         <li className='text-lg font-medium'>
                            Reduce human error with intelligent checks
                        </li>

                         <li className='text-lg font-medium'>
                            Enable faster coordination across departments
                        </li>

                        
                    </div>
                </div>
            </div>

            <div className='w-full h-[95%]'>
                <img src={team1} alt="" className='h-full w-full' />
            </div>

            <div className='pr-30 pl-10 flex flex-col gap-7 self-center'>
                <div className='flex gap-4 cursor-pointer'>
                    <div className='btnGradient p-4 h-fit rounded-xl self-center'>
                        <Settings size={20 } color='#4e4f4c'/>
                    </div>
                    <h1 className='text-dark-green text-xl font-semibold '>For Operatons Teams</h1>
                </div>
                <div className='flex gap-4  cursor-pointer'>
                    <div  className='border-2 border-gray-500/70 p-3 h-fit rounded-xl self-center'>
                        <ChartNoAxesColumn size={20 } color='#4e4f4c'/>
                    </div>
                    <h1  className='text-dark-green text-xl font-semibold'>For Business Analytsts</h1>
                </div>
                <div className='flex gap-4  cursor-pointer'>
                    <div  className='border-2 border-gray-500/70 p-3 h-fit rounded-xl self-center'>
                        <PenLine size={20 } color='#4e4f4c'/>
                    </div>
                    <h1  className='text-dark-green text-xl font-semibold'>For Creator and Writer</h1>
                </div>
                <div className='flex gap-4  cursor-pointer'>
                    <div  className='border-2 border-gray-500/70 p-3 h-fit rounded-xl self-center'>
                        <PanelsTopLeft size={20 } color='#4e4f4c'/>
                    </div>
                    <h1  className='text-dark-green text-xl font-semibold'>For Project Managers</h1>
                </div>
                
            </div>
        </div>
    )
}

export default OurTeam