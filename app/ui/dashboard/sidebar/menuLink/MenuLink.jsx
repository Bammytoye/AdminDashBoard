'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MenuLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link
            className={`flex items-center p-5 gap-3 my-1 rounded-lg mx-0 ${pathName === item.path ? 'bg-[#2e374a]' : 'hover:bg-[#2e374a]'}`}
            href={item.path}
        >
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLink;
