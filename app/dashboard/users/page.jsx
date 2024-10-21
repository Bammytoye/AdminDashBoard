import React from 'react'
import Search from '../../ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/Pagination'
import { fetchUsers } from '../../lib/data';

const UserPage = async () => {
    const users = await fetchUsers();

    return (
        <div className='bg-[#182237] p-3 rounded-[10px] mt-5'>
            <div className='flex items-center justify-between '>
                <Search placeholder='Search for a user...' />

                <Link href='/dashboard/users/add'>
                    <button className='px-3 py-2 bg-[#4742a7] hover:bg-[#343075] text-white border-none rounded-lg cursor-pointer'>Add New</button>
                </Link>
            </div>

            <table className='w-[900px] text-[12px]'>
                <thead>
                    <tr>
                        <td className='p-3'>Name</td>
                        <td className='p-3'>Email</td>
                        <td className='p-3'>Created At</td>
                        <td className='p-3'>Role</td>
                        <td className='p-3'>Status</td>
                        <td className='p-3'>Action</td>
                    </tr>
                </thead>

                <tbody>
                {users.map(user=>(
                    <tr key={user.id}>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image src={user.img || '/bg.png'} alt='' width={30} height={20} className='rounded-full object-cover cursor-pointer' />
                                {user.username}
                            </div>
                        </td>
                        <td className='p-3'>{user.email}</td>
                        <td className='p-3'>{user.createdAt?.toString().slice(4, 16)}</td>
                        <td className='p-3'>{user.isAdmin ? 'Admin'  : 'Client'}</td>
                        <td className='p-3'>{user.isActive ? 'Active'  : 'Passive'}</td>
                        <td>
                            <div className='flex items-center gap-4'>
                                <Link href={`/dashboard/users/${user.id}`}>
                                    <button className='px-2 py-2 bg-[#49db3b] hover:bg-[#3b7530] text-white border-none rounded-lg cursor-pointer'>
                                        View
                                    </button>
                                </Link>
                                <button className='px-2 py-2 bg-[#ee3f3f] hover:bg-[#803431] text-white border-none rounded-lg cursor-pointer'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UserPage