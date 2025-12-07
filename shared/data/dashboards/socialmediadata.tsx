import { JSX } from "react"

export const SocialMediaSeries = [
    {
        name: "Facebook",
        data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 20],
    },
    {
        name: "Instagram",
        data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 36],
    },
    {
        name: "Twitter",
        data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 68],
    }
]
export const SocialMediaOptions = {
    chart: {
        type: "line",
        height: 320,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: '#000',
            opacity: 0.1
        },
        toolbar: {
            show: false,
        }
    },
    grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true, // Ensure y-axis grids are shown
            },
        },
    },
    colors: [
        "var(--primary-color)",
        "rgba(255, 73, 205, 1)",
        "rgba(50, 212, 132, 1)",
    ],
    stroke: {
        curve: ["smooth", "smooth", "smooth"],
        width: [2, 2, 2],
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        markers: {
            size: 5
        }
    },
    yaxis: {
        title: {
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        // labels: {
        //     formatter: function (y) {
        //         return y.toFixed(0) + "k";
        //     },
        // },
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    },
    tooltip: {
        theme: "dark",
    }
}

//Audience By Gender
export const SocialGenderseries = [{
    name: 'Male',
    data: [20, 30, 40, 80, 20, 80],
}, {
    name: 'Female',
    data: [44, 76, 78, 13, 43, 10],
}]
export const SocialGenderoptions = {
    chart: {
        height: 280,
        type: 'radar',
        toolbar: {
            show: false,
        }
    },
    title: {
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ["var(--primary02)", "rgba(255, 73, 205, 0.2)"],
    stroke: {
        width: 1.5,
        colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
    },
    fill: {
        opacity: 0.1
    },
    legend: {
        show: true,
        fontSize: "12px",
        position: 'top',
        horizontalAlign: 'center',
        fontFamily: "Montserrat",
        fontWeight: 500,
        offsetX: 0,
        offsetY: -8,
        height: 50,
        labels: {
            colors: '#9ba5b7',
        },
        markers: {
            size: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 7,
            offsetX: 0,
            offsetY: 0
        },
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
        axisBorder: { show: false },
    },
    yaxis: {
        tickAmount: 5,
        labels: {
            formatter: function (val: any, i: number) {
                if (i % 5 === 0) {
                    return val
                }
            }
        }
    }
}

// Top Audience Countries
interface CountryData {
    id: number;
    country: string;
    flag: string;
    likes: number;
    change: number;
    count:string;
};

export const Audiencedata: CountryData[] = [
    { id: 1, country: 'United States', flag: 'us_flag.jpg', likes: 15000, change: 34.6, count:'35,000'},
    { id: 2, country: 'India', flag: 'india_flag.jpg', likes: 12000, change: -18.74, count:'25,000'},
    { id: 3, country: 'Canada', flag: 'canada_flag.jpg', likes: 8500, change: 16.06, count:'20,000'},
    { id: 4, country: 'Germany', flag: 'germany_flag.jpg', likes: 4800, change: 53.22, count:'12,500'},
    { id: 5, country: 'France', flag: 'french_flag.jpg', likes: 4000, change: -31.54, count:'11,000'},
];

// Post Insights
interface MediaData {
    id: number;
    title: string;
    image: string;
    date: string;
    platform: string;
    followers: string;
    platformColor:string;
};

export const Insightsdata: MediaData[] = [
    { id: 1, title: 'Behind the Scenes', image: 'media-23.jpg', date: '02, Feb', platform: 'Youtube', followers: '9.5k+', platformColor:'primary'},
    { id: 2, title: 'Monday Motivation', image: 'media-24.jpg', date: '14, Feb', platform: 'Instagram', followers: '1M+', platformColor:'secondary'},
    { id: 3, title: 'Travel Diaries', image: 'media-25.jpg', date: '13, Feb', platform: 'Twitter', followers: '10k+', platformColor:'success'},
    { id: 4, title: 'Recipe of the Day', image: 'media-26.jpg', date: '12, Feb', platform: 'Linked In', followers: '3.5k', platformColor:'warning'},
    { id: 5, title: 'Fashion Forward', image: 'media-27.jpg', date: '11, Feb', platform: 'Pinterest', followers: '1.6M+', platformColor:'primary'},
];

//Social Media Performance Overview
interface SocialMediaData {
    id: string | any;
    platform: string;
    avatar: string;
    followers: number;
    impressions: number | string;
    clicks: number | string;
    conversions: number | string;
    conversionRate: number;
    reach: number | string;
    growth: string;
    color: string;
    badgeColor: string;
}

export const SocialMediaData: SocialMediaData[] = [
    {
        id: "1",
        platform: "Facebook",
        avatar: "ri-facebook-line",
        followers: 120,
        impressions: "8,500",
        clicks: "1,200",
        conversions: 12.5,
        conversionRate: 950,
        reach: "35,000",
        growth: "4.2%",
        color: 'primary',
        badgeColor: 'primary'
    },
    {
        id: "2",
        platform: "Instagram",
        avatar: "ri-instagram-line",
        followers: 95,
        impressions: "12,000",
        clicks: "2,100",
        conversions: "1,800",
        conversionRate: 14.3,
        reach: "42,000",
        growth: "5.0%",
        color: 'secondary',
        badgeColor: 'secondary'
    },
    {
        id: "3",
        platform: "Twitter",
        avatar: "ri-twitter-x-line",
        followers: 180,
        impressions: "56,00",
        clicks: 1500,
        conversions: "1,000",
        conversionRate: 9.8,
        reach: "28,000",
        growth: "3.5%",
        color: 'warning',
        badgeColor: 'warning'
    },
    {
        id: "4",
        platform: "LinkedIn",
        avatar: "ri-linkedin-box-line",
        followers: 75,
        impressions: "4,200",
        clicks: 800,
        conversions: 600,
        conversionRate: 11.2,
        reach: "20,000",
        growth: "3.8%",
        color: 'info',
        badgeColor: 'info'
    },
    {
        id: "5",
        platform: "YouTube",
        avatar: "ri-youtube-line",
        followers: 30,
        impressions: "22,000",
        clicks: "4,000",
        conversions: "3,800",
        conversionRate: 18.5,
        reach: "65,000",
        growth: "7.8%",
        color: 'success',
        badgeColor: 'info'
    },
    {
        id: "6",
        platform: "Snapchat",
        avatar: "ri-snapchat-line",
        followers: 60,
        impressions: "6,500",
        clicks: "1,200",
        conversions: 900,
        conversionRate: 10.1,
        reach: "22,500",
        growth: "3.9%",
        color: 'danger',
        badgeColor: 'info'
    }
];

//Recent Acivity
interface SocialActivity {
    platform: string;
    time: string;
    activity: string;
    icon: string;
    badgeColor: string;
}
export const AcivitySocial: SocialActivity[] = [
    {
        platform: "Facebook",
        time: "10:15 AM",
        activity: 'Published new post on "Spring Sale Launch"',
        icon: "ri-facebook-line",
        badgeColor: "bg-primary-transparent"
    },
    {
        platform: "Instagram",
        time: "3:45 PM",
        activity: 'Uploaded 3 new photos to "Beach Vacation Highlights" album',
        icon: "ri-instagram-line",
        badgeColor: "bg-secondary-transparent"
    },
    {
        platform: "LinkedIn",
        time: "11:30 AM",
        activity: 'Updated job position for "Marketing Manager"',
        icon: "ri-linkedin-box-line",
        badgeColor: "bg-info-transparent"
    },
    {
        platform: "Twitter",
        time: "6:00 PM",
        activity: 'Tweeted "Exciting product launch tomorrow!"',
        icon: "ri-twitter-x-line",
        badgeColor: "bg-dark-transparent"
    },
    {
        platform: "Pinterest",
        time: "11:30 AM",
        activity: 'Pinned new "Holiday Decoration Ideas" board',
        icon: "ri-pinterest-line",
        badgeColor: "bg-danger-transparent"
    }
];

//Audience Age Metrics
export const MetricsSeries = [{
    data: [462, 451, 350, 530, 470, 500, 485],
    name: 'Total Audience',
}]
export const MetricsOptions = {
    chart: {
        type: 'bar',
        height: 375,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            barHeight: '40%',
            borderRadius: 2,
            horizontal: true,
            distributed: true,
        }
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: '#ffffff',
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    colors: ["var(--primary-color)"],
    xaxis: {
        categories: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80'],
        axisBorder: {
            show: true,
            color: '#c7cacd',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#c7cacd',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    },
    tooltip: {
        theme: "dark",
    }
}

//Suggestions
interface Suggestions {
    name: string;
    mutualFriends: string;
    imageSrc: string;
}
export const Suggestion: Suggestions[] = [
    {
        name: "Socrates Itumay",
        mutualFriends: "3 Mutual Friends",
        imageSrc: "../../assets/images/faces/2.jpg"
    },
    {
        name: "Ryan Gercia",
        mutualFriends: "1 Mutual Friend",
        imageSrc: "../../assets/images/faces/3.jpg"
    },
    {
        name: "Prax Bhav",
        mutualFriends: "2 Mutual Friends",
        imageSrc: "../../assets/images/faces/10.jpg"
    },
    {
        name: "Jackie Chen",
        mutualFriends: "12 Mutual Friends",
        imageSrc: "../../assets/images/faces/12.jpg"
    },
    {
        name: "Samantha Sam",
        mutualFriends: "6 Mutual Friends",
        imageSrc: "../../assets/images/faces/5.jpg"
    }
];

//Engagement
function generateData(count: number, yrange: { min: any; max: any }) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y,
        });
        i++;
    }
    return series;
}
export const EngagementSeries = [
    {
        name: "1Am",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
    {
        name: "4Am",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
    {
        name: "8Am",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
    {
        name: "12Am",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
    {
        name: "3Pm",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
    {
        name: "7Pm",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
    {
        name: "12Pm",
        data: generateData(7, {
            min: 0,
            max: 90,
        }),
    },
]
export const EngagementOptions = {
    chart: {
        height: 200,
        type: "heatmap",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#735dff"],
    grid: {
        borderColor: "#f2f5f7",
    },
    xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
}

interface DashboardCardData {
    id: number;
    title: string;
    value: string | number;
    percent: string;
    percentColor: string;
    svgColor: string;
    svgIcon: JSX.Element;
}
export const SocialCards: DashboardCardData[] = [
    {
        id: 1,
        title: "Total Visitors",
        value: "125,350",
        percent: "2.38%",
        percentColor: "success",
        svgColor: "primary",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z" fillRule="evenodd"></path></g><g><circle cx="9" cy="8" fillRule="evenodd" r="4"></circle></g><g><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" fillRule="evenodd"></path></g><g><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" fillRule="evenodd"></path></g></g></g></svg>
        ),
    },
    {
        id: 2,
        title: "Engagement",
        value: "28,754",
        percent: "1.23%",
        percentColor: "success",
        svgColor: "secondary",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"></path></svg>
        ),
    },
    {
        id: 3,
        title: "Like",
        value: "34,890",
        percent: "0.96%",
        percentColor: "danger",
        svgColor: "success",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
        ),
    },
    {
        id: 4,
        title: "Bounce Rate",
        value: "15.4%",
        percent: "6.06%",
        percentColor: "success",
        svgColor: "info",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
        ),
    },
];


