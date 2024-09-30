'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'


const Search = ({placeholder}) => {
    const SearchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    const handleSearch = (e) => {

        const params = new URLSearchParams(SearchParams);
        
        if(e.target.value) {
                params.set("q", e.target.value);
            } else {
                params.delete("q");
            }
        replace(`${pathName}?${params}`);
    }

    return (
        <div className='flex items-center gap-5 bg-[#36508a] p-3 rounded-md max-w-[350px]'>
            <MdSearch />
            <input 
                type="text" 
                placeholder={placeholder}
                className='bg-transparent border-none text-white outline-none'
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search