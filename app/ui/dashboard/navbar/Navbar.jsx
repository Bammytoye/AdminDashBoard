'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className='flex justify-between items-center bg-[#182237] px-3 rounded-lg py-2'>
            <div className='text-[#b7bac1] font-bold capitalize'>
                {pathname.split('/').pop()}
            </div>

            <div className='flex items-center space-x-10'>
                <div className='flex items-center justify-center gap-3'>
                    <MdSearch />
                    <input 
                        type="text" 
                        placeholder='Search...' 
                        className='bg-transparent border border-gray-300 rounded-lg px-2 py-2 outline-none'    
                        />
                </div>

                <div className='flex justify-between items-center space-x-5'>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar