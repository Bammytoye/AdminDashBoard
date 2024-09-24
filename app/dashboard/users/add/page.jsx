import React from 'react'

const UserAddPage = () => {
    return (
        <div className='bg-[#182237] p-5 rounded-md mt-5'>
            <form action="" className='flex flex-wrap justify-between'>
                <input type="text" placeholder='username' name='username' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'/>
                <input type="email" placeholder='email' name='email' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'/>
                <input type="password" placeholder='password' name='password' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'/>
                <input type="number" placeholder='personal phone number' name='personal phone number' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'/>

                <select name="isAdmin" id="isAdmin" className='px-4 py-3 w-[45%] border-gray-700 bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'>
                    <option value={false} selected className='bg-[#182237] '>IsAdmin</option>
                    <option value={true} className='bg-[#182237] '>Yes</option>
                    <option value={false} className='bg-[#182237] '>No</option>
                </select>

                <select name="isActive" id="isActive" className='px-4 py-3 w-[45%] border-gray-700 bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'>
                    <option value={true} selected className='bg-[#182237] '>isActive</option>
                    <option value={true} className='bg-[#182237] '>Yes</option>
                    <option value={false} className='bg-[#182237] '>No</option>
                </select>

                <textarea className='px-4 py-3 w-full border-gray-700 bg-[#151c2c] text-white rounded-lg mb-7 border outline-none' name="address" id="address" cols="30" rows="10" placeholder='Personal Address'></textarea>

                <button 
                    type='submit'
                    className='w-full px-5 py-3 bg-teal-600 hover:bg-teal-800 text-white border-none rounded-lg cursor-pointer'
                    >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UserAddPage