'use client'
import React from 'react'


const Pagination = () => {
    

    return (
        <div className='p-3 flex justify-between text-sm'>
            <button 
                className='bg-white text-black rounded-lg px-4 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-800' 
                >
                Previous
            </button>
            
            <button 
                className='bg-white text-black rounded-lg px-4 py-2 cursor-pointer' 
                >
                Next
            </button>
        </div>
    )
}

export default Pagination