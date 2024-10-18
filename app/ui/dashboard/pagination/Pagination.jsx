'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const Pagination = ({ count }) => {
    const SearchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    const page = SearchParams.get('page') || 1;

    const params = new URLSearchParams(SearchParams);
    const Item_Per_Page = 3

    const hasPrev = Item_Per_Page * (parseInt(page)-1) > 0
    const hasNext = Item_Per_Page * (parseInt(page)-1) + Item_Per_Page < count

    const handleChangePage = (type) => {
        type='prev' ? params.set('page', parseInt(page) - 1) : params.set('page', parseInt(page) + 1)
        replace(`${pathName}?${params}`)
    } 

    return (
        <div className='p-3 flex justify-between text-sm'>
            <button 
                className='bg-white text-black rounded-lg px-4 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-800' 
                disabled={!hasPrev}
                onClick={()=>handleChangePage('prev')}
                >
                Previous
            </button>
            
            <button 
                className='bg-white text-black rounded-lg px-4 py-2 cursor-pointer' 
                disabled={!hasNext}
                onClick={()=>handleChangePage('next')}
                >
                Next
            </button>
        </div>
    )
}

export default Pagination