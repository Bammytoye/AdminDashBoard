import React from 'react'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Footer from '../ui/dashboard/footer/Footer'

const layout = ({children}) => {
    return (
        <div className='flex'>
            <div className='w-1/4 p-5 bg-[#182237] min-h-[100vh]'>
                <Sidebar />
            </div>

            <div className='w-3/4 p-5'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default layout