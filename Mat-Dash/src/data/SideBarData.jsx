
import user11 from '/Images/profile/user-11.png'
import user12 from '/Images/profile/user-12.png'
import user13 from '/Images/profile/user-13.png'
import user15 from '/Images/profile/user-15.png'
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
