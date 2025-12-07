import { ReactNode } from "react";

interface DashboardCard {
    title: string;
    smallText: string;
    avatarClass: string;
    ValueClass: string;
    ValueClass1: string;
    count: string;
    percent: string;
    icon: string;
    iconColor: string;
    cardClass: string;
    priceColor: string;
    svgIcon: ReactNode;
}
export const SalesCard: DashboardCard[] = [
    {
        title: 'Total Revenue',
        avatarClass: 'avatar-md flex-shrink-0',
        ValueClass: 'my-2 fw-semibold lh-sm',
        smallText: 'fs-12 lh-base',
        ValueClass1: 'fs-12 lh-base',
        count: '46658',
        percent: '0.45%',
        icon: 'ti ti-trending-up me-1 d-inline-block fw-semibold align-middle',
        iconColor: 'success fw-medium',
        cardClass: 'dashboard-main-card overflow-hidden primary',
        priceColor: 'primary',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 10c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z" /></svg>
        )
    },
    {
        title: 'Refund Requests',
        avatarClass: 'avatar-md flex-shrink-0',
        ValueClass: 'my-2 fw-semibold lh-sm',
        ValueClass1: 'mb-0',
        smallText: 'fs-12 lh-base',
        count: '4654',
        percent: '4.43%',
        icon: 'ti ti-trending-up me-1 d-inline-block fw-semibold align-middle',
        iconColor: 'success fw-medium',
        cardClass: 'dashboard-main-card overflow-hidden secondary',
        priceColor: 'secondary',
        svgIcon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z" /></svg>)
    },
    {
        title: 'Total Orders',
        avatarClass: 'avatar-md flex-shrink-0',
        ValueClass: 'my-2 fw-semibold lh-sm',
        ValueClass1: 'mb-0',
        smallText: 'fs-12 lh-base',
        count: '25853',
        percent: '1.25%',
        icon: 'ti ti-trending-up me-1 d-inline-block fw-semibold align-middle',
        iconColor: 'success fw-medium',
        cardClass: 'dashboard-main-card overflow-hidden warning',
        priceColor: 'warning',
        svgIcon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59L5.25 14c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03L21 6.16c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21L4.27 2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z" /></svg>)
    },
    {
        title: 'Total Visitors',
        avatarClass: 'avatar-md flex-shrink-0',
        ValueClass: 'my-2 fw-semibold lh-sm',
        ValueClass1: 'mb-0',
        smallText: 'fs-12 lh-base',
        count: '63744',
        percent: '2.97%',
        icon: 'ti ti-trending-down me-1 d-inline-block fw-semibold align-middle',
        iconColor: 'danger fw-medium',
        cardClass: 'dashboard-main-card overflow-hidden success',
        priceColor: 'success',
        svgIcon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368"><path d="M9 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm6.67 5.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" /></svg>)
    }
];

export const Overviewseries = [{
    name: "Total Orders",
    type: 'bar',
    data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29]
},
{
    name: "Total Sales",
    type: 'bar',
    data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46]
},
{
    name: "Revenue",
    type: 'line',
    data: [26, 45, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23]
}]

export const Overviewoptions = {
    chart: {
        toolbar: {
            show: false
        },
        type: 'line',
        height: 365,
        // stacked: true,
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top: 2,
            right: 2,
            bottom: 2,
            left: 2
        },
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "smooth",
        width: [5, 5, 2.5],
        lineCap: "round"
    },
    legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        markers: {
            size: 4,
            strokeWidth: 0,
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
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
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            show: false,
            // formatter: function (y) {
            //     return y.toFixed(0) + "";
            // }
        }
    },
    xaxis: {
        type: 'month',
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        title: {
            style: {
                color: '#adb5be',
                fontSize: '5px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "70%",
            borderRadius: 2
        }
    },

    colors: ["var(--primary-color)", 'rgb(255, 73, 205)', "rgb(50, 212, 132)"],
}

interface StatCard {
    title: string;
    value: string;
}
export const Stats: StatCard[] = [
    { title: 'Total Orders', value: '15,535' },
    { title: 'Total Sales', value: '21,754' },
    { title: 'Revenue Earned', value: '$1.8M' }
];

export const Visitorsseries = [{
    name: 'Desktop',
    data: [80, 50, 100, 30, 40, 20, 40],
}, {
    name: 'Mobile',
    data: [20, 30, 40, 80, 20, 90, 35],
}, {
    name: 'Others',
    data: [40, 76, 28, 16, 8, 10, 80],
}]

export const Visitorsoptions = {
  chart: {
    // height: 305,
    type: "radar",
    toolbar: {
        show: false,
    },
},
colors: ["var(--primary-color)", "rgb(50, 212, 132)", "rgb(253, 175, 34)"],
stroke: {
    width: 1,
},
fill: {
    opacity: 1,
},
markers: {
    size: 0,
},
legend: {
    show: true,
    position: "bottom",
    markers: {
        size: 4,
        strokeWidth: 0,
    },
},
plotOptions: {
    radar: {
        // size: 100,
        polygons: {
            fill: {
                colors: ['var(--primary005)', 'var(--primary005)']
            },

        }
    }
},
labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
xaxis: {
    axisBorder: { show: false },
    labels: {
    show: true,
    style: {
      fontSize: "9px"
    }
}
},
yaxis: {
    axisBorder: { show: false },
    tickAmount: 5,
},
}

//Top Selling Products
interface Product {
    image: string;
    name: string;
    price: string;
    stockStatus: 'In Stock' | 'Out Of Stock';
    stockColor: 'text-success' | 'text-danger';
    sales: string;
  }
export const Products: Product[] = [
    {
      image: '../../assets/images/ecommerce/png/11.png',
      name: 'TaoTronics Wall Clock',
      price: '$699',
      stockStatus: 'In Stock',
      stockColor: 'text-success',
      sales: '1000'
    },
    {
      image: '../../assets/images/ecommerce/png/12.png',
      name: 'Club Fleece Hoodie',
      price: '$55',
      stockStatus: 'In Stock',
      stockColor: 'text-success',
      sales: '3,100'
    },
    {
      image: '../../assets/images/ecommerce/png/14.png',
      name: 'SmartGizmo Pro Headset',
      price: '$199',
      stockStatus: 'In Stock',
      stockColor: 'text-success',
      sales: '1,250'
    },
    {
      image: '../../assets/images/ecommerce/png/16.png',
      name: 'TaoTronics Cattle',
      price: '$699',
      stockStatus: 'Out Of Stock',
      stockColor: 'text-danger',
      sales: '1000'
    },
    {
      image: '../../assets/images/ecommerce/png/13.png',
      name: 'UltraMaze Ladies Bag',
      price: '$89',
      stockStatus: 'In Stock',
      stockColor: 'text-success',
      sales: '2,150'
    }
];

//Recent Activity
interface Activity {
    date: string;
    time: string;
    content: React.ReactNode;
    listClass?:string;
  }
export const Activities: Activity[] = [
    {
      date: '24,Nov',
      time: '08:45 AM',
      content: (
        <>
          John Doe placed an order for{' '}
          <span className="fw-medium text-primary">5x Apple iPhone 14</span>
        </>
      )
    },
    {
      date: '24,Nov',
      time: '09:15 AM',
      content: (
        <>
          Payment of{' '}
          <span className="fw-medium text-default">$1,250.00</span> received from{' '}
          <span className="fw-medium text-default">Alice Smith</span> for{' '}
          <span className="fw-medium text-warning">Order #1020</span>.
        </>
      )
    },
    {
      date: '24,Nov',
      time: '10:00 AM',
      content: (
        <>
          <span className="fw-medium text-default">David Brown</span> requested a refund for{' '}
          <span className="fw-medium text-info">1x Samsung Galaxy S22</span>.
        </>
      )
    },
    {
      date: '24,Nov',
      time: '10:45 AM',
      content: (
        <>
          <span className="fw-medium text-success">Product ID: 5409</span> (Sony WH-1000XM5) stock dropped below threshold.
        </>
      )
    },
    {
      date: '24,Nov',
      time: '11:30 AM',
      content: (
        <>
          <span className="fw-medium text-default">Emma Johnson</span> left a{' '}
          <span className="fw-medium text-default">5-star review</span> on{' '}
          <span className="fw-medium text-orange">Product ID: 7312</span> (Dell XPS 13).
        </>
      ),
      listClass:'mb-1'
    }
];

//Top Customers
interface Customer {
    initials: string;
    name: string;
    email: string;
    amount: string;
    colorClass: string;
}
export const Customers: Customer[] = [
    {
      initials: 'JS',
      name: 'Jane Smith',
      email: 'janesmith215@gmail.com',
      amount: '$23,755',
      colorClass: 'primary'
    },
    {
      initials: 'JD',
      name: 'Jhon Doe',
      email: 'jhondoe431@gmail.com',
      amount: '$14,563',
      colorClass: 'secondary'
    },
    {
      initials: 'AK',
      name: 'Alicia Keys',
      email: 'aliciakeys986@gmail.com',
      amount: '$12,075',
      colorClass: 'warning'
    },
    {
      initials: 'LP',
      name: 'Leo Phillip',
      email: 'leophillip77@gmail.com',
      amount: '$10,485',
      colorClass: 'info'
    },
    {
      initials: 'BS',
      name: 'Brenda Simpson',
      email: 'brendasimpson075@gmail.com',
      amount: '$8,533',
      colorClass: 'success'
    }
];

// Top User Channels

interface Company {
    name: string;
    logo: string;
    industry: string;
    changePercent: string;
    changeDirection: 'up' | 'down';
    total: string;
    progressColor: string;
    progress: number;
  }
export const Channels: Company[] = [
    {
      name: 'CloudComm',
      logo: '../../assets/images/company-logos/1.png',
      industry: 'Digital Communication',
      changePercent: '2.98%',
      changeDirection: 'up',
      total: '3,765',
      progressColor: 'primary',
      progress: 75,
    },
    {
      name: 'BuzzWave',
      logo: '../../assets/images/company-logos/2.png',
      industry: 'Social Media',
      changePercent: '6.45%',
      changeDirection: 'down',
      total: '2,855',
      progressColor: 'secondary',
      progress: 45,
    },
    {
      name: 'NexusNet',
      logo: '../../assets/images/company-logos/3.png',
      industry: 'Networking',
      changePercent: '1.95%',
      changeDirection: 'up',
      total: '2,384',
      progressColor: 'warning',
      progress: 81,
    },
    {
      name: 'FlashConnect',
      logo: '../../assets/images/company-logos/4.png',
      industry: 'Direct Marketing',
      changePercent: '5.91%',
      changeDirection: 'down',
      total: '1,755',
      progressColor: 'info',
      progress: 60,
    },
    {
      name: 'EchoLink',
      logo: '../../assets/images/company-logos/5.png',
      industry: 'Feedback & Surveys',
      changePercent: '3.75%',
      changeDirection: 'up',
      total: '1,525',
      progressColor: 'success',
      progress: 53,
    },
    {
      name: 'VibeStream',
      logo: '../../assets/images/company-logos/6.png',
      industry: 'Content Distribution',
      changePercent: '0.95%',
      changeDirection: 'up',
      total: '1,345',
      progressColor: 'danger',
      progress: 37,
    },
];

//Recent Invoices
interface Order {
    id: string;
    initials: string;
    avatarBg: string;
    name: string;
    email: string;
    date: string;
    time: string;
    products: string[];
    amount: string;
    status: 'Paid' | 'Pending' | 'Overdue';
    statusBg: string;
  }
export const Orders: Order[] = [
    {
      id: '#SPK231',
      initials: 'JS',
      avatarBg: 'primary',
      name: 'Jane Smith',
      email: 'janesmith213@gmail.com',
      date: '27,Aug 2024',
      time: '12:45PM',
      products: ['3.jpg', '4.jpg', '5.jpg'],
      amount: '$1,249',
      status: 'Paid',
      statusBg: 'success-transparent',
    },
    {
      id: '#SPK421',
      initials: 'JD',
      avatarBg: 'secondary',
      name: 'Jhon Doe',
      email: 'jhondoe865@gmail.com',
      date: '16,Sep 2024',
      time: '11:15AM',
      products: ['1.jpg', '2.jpg'],
      amount: '$3,299',
      status: 'Pending',
      statusBg: 'warning-transparent',
    },
    {
      id: '#SPK175',
      initials: 'ED',
      avatarBg: 'warning',
      name: 'Emiley Davis',
      email: 'emileydavis234@gmail.com',
      date: '15,Sep 2024',
      time: '04:45PM',
      products: ['5.jpg', '6.jpg'],
      amount: '$4,799',
      status: 'Overdue',
      statusBg: 'danger-transparent',
    },
    {
      id: '#SPK145',
      initials: 'LP',
      avatarBg: 'info',
      name: 'Leo Phillip',
      email: 'leophillip423@gmail.com',
      date: '21,Sep 2024',
      time: '02:18PM',
      products: ['3.jpg'],
      amount: '$2,499',
      status: 'Paid',
      statusBg: 'success-transparent',
    },
    {
      id: '#SPK426',
      initials: 'SL',
      avatarBg: 'success',
      name: 'Sara Lee',
      email: 'saralee765@gmail.com',
      date: '19,Oct 2024',
      time: '03:52PM',
      products: ['4.jpg', '1.jpg'],
      amount: '$3,999',
      status: 'Paid',
      statusBg: 'success-transparent',
    },
];

// Recent Transactions
interface Avatar {
    src: string;
    alt?: string;
}
  
 interface Orderss {
    id: string;
    items: number;
    status: "Paid" | "Pending" | "Failed";
    amount: string;
    date: string;
    avatars: Avatar[];
    extraAvatars?: number;
    statusColor:string;
    icon:string;
}
  
 export const Transactionsdata: Orderss[] = [
    {
      id: "#SPK1234",
      items: 4,
      status: "Paid",
      amount: "$150.00",
      date: "2024-08-27",
      avatars: [
        { src: "../../assets/images/ecommerce/jpg/1.jpg" },
        { src: "../../assets/images/ecommerce/jpg/2.jpg" },
      ],
      extraAvatars: 2,
      statusColor:'success',
      icon:'ri-check-line'
    },
    {
      id: "#SPK7432",
      items: 3,
      status: "Pending",
      amount: "$75.00",
      date: "2024-08-26",
      statusColor:'warning',
      avatars: [
        { src: "../../assets/images/ecommerce/jpg/3.jpg" },
        { src: "../../assets/images/ecommerce/jpg/4.jpg" },
        { src: "../../assets/images/ecommerce/jpg/5.jpg" },
      ],
      icon:'ri-time-line'
    },
    {
      id: "#SPK3422",
      items: 2,
      status: "Paid",
      amount: "$200.00",
      date: "2024-08-25",
      avatars: [
        { src: "../../assets/images/ecommerce/jpg/6.jpg" },
        { src: "../../assets/images/ecommerce/jpg/2.jpg" },
      ],
      statusColor:'success',
      icon:'ri-check-line'
    },
    {
      id: "#SPK1578",
      items: 1,
      status: "Paid",
      amount: "$120.00",
      date: "2024-08-24",
      avatars: [{ src: "../../assets/images/ecommerce/jpg/5.jpg" }],
      statusColor:'success',
      icon:'ri-check-line'
    },
    {
      id: "#SPK2355",
      items: 5,
      status: "Failed",
      amount: "$90.00",
      date: "2024-08-23",
      avatars: [
        { src: "../../assets/images/ecommerce/jpg/1.jpg" },
        { src: "../../assets/images/ecommerce/jpg/4.jpg" },
      ],
      extraAvatars: 3,
      statusColor:'danger',
      icon:'ri-close-line'
    },
    {
      id: "#SPK1643",
      items: 1,
      status: "Paid",
      amount: "$249.00",
      date: "2024-08-16",
      avatars: [
        { src: "../../assets/images/ecommerce/jpg/6.jpg" },
        { src: "../../assets/images/ecommerce/jpg/2.jpg" },
      ],
      statusColor:'success',
      icon:'ri-check-line'
    },
  ];
    
    
       
