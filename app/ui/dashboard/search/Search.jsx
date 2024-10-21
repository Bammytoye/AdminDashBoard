'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'


const Search = ({placeholder}) => {
        
    return (
        <div className='flex items-center gap-5 bg-[#36508a] p-3 rounded-md max-w-[350px]'>
            <MdSearch />
            <input 
                type="text" 
                placeholder={placeholder}
                className='bg-transparent border-none text-white outline-none'
            />
        </div>
    )
}

export default Search