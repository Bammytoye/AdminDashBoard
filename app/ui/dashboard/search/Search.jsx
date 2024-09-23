import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
    return (
        <div className='flex items-center gap-5 bg-[#2e374a] p-3 rounded-md max-w-[350px]'>
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