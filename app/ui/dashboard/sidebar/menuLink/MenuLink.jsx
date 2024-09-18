'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menuLink = ({item}) => {

    const pathname = usePathname()

    console.log(pathname)

    return (
        <Link
            className={`flex items-center p-5 gap-3 my-2 mx-0 ${pathname === item.path ? 'hover:text-[#2e374a]' : ''}`}
            href={item.path} 
            >
            {item.icon}
            {item.title}
        </Link>
    )
}

export default menuLink