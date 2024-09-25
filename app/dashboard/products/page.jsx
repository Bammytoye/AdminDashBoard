import React from 'react'
import Search from '../../ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/Pagination'

const ProductsPage = () => {
    return (
        <div className='bg-[#182237] p-3 rounded-[10px] mt-5'>
            <div className='flex items-center justify-between '>
                <Search placeholder='Search for a product...' />

                <Link href='/dashboard/products/add'>
                    <button className='px-3 py-2 bg-[#5d57c9] hover:bg-[#343075] text-white border-none rounded-lg cursor-pointer'>Add New</button>
                </Link>
            </div>

            <table className='w-[900px] text-[12px]'>
                <thead>
                    <tr>
                        <td className='p-3'>Title</td>
                        <td className='p-3'>Description</td>
                        <td className='p-3'>Price</td>
                        <td className='p-3'>Created At</td>
                        <td className='p-3'>Stock</td>
                        <td className='p-3'>Action</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image src='/bg.png' alt='' width={30} height={30} className='rounded-full object-cover' />
                                Iphone
                            </div>
                        </td>
                        <td className='p-3'>Description</td>
                        <td className='p-3'>₦ 390,000</td>
                        <td className='p-3'>Sept 23 2024</td>
                        <td className='p-3'>70</td>
                        <td>
                            <div className='flex items-center gap-4'>
                                <Link href='/dashboard/products/single'>
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
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage