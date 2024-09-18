import React from 'react'
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
        <div>Sidebar</div>
    )
}

export default Sidebar