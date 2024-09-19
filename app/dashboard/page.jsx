import React from 'react'
import Card from '../ui/dashboard/card/Card'
import Transaction from '../ui/dashboard/transaction/Transaction'
import RightBar from '../ui/dashboard/rightBar/RightBar'
import Chart from '../ui/dashboard/chart/Chart'

const Dashboard = () => {
    return (
        <div className='flex gap-5 mt-5'>   
            <div className='w-3/4 flex flex-col gap-5'>
                <div className='flex gap-5 justify-between'>
                    <Card />
                    <Card />
                    <Card /> 
                </div>
                
                <Transaction />
                
                <Chart />
            </div>

            <div className='w-1/4'>
                <RightBar />
            </div>
        </div>
    )
}

export default Dashboard