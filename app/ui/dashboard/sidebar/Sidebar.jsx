import React from 'react'
import MenuLink from './menuLink/MenuLink';
import { 
    MdAnalytics,
    MdAttachMoney,
    MdDashboard, 
    MdHelpCenter, 
    MdOutlineSettings, 
    MdOutlineShoppingBag, 
    MdPeople, 
    MdSupervisedUserCircle,
    MdWork,
    
} from 'react-icons/md';
import Image from 'next/image';

const Sidebar = () => {

    const sideBarMenu = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />
                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdOutlineShoppingBag />
                },
                {
                    title: "Transactions",
                    path: "/dashboard/transactions",
                    icon: <MdAttachMoney />
                },
            ],
        },
        {
            title: "Analytics",
            list: [
                {
                    title: "Revenue",
                    path: "/dashboard/revenue",
                    icon: <MdWork />
                },
                {
                    title: "Report",
                    path: "/dashboard/report",
                    icon: <MdAnalytics />
                },
                {
                    title: "Teams",
                    path: "/dashboard/teams",
                    icon: <MdPeople />
                },                
            ],
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />
                },
                {
                    title: "Help",
                    path: "/dashboard/help",
                    icon: <MdHelpCenter />
                },
            ],
        },
    ]

    return (
        <div className='sticky top-10'>
            <div className='flex items-center gap-4 mb-5'>
                <Image className='rounded-full object-cover' src='/bg.png' alt='' width={50} height={50}/>
                
                <div className='flex flex-col'>
                    <span className='font-bold'>Bammy Toye</span>    
                    <span className='text-sm text-[#b7bac1]'>Administrator</span>    
                </div>
            </div>

            <ul className='list-none pl-0'>
                {sideBarMenu.map((cart)=> (
                    <li key={cart.title}>
                        <span className='text-[#b7bac1] font-bold text-[13px] my-2 mx-0'>
                            {cart.title}
                        </span>
                        {cart.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar