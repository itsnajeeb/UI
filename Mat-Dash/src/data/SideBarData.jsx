
import user11 from '/Images/profile/user-11.png'
import user12 from '/Images/profile/user-12.png'
import user13 from '/Images/profile/user-13.png'
import user15 from '/Images/profile/user-15.png'
import user16 from '/Images/profile/user-16.png'
import user17 from '/Images/profile/user-17.png'
import user18 from '/Images/profile/user-18.png'

export const MAIN_MENU_ITEMS = [
    {
        id: 1,
        icon: user11,
        ToolTip: "Dashboards",
    },
    {
        id: 2,
        icon: user12,
        ToolTip: "Pages",
    },
    {
        id: 3,
        icon: user13,
        ToolTip: "Forms",
    },
    {
        id: 4,
        icon: user15,
        ToolTip: "Tables",
    },

    {
        id: 5,
        icon: user16,
        ToolTip: "Charts",
    },

    {
        id: 6,
        icon: user17,
        ToolTip: "UI Components",
    },

    {
        id: 7,
        icon: user18,
        ToolTip: "Authentication Pages",
    },
    {
        id: 8,
        icon: user13,
        ToolTip: "Other",
    },



];


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
                path: null, // No direct path, acts as a toggle
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

    // {
    //     section: "APPS",
    //     links: [
    //         {
    //             id: 9, name: "Chat", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:chat-round-line-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M8 10.5h8M8 14h5.5" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: "/apps/chat"
    //         },

    //         {
    //             id: 10, name: "Calendar", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:calendar-mark-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><circle cx="16.5" cy="16.5" r="1.5" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle></g></svg>,
    //             path: "/apps/calendar"
    //         },
    //         { id: 11, name: "Email", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:letter-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>, path: "/apps/email" },

    //         { id: 12, name: "Kanban", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:clapperboard-edit-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path strokeLinecap="round" d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c1.241 1.241 3.123 1.43 6.536 1.46" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>, path: "/apps/kanban" },

    //         {
    //             id: 13,
    //             name: "User Profile",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:user-circle-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><circle cx="12" cy="9" r="3" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle><path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: null, // No direct path, acts as a toggle
    //             isDropdown: true,
    //             subLinks: [
    //                 { id: 91, name: "Profile", path: "/userProfile/profile" },
    //                 { id: 92, name: "Followers", path: "/userProfile/followers" },
    //                 { id: 93, name: "Friends", path: "/userProfile/friends" },
    //                 { id: 94, name: "Gallery", path: "/userProfile/gallery" },
    //             ]
    //         },
    //         {
    //             id: 14,
    //             name: "Ecommerce",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:cart-5-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-6 3h4" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" strokeLinejoin="round" d="m18 9l-3-6M6 9l3-6" opacity=".6" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: null, // No direct path, acts as a toggle
    //             isDropdown: true,
    //             subLinks: [
    //                 { id: 101, name: "Product List", path: "/ecommerce/productList" },
    //                 { id: 102, name: "Add Product", path: "/ecommerce/addProduct" },
    //                 { id: 104, name: "Edit Product", path: "/ecommerce/editProduct" },
    //                 { id: 105, name: "Shop", path: "/ecommerce/shop" },
    //             ]
    //         },

    //         {
    //             id: 15,
    //             name: "Contacts",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:phone-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M18.676 18.965c-1.63.152-5.614-.016-9.86-4.238c-4.005-3.982-4.723-7.395-4.813-8.981" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M16.1 13.359s-1.082 1.076-4.037-1.862s-1.872-4.015-1.872-4.015" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: "/apps/kanban"
    //         },

    //         {
    //             id: 16,
    //             name: "Course",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:book-bookmark-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: "/apps/kanban"
    //         },

    //         {
    //             id: 17,
    //             name: "Employee",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:user-id-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><circle cx="9" cy="9" r="2" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle><path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M19 12h-4m4-3h-5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M19 15h-3" opacity=".9" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: "/apps/kanban"
    //         },


    //         {
    //             id: 18,
    //             name: "Notes",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:document-text-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M8 12h8M8 8h8m-8 8h5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: "/apps/kanban"
    //         },


    //         {
    //             id: 19,
    //             name: "Tickets",
    //             icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:ticket-sale-line-duotone" width="18" height="18"><g fill="none"><path stroke="currentColor" strokeWidth="1.5px" d="M14.005 4h-4.01c-3.78 0-5.67 0-6.845 1.172c-.81.806-1.061 1.951-1.14 3.817c-.015.37-.023.556.046.679c.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586s-.061.308-.045.678c.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h4.01c3.78 0 5.67 0 6.845-1.172c.81-.806 1.061-1.951 1.14-3.817c.015-.37.023-.556-.046-.679c-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586s.061-.308.045-.679c-.078-1.866-.33-3.01-1.139-3.817C19.676 4 17.786 4 14.005 4Z" opacity=".5" fill="none"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5px" d="m9 15l6-6" fill="none"></path><path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path></g></svg>,
    //             path: "/apps/kanban"
    //         },


    //         {
    //             id: 20, name: "Contact List", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:phone-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M18.676 18.965c-1.63.152-5.614-.016-9.86-4.238c-4.005-3.982-4.723-7.395-4.813-8.981" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M16.1 13.359s-1.082 1.076-4.037-1.862s-1.872-4.015-1.872-4.015" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: '/contact/list',
    //         },

    //         {
    //             id: 21, name: "Invoice", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bill-list-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: null, // No direct path, acts as a toggle
    //             isDropdown: true,
    //             subLinks: [
    //                 { id: 171, name: "List", path: "/invoice/list" },
    //                 { id: 172, name: "Detail", path: "/invoice/detail" },
    //                 { id: 173, name: "Create", path: "/invoice/create" },
    //                 { id: 174, name: "Edit", path: "/invoice/edit" },
    //             ]
    //         },

    //         {
    //             id: 22, name: "Todo", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:airbuds-case-minimalistic-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M7 9h10" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: '/todo',
    //         },

    //         {
    //             id: 23, name: "Blog", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:widget-4-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414v11c0 1.886 0 2.828-.586 3.414S8.386 21.5 6.5 21.5s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M13.5 15.5c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zm0-10c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
    //             path: null,
    //             isDropdown: true,
    //             subLinks: [
    //                 { id: 191, name: "Post", path: "/blog/post" },
    //                 { id: 192, name: "Detail", path: "/blog/detail" },
    //             ]
    //         },

    //     ]
    // },

]

export const PAGES_NAV_ITEM = [
    {
        section: "PAGES",
        links: [
            {
                id: 1,
                name: "Roll Base Access",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-22 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:lock-password-unlocked-line-duotone" width="18" height="18"><g fill="none"><path stroke="currentColor" strokeWidth="1.5px" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" fill="none"></path><path fill="currentColor" d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5px" d="M6 10V8a6 6 0 0 1 11.811-1.5" opacity=".5" fill="none"></path></g></svg>,
                path: "/dashboard"
            },
            {
                id: 2, name: "Treeview",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-23 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bill-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path strokeLinecap="round" d="M2 2h20" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601s-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47s-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M8.5 13h7m-7-5h7" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/treeview"
            },
            {
                id: 3, name: "Pricing",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-24 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:dollar-minimalistic-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><circle cx="12" cy="12" r="10" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle><path strokeLinecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/pricing"
            },
            {
                id: 4, name: "Account Setting",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-25 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:accessibility-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><circle cx="12" cy="12" r="10" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle><path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452a3 3 0 0 0 .476 1.623L15 19" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M12 12v1.452a3 3 0 0 1-.476 1.623L9 19" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/account_setting"
            },

            {
                id: 5, name: "FAQ",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-26 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:question-square-line-duotone" width="18" height="18"><g fill="none"><path stroke="currentColor" strokeWidth="1.5px" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" fill="none"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5px" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13" fill="none"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle></g></svg>,
                path: "/faq"
            },

            {
                id: 6, name: "Landing Page",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-27 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:layers-minimalistic-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/landingpage"
            },
        ]
    },
    {

        section: "WIDGETS",
        links: [
            {
                id: 7, name: "Cards",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-29 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:cardholder-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M17 11v-1c0-1.886 0-2.828-.586-3.414S14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v1" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M5 11h14" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M8 16h8" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/cards"
            },
            {
                id: 8, name: "Banners",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-30 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-vertical-spacing-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path strokeLinecap="round" d="M22 3H2m20 18H2" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/banners"
            },
            {
                id: 9, name: "Charts",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-31 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:chart-square-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M7 18V9m5 9V6m5 12v-5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: "/charts"
            },
        ]
    }

]

export const FORMS_NAV_LINK = [
    {
        section: "FORMS",
        links: [
            {
                id: 1, name: "Form elements",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-33 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:password-minimalistic-input-line-duotone"><g fill="none">  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3.172 18.828C4.343 20 6.229 20 10 20h5c3.114-.01 4.765-.108 5.828-1.172C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828C19.765 4.108 18.114 4.01 15 4h-5C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828Z" opacity=".5"></path> <path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path> <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 2v20"></path>  </g>
                </svg>,
                path: null,
                isDropdown: true,
                subLinks: [
                    { id: 11, name: "Autocomplete", path: "/formElement/autocomplete" },
                    { id: 12, name: "Button", path: "/formElement/button" },
                    { id: 13, name: "Checkbox", path: "/formElement/checkbox" },
                    { id: 14, name: "Radio", path: "/formElement/radio" },
                    { id: 15, name: "Datepicker", path: "/formElement/datepicker" },
                ]
            },
            {
                id: 2, name: "File Upload",
                icon:

                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-114 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:upload-line-duotone">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"></path>
                            <path strokeLinejoin="round" d="M12 15V2m0 0l3 3.5M12 2L9 5.5"></path>
                        </g>
                    </svg>,
                path: '/fileUpload',
            },
            {
                id: 3, name: "Form Layouts",

                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-115 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:file-text-line-duotone"> <g fill="none">  <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 14.5h8M6 18h5.5" opacity=".5"></path>  <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></path> </g>
                </svg>,
                path: '/formLayouts',
            },
            {
                id: 4, name: "Form Horizantal", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-116 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-horizonta-spacing-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M3 2v20M21 2v20" opacity=".5"></path>  <path d="M12 4c-1.886 0-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4Z"></path></g></svg>,
                path: '/formHorizantal',
            },
            {
                id: 5, name: "Form Vertical", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-30 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-vertical-spacing-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path strokeLinecap="round" d="M22 3H2m20 18H2" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: '/formVertical',
            },
            {
                id: 6, name: "Form Wizard",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-118 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:archive-minimalistic-line-duotone">  < g fill="none" stroke="currentColor" strokeWidth="1.5"> <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></path>  <path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m9.5 14.4l1.429 1.6l3.571-4"></path>  </g></svg >,
                path: '/formWizard',
            },
            {
                id: 7, name: "Toastr",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-119 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:notification-lines-remove-line-duotone"> <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"> <path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></path>  <path d="M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5"></path> </g>  </svg>,
                path: '/toastr',
            },
            {
                id: 8, name: "Editor", icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-120 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:clapperboard-edit-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c1.241 1.241 3.123 1.43 6.536 1.46"></path>  <path strokeLinecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5" opacity=".5"></path> <path d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844"></path> </g> </svg>,
                path: '/editor',
            },

        ]
    }
]


export const TABLES_NAV_LINK = [
    {
        section: "TABLES",
        links: [
            {
                id: 1, name: "Basic Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/basicTable',
            },

            {
                id: 2, name: "Dynamic Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/dynamicTable',
            },
            {
                id: 3, name: "Expand Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/expandTable',
            },
            {
                id: 4, name: "Filterable Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/filterTable',
            },
            {
                id: 5, name: "Footer Row Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/footerRowTable',
            }, {
                id: 6, name: "HTTP Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/httpTable',
            },

            {
                id: 7, name: "Mix Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/mixTable',
            },

            {
                id: 8, name: "Multi Header Footer",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/multiHeaderFooter',
            },

            {
                id: 9, name: "Pagination Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/paginationTable',
            },

            {
                id: 10, name: "Row Context Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/rowContextTable',
            },

            {
                id: 11, name: "Selection Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/selectionTable',
            },

            {
                id: 12, name: "Sortable Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/sortableTable',
            },

            {
                id: 13, name: "Sticky Column",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/stickyColumn',
            },

            {
                id: 14, name: "Sticky Header Footer",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-122 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tablet-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M10 20c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20z"></path>  <path strokeLinecap="round" d="M15 17H9" opacity=".5"></path></g>
                </svg>,
                path: '/stickyHeaderFooter',
            },

        ]
    },
    {
        section: "TABLES",
        links:
            [
                {
                    id: 15, name: "Data Table",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-137 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:database-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path strokeLinecap="round" d="M4 18V6m16 0v12"></path>  <path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Z"></path> <path d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4" opacity=".5"></path> <path d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path> </g>
                    </svg>,
                    path: '/stickyHeaderFooter',
                }
            ]
    }
]

export const CHARTS_NAV_LINK = [
    {
        section: "CHARTS",
        links: [
            {
                id: 1, name: "Line",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-139 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-top-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" d="M2 3h20" opacity=".5"></path>  <path d="M7.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.098 5 8.565 5 9.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7Zm9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></path></g></svg>,
                path: '/line',
            },

            {
                id: 2, name: "Gradient",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-165 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bolt-circle-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="m9.213 10.174l2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3s.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465c1.072.287 1.608.43 1.702.804l.004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3s-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465c-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.375.34-.712 1.186-1.385Z"></path><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></path>   </g>
                </svg>,
                path: '/gradient',
            },
            {
                id: 3, name: "Area",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-166 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:chart-square-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></path><path strokeLinecap="round" d="M7 18V9m5 9V6m5 12v-5"></path></g></svg>,
                path: '/area',
            },
            {
                id: 4, name: "Candlestick",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-170 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-vertical-center-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M2 12h3m17 0h-3m-5 0h-4" opacity=".5"></path><path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5Zm9 2c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></path></g></svg>,
                path: '/candlestick',
            },
            {
                id: 5, name: "Column",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-168 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:chart-2-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18" opacity=".5"></path> <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z"></path></g></svg>,
                path: '/column',
            },
            {
                id: 6, name: "Doughnut & Pie",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-169 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:pie-chart-2-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z" opacity=".5"></path>  <path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></path></g> </svg>,
                path: '/daughnut',
            },
            {
                id: 7, name: "Radialbar & Radar",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-170 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-vertical-center-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" d="M2 12h3m17 0h-3m-5 0h-4" opacity=".5"></path><path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5Zm9 2c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></path></g>
                </svg>,
                path: '/radialbar',
            },

        ]
    }
]

export const UI_COMPONENT_NAV_LINK = [
    {
        section: "UI COMPONENTS",
        links: [
            {
                id: 1, name: "Badge",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-172 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:waterdrops-line-duotone">

                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Zm12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z"></path>
                        <path d="M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" opacity=".5"></path>
                    </g>

                </svg>,
                path: '/badges',
            },
            {
                id: 2, name: "Expansion Panel",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-173 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:tag-horizontal-line-duotone">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                        <path d="M9.721 20h2.637c2.227 0 3.341 0 4.27-.533c.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379s-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C15.699 3 14.585 3 12.358 3H9.721C5.846 3 3.908 3 2.704 4.245S1.5 7.493 1.5 11.5s0 6.01 1.204 7.255S5.846 20 9.72 20Z"></path>
                        <path d="M6.5 6.995V16" opacity=".5"></path>
                    </g>

                </svg>,
                path: '/badges',
            },

            {
                id: 4, name: "Dialog",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-175 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:airbuds-case-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></path>  <path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2Z"></path>  <path d="M21 9h-3.5M7 9H3" opacity=".5"></path>  </g> </svg>,
                path: '/dialog',
            },
            {
                id: 5, name: "List",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-176 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bolt-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M13.926 9.705c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363"></path>   <path d="m13.926 9.706l.02.019c.387.364 1.003.364 2.236.364c2.22 0 3.329 0 3.703.672l.019.034c.354.684-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734c-.924-.283-.924-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02" opacity=".5"></path>  </g> </svg>,
                path: '/lsit',
            },
            {
                id: 6, name: "Divider",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-176 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bolt-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382Z"></path>   <path d="M21 7.5L12 12m0 0L3 7.5m9 4.5v9.5" opacity=".5"></path>
                </g> </svg>,
                path: '/divider',
            },

            {
                id: 7, name: "Menu",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-178 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:feed-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path> <path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z" opacity=".5"></path>  </g> </svg>,
                path: '/menu',
            },
            {
                id: 8, name: "Paginator",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-179 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:flag-line-duotone"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">  <path d="M5 22V2"></path><path d="m5 14l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4" opacity=".5"></path></g> </svg>,
                path: '/paginator',
            },
            {
                id: 9, name: "Progress Bar",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-180 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:programming-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></path><path strokeLinecap="round" d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"></path></g>
                </svg>,
                path: '/progressBar',
            },

            {
                id: 10, name: "Progress Spinner",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-181 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:waterdrops-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Zm12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z"></path>    <path d="M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" opacity=".5"></path> </g></svg>,
                path: '/progressSpinner',
            },

            {
                id: 11, name: "Ripples",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-182 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:text-bold-duotone"> <path fill="currentColor" fill-rule="evenodd" d="M8 2h-.066c-.886 0-1.65 0-2.262.082c-.655.088-1.284.287-1.793.797c-.51.51-.709 1.138-.797 1.793C3 5.284 3 6.048 3 6.934V7.95a1 1 0 1 0 2 0V7c0-.971.002-1.599.064-2.061c.059-.434.153-.57.229-.646s.212-.17.646-.229C6.4 4.002 7.029 4 8 4h8c.971 0 1.599.002 2.061.064c.434.059.57.153.646.229s.17.212.229.646C18.998 5.4 19 6.029 19 7v.95a1 1 0 1 0 2 0V6.934c0-.886 0-1.65-.082-2.262c-.088-.655-.287-1.284-.797-1.793c-.51-.51-1.138-.709-1.793-.797C17.716 2 16.952 2 16.066 2z" clip-rule="evenodd"></path> <path fill="currentColor" d="M13 4h-2v16h2z" opacity=".5"></path><path fill="currentColor" fill-rule="evenodd" d="M6 21a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></path></svg>,
                path: '/ripples',
            },
            {
                id: 12, name: "Slide Toggle ",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-183 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:balloon-line-duotone"> <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">  <path d="M11.94 17.5c4.141.033 7.593-3.797 7.56-7.94c-.034-4.14-3.42-7.525-7.56-7.56A7.355 7.355 0 0 0 4.5 9.44c.034 4.142 3.297 8.027 7.44 8.06Z"></path><path d="M15.5 9a3.035 3.035 0 0 0-3-3M12 19.85c.321 0 .482 0 .593-.022c.654-.128 1.051-.772.858-1.39c-.033-.105-.109-.242-.261-.515M12 19.85c-.321 0-.482 0-.593-.022c-.654-.128-1.051-.772-.858-1.39c.033-.105.109-.242.261-.515M12 19.85V22" opacity=".5"></path> </g>   </svg>,
                path: '/slideToggle',
            },
            {
                id: 13, name: "Slider",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-184 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:slider-minimalistic-horizontal-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"></path>  <path strokeLinecap="round" d="M4.5 3h15m-15 18h15" opacity=".5"></path> </g> </svg>,
                path: '/slider',
            },

            {
                id: 14, name: "Snackbar",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-185 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:laptop-minimalistic-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5">   <path d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v5c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></path>   <path strokeLinecap="round" d="M22 21H2m13-6H9" opacity=".5"></path>  </g> </svg>,
                path: '/snackbar',
            },
            {
                id: 15, name: "Tabs",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-186 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:checklist-bold-duotone"> <path fill="currentColor" fill-rule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 16.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></path>  <path fill="currentColor" d="M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" opacity=".5"></path></svg>,
                path: '/tabs',
            },
            {
                id: 16, name: "Toolbar",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-27 mdc-list-item__start ng-star-inserted" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:layers-minimalistic-line-duotone" width="24" height="24"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                path: '/toolbar',
            },

            {
                id: 17, name: "Tooltip",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-188 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-horizonta-spacing-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" d="M3 2v20M21 2v20" opacity=".5"></path><path d="M12 4c-1.886 0-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4Z"></path></g></svg>,
                path: '/tooltip',
            },


        ]
    }
]

export const AUTHENTICATION_PAGE_NAV_LINK = [
    {
        section: "AUTH",
        links: [
            {
                id: 1, name: "Login",
                path: null,
                isDropdown: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 d-flex justify-content-center " preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:lock-keyhole-line-duotone" width="18" height="18"><g fill="none" stroke="currentColor" strokeWidth="1.5px"><path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path><circle cx="12" cy="16" r="2" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></circle><path strokeLinecap="round" d="M6 10V8a6 6 0 1 1 12 0v2" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path></g></svg>,
                subLinks: [
                    { id: 11, name: "Login 1", path: "/login/login1" },
                    { id: 12, name: "Boxed Login", path: "/login/boxedLogin" },
                ]
            },
            {
                id: 2, name: "Register",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-191 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:user-plus-rounded-line-duotone">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="6" r="4"></circle>
                        <circle cx="17" cy="18" r="4"></circle>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16.667v2.666M15.667 18h2.666"></path>
                        <path d="M14 20.834c-.634.108-1.305.166-2 .166c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936" opacity=".5"></path> </g >  </svg>,
                path: null,
                isDropdown: true,
                subLinks: [
                    { id: 21, name: "Slide Register", path: "/register/slideRegister" },
                    { id: 22, name: "Boxed Register", path: "/register/boxedRegister" },
                ]
            },
            {
                id: 3, name: "Forgot Password",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-192 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:password-outline"><path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.608.351a.75.75 0 0 0 .75 1.3l.608-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35z"></path><path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153zM3.702 5.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008" clip-rule="evenodd"></path></svg>,
                path: null,
                isDropdown: true,
                subLinks: [
                    { id: 31, name: "Slide Forgot Password", path: "/forgotPassword/slideForgotPassword" },
                    { id: 32, name: "Boxed Forgot Password", path: "/forgotPassword/boxedForgotPassword" },
                ]
            },
            {
                id: 4, name: "Two Steps",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-193 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:siderbar-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></path>   <path strokeLinecap="round" d="M5.5 10h6m-5 4h4"></path><path strokeLinecap="round" d="M15 21V3" opacity=".5"></path></g></svg>,
                path: null,
                isDropdown: true,
                subLinks: [
                    { id: 41, name: "Slide Two Steps", path: "/twoStep/slideTwoStep" },
                    { id: 42, name: "Boxed Two Steps", path: "/twoStep/boxedTwoStep" },
                ]
            },
            {
                id: 5, name: "Error",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-194 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bug-minimalistic-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z"></path> <path strokeLinecap="round" d="M19 13h3M5 13H2m18.5-6l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2m13.5 17l-2-.8m-15 .8l2-.8m5-7.7h3m-3 5h3" opacity=".5"></path></g></svg>,
                path: "/error",

            },
            {
                id: 6, name: "Maintenance",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-195 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:settings-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5">  <circle cx="12" cy="12" r="3"></circle><path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z" opacity=".5"></path></g>
                </svg>,
                path: "/maintenance",

            },

        ]
    }
]


export const OTHER_NAV_LINK = [
    {
        section: "OTHER",
        links: [
            {
                id: 1, name: "Menu Level",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-211 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:align-horizontal-center-line-duotone"><g fill="none" stroke="currentColor" strokeWidth="1.5"> <path strokeLinecap="round" d="M12 2v3m0 17v-3m0-5v-4" opacity=".5"></path> <path d="M5 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 6.098 19 6.565 19 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 8.902 5 8.435 5 7.5Zm2 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></path> </g>
                </svg>,
                path: null,
                isDropdown: true,
                subLinks: [
                    { id: 11, name: "Menu 1", path: "/menuLevel/menu1" },
                    { id: 12, name: "Menu 2", path: "/menuLevel/menu2" },

                ]

            },
            {
                id: 2, name: "Disabled",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-241 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:bookmark-circle-line-duotone">  <g fill="none" stroke="currentColor" strokeWidth="1.5"> <path d="M16 14.046v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66Z"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"></path></g></svg>,
                path: "/disabled",
            },

            {
                id: 3, name: "Chip",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-242 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:branching-paths-up-line-duotone"><g fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></path>
                    <path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM18 8l.53.53a.75.75 0 0 0 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12z" opacity=".5"></path> <path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM6 8l-.53-.53a.75.75 0 0 0 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5l-1.06-1.06l-1.5 1.5zm-1.06 0l1.5 1.5l1.06-1.06l-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12z"></path> </g> </svg>,
                path: "/disabled",
            },
            {
                id: 4, name: "Outlined",
                icon: <svg svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon ng-tns-c1496236254-243 mdc-list-item__start ng-star-inserted" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data- icon="solar:add-square-line-duotone"> <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></path><path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"></path></g></svg>,
                path: "/outlined",
            },
            {
                id: 5, name: "External Link",
                icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar mat-mdc-list-item-icon routeIcon mdc-list-item__start" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" matlistitemicon data-icon="solar:link-round-angle-bold-duotone"><path fill="currentColor" fill-rule="evenodd" d="M2.277 7.934a6.75 6.75 0 0 0 4.397 11.513a.75.75 0 0 0 .083-1.498a5.25 5.25 0 0 1-3.42-8.954l2.829-2.829a5.25 5.25 0 1 1 7.425 7.425l-1.415 1.414a.75.75 0 1 0 1.061 1.06l1.414-1.413a6.75 6.75 0 0 0-9.546-9.546z" clip-rule="evenodd"></path><path fill="currentColor" d="M10.409 17.834a5.25 5.25 0 0 1 0-7.425l1.414-1.414a.75.75 0 1 0-1.06-1.06L9.347 9.347a6.75 6.75 0 1 0 9.546 9.546l2.829-2.828a6.75 6.75 0 0 0-4.398-11.513a.75.75 0 0 0-.083 1.498a5.25 5.25 0 0 1 3.42 8.954l-2.829 2.829a5.25 5.25 0 0 1-7.424 0" opacity=".5"></path>
                </svg>,
                path: "/externalLink",
            },


        ]
    }
]

