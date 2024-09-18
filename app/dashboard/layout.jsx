import React from 'react'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'

const layout = ({children}) => {
    return (
        <div className='flex'>
            <div className='w-1/4 p-5 bg-[#182237]'>
                <Sidebar />
            </div>

            <div className='w-3/4 p-5'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default layout