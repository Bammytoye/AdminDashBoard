import Image from 'next/image';
import React from 'react';

const Transaction = () => {

    const details = [
        { name: 'Bammy Toye', status: 'Pending', date: '20/09/2024', amount: '40, 000, 000 : 00', statusColor: 'bg-orange-500' },
        { name: 'Mulla', status: 'Done', date: '02/09/2024', amount: '20, 000, 000 : 00', statusColor: 'bg-blue-500' },
        { name: 'Dr. Kunle', status: 'Processing', date: '20/09/2024', amount: '24, 000, 000 : 00', statusColor: 'bg-pink-500' },
        { name: 'Makavelis', status: 'Pending', date: '28/09/2024', amount: '73, 000, 000 : 00', statusColor: 'bg-orange-500' },
        { name: 'Doyin', status: 'Done', date: '18/07/2024', amount: '140, 000, 000 : 00', statusColor: 'bg-blue-500' },
        { name: 'Dcns Grace', status: 'Successful', date: '18/07/2024', amount: '110, 000, 000 : 00', statusColor: 'bg-green-500' },
    ]
    
    return (
        <div className='bg-[#182237] p-6 rounded-xl'>
            <h2 className='mb-2 text-md font-light text-[#b7bac1]'>
                Latest Transactions
            </h2>

            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-800 text-[#b7bac1] text-left text-sm'>
                        <th className='px-4 py-2 font-[400]'>Name</th>
                        <th className='px-4 py-2 font-[400]'>Status</th>
                        <th className='px-4 py-2 font-[400]'>Date</th>
                        <th className='px-4 py-2 font-[400]'>Amount (₦)</th>
                    </tr>
                </thead>

                <tbody className='cursor-pointer'>
                    {details.map((transaction, index) => (
                        <tr key={index} className='border-b  hover:bg-gray-900 text-white border-t border-[#2c3a52]'>
                            <td className='px-4 py-2'>
                                <div className='flex items-center gap-3'>
                                    <Image className='object-cover rounded-full' src="/bg.png" alt="" width={40} height={40} />
                                    {transaction.name}
                                </div>
                            </td>
                            <td className='px-4 py-2'>
                                <span className={`rounded-lg px-3 py-1 text-sm text-white bg-[#f7cb7375] ${transaction.statusColor}`}>{transaction.status}</span>
                            </td>
                            <td className='px-4 py-2 text-sm'>{transaction.date}</td>
                            <td className='px-4 py-2 text-sm'>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Transaction;
