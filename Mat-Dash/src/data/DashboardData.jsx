//This data used in Dashboard 2 user card
const CARD_COLOR_START = "#8b5cf6";
const CARD_COLOR_END = "#5b21b6";
const TEXT_COLOR = '#FFFFFF';
const SECONDARY_COLOR = '#D1D5DB'; // Equivalent of gray-300

export const subscriptionData = [
    {
        id: 1,
        title: "Subscription",
        subTitle: "78,298",
        profit: "-12%",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 d-flex text-error" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:layers-linear" width="25" height="25"><g fill="none" stroke="#FF6692" strokeWidth="1.5px"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" stroke="#FF6692" fill="none" strokeWidth="1.5px"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10" stroke="#FF6692" fill="none" strokeWidth="1.5px"></path><path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" stroke="#FF6692" fill="none" strokeWidth="1.5px"></path></g></svg>
        ),

        // Chart RAW DATA ----
        chartData: {
            series1: [30, 70, 60, 50, 45, 80, 75],
            series2: [70, 30, 40, 50, 55, 20, 25],
        },

        // FINAL CHART CONFIG ----
        chartState: function () {
            return {
                series: [
                    { name: "Segment A", data: this.chartData.series1 },
                    { name: "Segment B", data: this.chartData.series2 }
                ],
                options: {
                    chart: {
                        type: 'bar',
                        height: 150,
                        stacked: true,
                        toolbar: { show: false },
                        sparkline: { enabled: true },
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '25%',
                            // borderRadius: 8,
                            // borderRadiusApplication: "around",
                            // borderRadiusWhenStacked: "all",
                        },
                    },
                    dataLabels: { enabled: false },

                    stroke: {
                        show: true,
                        width: 8,
                        colors: [TEXT_COLOR, SECONDARY_COLOR], // TEXT_COLOR, SECONDARY_COLOR
                    },
                    fill: {
                        colors: [TEXT_COLOR, SECONDARY_COLOR],
                    },

                    xaxis: {
                        labels: { show: false },
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                    },
                    yaxis: { show: false },
                    grid: { show: false },
                    tooltip: {
                        theme: 'light',
                        y: { formatter: (val) => val.toFixed(0) }
                    },
                }
            };
        }
    },
];



export const customerData = [
    {
        id: 2,
        cardBgColor: "#16cdc726",
        title: "Customers",
        subTitle: "25,872",
        profit: "-6.4%",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <g fill="none" stroke="#16CDC7" strokeWidth="1.5">
                <path d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"></path>
                <path strokeLinecap="round" d="M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5" opacity=".5"></path>
            </g>
        </svg>),

        series: [{
            name: 'Customers',
            data: [30, 100, 10, 99, 40, 80]
        }],

        options: {
            chart: {
                type: 'area',
                height: 80,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'smooth',
                width: 2,
                colors: ['rgb(22,205,199)'] // <-- line color here
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    stops: [0, 90, 100]
                }
            },
            tooltip: {
                enabled: false
            }
        }
    }
];

//This data is for Dashboard 3 Card Components

export const CardData = [
    {
        id: 1,
        title: "Total Orders",
        NumericValue: "16,689",
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar text-white icon-27" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:dollar-minimalistic-linear" width="27" height="27"><g fill="none" stroke="#FFFFFF" strokeWidth="1.5px"><circle cx="12" cy="12" r="10" stroke="#FFFFFF" fill="none" strokeWidth="1.5px"></circle><path strokeLinecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5" stroke="#FFFFFF" fill="none" strokeWidth="1.5px"></path></g></svg>,
        iconBgColor: "#635bff",
        cardBgColor: 'linear-gradient(180deg, #635bff1f 0, #635bff08)',
    },
    {
        id: 2,
        title: "Return Item",
        NumericValue: "148",
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar text-white icon-27" width="27" height="27" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:recive-twice-square-linear"><g fill="none" stroke="#FFFFFF" strokeWidth="1.5px"></g>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11" stroke="#FFFFFF" fill="none" strokeWidth="1.5px"></path><path strokeLinecap="round" d="M17 6v12" stroke="#FFFFFF" fill="none" strokeWidth="1.5px"></path><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="#FFFFFF" fill="none" strokeWidth="1.5px"></path></svg>,
        iconBgColor: "#F8C20A",
        cardBgColor: 'linear-gradient(180deg, #f8c20a1f 0, #f8c20a08)',
    },

    {
        id: 3,
        title: "Annula Budget",
        NumericValue: "$156K",
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic text-white icon-27" width="27" height="27" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:outline-backpack"><path fill="#FFFFFF" d="M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-1.5-8v4h-2v-2h-7v-2z"></path></svg>,
        iconBgColor: "#16cdc7",
        cardBgColor: 'linear-gradient(180deg, #16cdc71f 0, #16cdc708)',
    },


    {
        id: 4,
        title: "Cancel Order",
        NumericValue: "64",
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic text-white icon-27" width="27" height="27" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:baseline-sync-problem"><path fill="#FFFFFF" d="M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24A6 6 0 0 1 5 12a5.99 5.99 0 0 1 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24A6 6 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-.89 6-4.01 6-7.74c0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z"></path></svg>,
        iconBgColor: "#FF6692",
        cardBgColor: 'linear-gradient(180deg, #ff66921f 0, #ff669208)',
    },


    {
        id: 5,
        title: "Total Income",
        NumericValue: "$36,715",
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic text-white icon-27" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:outline-forest"><path fill="#FFFFFF" d="m24 18l-3.86-6H22L15 2l-3 4.29L9 2L2 12h1.86L0 18h7v4h4v-4h2v4h4v-4zM15 5.49L18.16 10h-1.68l3.86 6h-3.62l-2.57-4H16l-2.78-3.97zM3.66 16l3.86-6H5.84L9 5.49L12.16 10h-1.68l3.86 6z"></path></svg>,
        iconBgColor: "#36c76c",
        cardBgColor: 'linear-gradient(180deg, #36c76c1f 0, #36c76c08)',
    },


]

