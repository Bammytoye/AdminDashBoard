import Image from 'next/image';
import React from 'react'
import { MdPlayCircle, MdReadMore } from 'react-icons/md';

const RightBar = () => {
    return (
        <div className='sticky'>
            <div className='relative bg-[#182237] p-5 rounded-xl mb-5'>
                <div className=''>
                    <Image 
                        className='absolute bottom-0 right-0 object-cover opacity-[.2]' 
                        src='/zeke logo.png' 
                        alt='Zeke Logo' 
                        width={500} 
                        height={500} 
                    />
                </div>

                <div className='flex flex-col gap-5'>
                    <span className='font-bold'>
                        🔥Available Now
                    </span>
                    <h3 className='font-[500] text-[12px] text-[#b7bac1]'>
                        How to use the new version of the admin dashboard 
                    </h3>
                    <span className='text-md text-gray-300'>
                        Take 4 mins to learn
                    </span>
                    <p className='text-sm text-gray-100 text-justify line-clamp-3'>
                        To learn the new version of the admin dashboard, explore the updated features, 
                        review the documentation, and practice using the interface for effective 
                        navigation and management.
                    </p>
                    <button className='px-5 py-2 flex items-center gap-2 bg-blue-600 text-white border-none rounded-lg cursor-pointer max-w-fit '>
                        <MdPlayCircle />
                        Watch
                    </button>
                </div>
            </div>

                <div className='flex flex-col gap-5 bg-[#182237] p-5 rounded-xl mb-5'>
                    <span className='font-bold'>
                        🚀 Coming Soon
                    </span>
                    <h3 className='font-[500] text-[12px] text-[#b7bac1]'>
                        New server actions are available, partial pre-rendering is coming up!!!  
                    </h3>
                    <span className='text-md text-gray-300'>
                        Boost your productivity
                    </span>
                    <p className='text-sm text-gray-100 text-justify line-clamp-3'>
                        To boost your productivity, prioritize tasks, eliminate distractions, set clear goals, 
                        use productivity tools, and take regular breaks to maintain focus and energy throughout 
                        the day.
                    </p>
                    <button className='px-5 py-2 flex items-center gap-2 bg-blue-600 text-white border-none rounded-lg cursor-pointer max-w-fit '>
                        <MdReadMore />
                        Watch
                    </button>
                </div>
        </div>
    )
}

export default RightBar