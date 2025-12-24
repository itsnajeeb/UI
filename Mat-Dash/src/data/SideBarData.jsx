
import user12 from '/Images/profile/user-12.png'
import user13 from '/Images/profile/user-13.png'
import user16 from '/Images/profile/user-16.png'
import user17 from '/Images/profile/user-17.png'
import user18 from '/Images/profile/user-18.png'

export const DASHBOARD_NAV_ITEMS = [
    {
        section: "DASHBOARDS",
        links: [
            {
                id: 1, name: "Dashboard",
                icon: user12,
                path: "/"
            },
           
            {
                id: 2,
                name: "My Team",
                icon : user16,
                path: null, // No direct path, acts as a toggle
                isDropdown: true,
                subLinks: [
                    { id: 21, name: "My Referral", path: "/MyTeam/MyReferral" },
                    { id: 22, name: "Level Details", path: "/MyTeam/LevelDetails" },
                    { id: 23, name: "Downline", path: "/MyTeam/Downline" },
                    { id: 24, name: "Direct Leg Business", path: "/MyTeam/DirectLegBusiness" },
                    { id: 25, name: "Reward Running Report", path: "/MyTeam/RewardRunningReport" },
                    { id: 26, name: "LevelTree", path: "/MyTeam/LevelTree" },
                ]
            },
            {
                id: 3,
                name: "Incomes",
                icon : user17,
                path: null, 
                isDropdown: true,
                subLinks: [
                    { id: 31, name: "Daily Revenue Bonus", path: "/Incomes/DailyRevenueBonus" },
                    { id: 32, name: "Team Affiliate Bonus", path: "/Incomes/TeamAffiliateBonus" },
                    { id: 33, name: "Leadership", path: "/Incomes/Leadership" },
                    { id: 34, name: "Infinity Bonus", path: "/Incomes/InfinitBonus" },
                ]
            },
            {
                id: 4,
                name: "Withdrawal",
                icon : user18,
                isDropdown: true,
                subLinks: [
                    { id: 41, name: "Withdrawal", path: "/Withdrawal/Withdrawal" },
                    { id: 42, name: "Withdrawal History", path: "/Withdrawal/WithdrawalHistory" },
                ]
            },
            {
                id: 5, name: "Support",
                icon:user13,
                path: "/support"
            }, {
                id: 6, name: "Log Out",
                icon:user12,
                path: "/logout"
            },
        ]
    },
]