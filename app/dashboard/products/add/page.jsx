import React from 'react'

const Add = () => {
    return (
        <div className='bg-[#182237] p-5 rounded-md mt-5'>
            <form action="" className='flex flex-wrap justify-between'>
                <input type="text" placeholder='title' name='title' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'/>

                <select name="cater" id="cater" className='px-4 py-3 w-[45%] border-gray-700 bg-[#151c2c] text-white rounded-lg mb-7 border outline-none'>
                    <option value="general" className='bg-[#182237] '>Choose your option</option>
                    <option value="general" className='bg-[#182237] '>Phone</option>
                    <option value="general" className='bg-[#182237] '>Laptop</option>
                    <option value="general" className='bg-[#182237] '>Glasses</option>
                </select>

                <input type="number" placeholder='price' name='price' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none '/>
                <input type="number" placeholder='stock' name='stock' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none '/>
                <input type="text" placeholder='color' name='color' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none '/>
                <input type="text" placeholder='size' name='size' required className='px-4 py-3 border-gray-700 w-[45%] bg-[#151c2c] text-white rounded-lg mb-7 border outline-none '/>

                <textarea className='px-4 py-3 w-full border-gray-700 bg-[#151c2c] text-white rounded-lg mb-7 border outline-none' name="description" id="description" cols="30" rows="10" placeholder='Description'></textarea>

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

export default Add