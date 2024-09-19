import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
    const value = 30;

    return (
        <div className='flex space-x-5 bg-[#182237] hover:bg-[#4f5052] px-2 py-3 rounded-lg cursor-pointer w-full'>
            <MdSupervisedUserCircle size={24}/>

            <div className='flex flex-col gap-2'>
                <span className=''>Total Users</span>
                <span className='font-[500] text-base'>10.876</span>
                <span className='font-[300] text-xs  line-clamp-1'>
                    <span className={`font-thin italic ${value > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {value}% &nbsp;
                    </span>     
                    more than the previous week
                </span>
            </div>
        </div>
    )
}

export default Card