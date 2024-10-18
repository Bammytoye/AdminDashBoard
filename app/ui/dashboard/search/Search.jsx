'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'


const Search = ({placeholder}) => {
    const SearchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(SearchParams);

        params.set('page', 1)

        if (e.target.value) {
            e.target.value.length > 2 && params.set('q', e.target.value)
        } else {
            params.delete('q')
        }
        replace(`${pathName}?${params}`)
    }, 300);
    
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