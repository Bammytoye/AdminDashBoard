'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Monday',
        visit: 4000,
        click: 2400,
    },
    {
        name: 'Tuesday',
        visit: 3000,
        click: 1398,
    },
    {
        name: 'Wednesday',
        visit: 2000,
        click: 9800,
    },
    {
        name: 'Thursday',
        visit: 2780,
        click: 3908,
    },
    {
        name: 'Friday',
        visit: 1890,
        click: 4800,
    },
    {
        name: 'Saturday',
        visit: 2390,
        click: 3800,
    },
    {
        name: 'Sunday',
        visit: 3490,
        click: 4300,
    },
];

const Chart = () => {
    return (
        <div className='h-[450px] p-5 bg-[#182237] rounded-lg'>
            <h2 className='text-sm text-[#b7bac1] mb-2'>
                Weekly Recap
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:"#151c2c", border: "none", fontSize:"10px"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
