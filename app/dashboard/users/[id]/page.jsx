import React from 'react'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className='flex gap-10 mt-5'>
            <div className='w-1/4 bg-[#182237] p-5 rounded-lg font-bold text-center text-[#b7bac1] max-h-[330px]'>
                <div className='relative rounded-lg overflow-hidden mb-5'>
                    <Image src='/folashade.jpg' alt='' width={300} height={500} />
                </div>
                FolaShade
            </div>

            <div className='w-3/4 bg-[#182237] p-5 rounded-md'>
                <form className='flex flex-col'>
                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Username
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="text" name='name' placeholder='Toye Favourite Girl' />

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Email
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="email" name='email' placeholder='folashade@gmail.com' />

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Password
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="password" name='name' placeholder='password' />

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Phone Number
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="number" name='name' placeholder='+2348100001100' />

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Address
                    </label>
                    <textarea className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' name="address" id="address" cols="30" rows="10"></textarea>

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        isAdmin?
                    </label>
                    <select className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        isActive?
                    </label>
                    <select className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button type='submit' className='w-full py-2 bg-teal-600 hover:bg-teal-900 text-white border-none rounded-lg mt-5 cursor-pointer'>
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage