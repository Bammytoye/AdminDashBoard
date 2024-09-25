import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
    return (
        <div className='flex gap-10 mt-5'>
            <div className='w-1/4 bg-[#182237] p-5 rounded-lg font-bold text-center text-[#b7bac1] max-h-[330px]'>
                <div className='relative rounded-lg overflow-hidden mb-5'>
                    <Image src='/bg.png' alt='' width={300} height={500} />
                </div>
                Iphone
            </div>

            <div className='w-3/4 bg-[#182237] p-5 rounded-md'>
                <form className='flex flex-col'>
                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Item Name
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="text" name='itemName' placeholder='Item Name' />

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Description
                    </label>
                    <textarea className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' placeholder='Item Description' name="description" id="Description" cols="10" rows="10"></textarea>

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Price
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="number" name='price' placeholder='Item price' />

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Stock
                    </label>
                    <input className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' type="number" name='stock' placeholder='Stock' />

                    <label htmlFor="subcater" className='text-sm text-[#b7bac1] px-1'>
                        Subcategory
                    </label>

                    <select className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' name="subcater" id="subcater">
                        <option value="" disabled selected>Select a Subcategory</option>
                        <option value='smartphone'>Smartphone</option>
                        <option value='laptop'>Laptop</option>
                        <option value='headset'>Headset</option>
                    </select>

                    <label htmlFor="" className='text-sm text-[#b7bac1] px-1'>
                        Product Specifications
                    </label>
                    <select className='px-4 py-3 text-sm rounded-md bg-[#151c2c] text-white my-2' name="Specification" id="Specification">
                        <option value='' disabled selected>Item Condition</option>
                        <option value='new'>New</option>
                        <option value='used'>Used</option>
                        <option value='refurbished'>Refurbished</option>
                    </select>

                    <button type='submit' className='w-full py-2 bg-teal-600 hover:bg-teal-900 text-white border-none rounded-lg mt-5 cursor-pointer'>
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage