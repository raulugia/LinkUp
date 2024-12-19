import React from 'react'
import blueBg from "../assets/login.jpg"
import { authText } from '../utils/texts'
import tick from "../assets/tick.svg"

const AuthCard = () => {
  return (
    <div className='w-[55%] object-cover overflow-hidden rounded-2xl relative flex justify-center'>
        <img src={blueBg} alt="blue background" className='h-full w-full'/>
        <div className='absolute top-20 bg-white rounded-xl py-5'>
            <div className='w-[400px]'>
                <div className='px-5 text-center'>
                    <h1 className='text-xl font-semibold text-center mb-2'>Connect With People</h1>
                    <p className='text-sm'>LinkUp makes it easier than ever to stay connected with friends and colleagues, no matter where you are.</p>
                </div>
                <div className='w-full h-[1px] bg-gray-200 my-6'></div>
                <div className='px-5 text-sm'>
                    <p className='font-semibold'>With LinkUp you will be able to:</p>
                    <div className='flex flex-col gap-2 mt-3'>
                        {
                            authText.map((text, index) => (
                                <div className='flex items-center gap-2'>
                                    <img src={tick} alt="tick" />
                                    <p key={index}>{text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-36 text-white text-center w-[400px]'>
            <h1 className='text-4xl mb-2'>New integrations added</h1>
            <p className=''>You asked and we listened! We have added a bunch of new integrations to speed up your workflow</p>
        </div>
    </div>
  )
}

export default AuthCard