import React from 'react'

const Login = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
            <form action=""
                className='bg-[#182237] p-12 rounded-xl w-[500px] h-[500px] flex flex-col justify-center gap-7'
            >
                <h1 className='text-center text-4xl uppercase'>
                    Login
                </h1>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-[#b7bac1]'>
                        Username:
                    </label>
                    <input type="text" placeholder='Username'  className='outline-none px-2 py-3 border border-gray-800 rounded-lg bg-[#151c2c] text-white'/>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-[#b7bac1]'>
                        Password:
                    </label>
                    <input type="password" placeholder='password'  className='outline-none px-2 py-3 border border-gray-800 rounded-lg bg-[#151c2c] text-white'/>
                </div>

                <button type='submit' className='py-3 bg-teal-700 hover:bg-teal-900 text-white border-none cursor-pointer rounded-lg'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login