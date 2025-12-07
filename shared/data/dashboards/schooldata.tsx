import { JSX } from "react";

interface SchoolCardData {
    id: number;
    title: string;
    count: string;
    percent: string;
    percentColor: "success" | "danger" | "warning";
    badgeBg: string;
    svgColor: string;
    svgIcon: JSX.Element;
}
export const SchoolCardsData: SchoolCardData[] = [
    {
        id: 1,
        title: "Students",
        count: "28,754",
        percent: "12.75%",
        percentColor: "success",
        badgeBg: "success-transparent",
        svgColor: "primary",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
        ),
    },
    {
        id: 2,
        title: "Teachers",
        count: "385",
        percent: "8.65%",
        percentColor: "success",
        badgeBg: "success-transparent",
        svgColor: "secondary",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5S9.83,15,9,15s-1.5-0.67-1.5-1.5S8.17,12,9,12z M12,18H6v-0.75c0-1,2-1.5,3-1.5 s3,0.5,3,1.5V18z M13,9h-2V4h2V9z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4V13.5z"></path></g></svg>
        ),
    },
    {
        id: 3,
        title: "Awards",
        count: "32",
        percent: "0.75%",
        percentColor: "danger",
        badgeBg: "danger-transparent",
        svgColor: "success",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"></rect><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"></path></svg>
        ),
    },
    {
        id: 4,
        title: "Earning",
        count: "$12,765,233",
        percent: "4.07%",
        percentColor: "success",
        badgeBg: "success-transparent",
        svgColor: "warning",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12.88,17.76V19h-1.75v-1.29 c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61c0-0.96-0.7-1.46-2.28-2.03 c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23l-1.58,0.67 c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z"></path></g></svg>
        ),
    },
];

//School Revenue
export const SchoolSeries = [{
    name: 'This Year',
    type: "column",
    data: [44, 30, 57, 80, 90, 55, 70, 43, 23, 54, 77, 34]
}, {
    name: 'Last Year',
    type: "area",
    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
}]
export const SchoolOptions = {
    chart: {
        height: 320,
        type: 'line',
        stacked: !1,
        toolbar: {
            show: !1
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 0,
            blur: 0,
            color: 'var(--primary-color)',
            opacity: 0.05
        },
    },
    grid: {
        borderColor: '#f2f6f7',
        // borderColor: "#f1f1f1",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'top'
    },
    colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
    fill: {
        type: ['solid', 'gradient'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(255, 73, 205, 0.1)",
                        opacity: 0.1
                    },
                    {
                        offset: 75,
                        color: "rgba(255, 73, 205, 0.1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(255, 73, 205, 0.2)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
    stroke: {
        width: [1.5, 1.5],
        curve: "smooth",
        dashArray: [0, 4]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // legend: {
    //     show: true,
    //     position: 'top'
    // },
    plotOptions: {
        bar: {
            columnWidth: "25%",
            borderRadius: 2
        }
    },
    tooltip: {
        enabled: true,
        theme: "dark",
    }
}

//Events
interface SchoolEvent {
    id: number;
    title: string;
    date: string;
    description: string;
    icon: string;
    bgClass: string;
}
export const SchoolEvents: SchoolEvent[] = [
    {
        id: 1,
        title: "School Timings Update",
        date: "Mar 10, 2025",
        description: "New school hours are now in effect. Check the updated schedule.",
        icon: "ti-alarm",
        bgClass: "bg-primary-transparent",
    },
    {
        id: 2,
        title: "Exam Guidelines",
        date: "March 18, 2025",
        description: "Students must adhere to exam rules and bring valid ID cards.",
        icon: "ti-file-text",
        bgClass: "bg-secondary-transparent",
    },
    {
        id: 3,
        title: "Lost & Found",
        date: "March 20, 2025",
        description: "A wallet was found near the library. Contact the admin office to claim.",
        icon: "ti-search",
        bgClass: "bg-warning-transparent"
    },
    {
        id: 4,
        title: "School Uniform",
        date: "March 25, 2025",
        description: "Students must follow proper uniform guidelines.",
        icon: "ti-hanger-2",
        bgClass: "bg-info-transparent"
    },
    {
        id: 5,
        title: "Canteen Menu Change",
        date: "March 28, 2025",
        description: "The new weekly cafeteria menu is now available.",
        icon: "ti-tools-kitchen",
        bgClass: "bg-success-transparent"
    },
    {
        id: 6,
        title: "Emergency Update",
        date: "March 25, 2025",
        description: "Parents must update emergency contact details in the portal.",
        icon: "ti-phone",
        bgClass: "bg-danger-transparent"
    }
];

//Students Activity
interface StudentActivity {
    id: number;
    name: string;
    date: string;
    description: string;
    avatar?: string; 
    initials?: string;
    badgeClass: string;
    listClass:string;
}
export const StudentActivities: StudentActivity[] = [
    {
        id: 1,
        name: "Aarav Sharma",
        date: "Mar 10, 2025",
        description: "Submitted the Math Assignment on time",
        avatar: "../../assets/images/faces/12.jpg",
        badgeClass: "bg-primary-transparent",
        listClass:""
    },
    {
        id: 2,
        name: "Sophia Patel",
        date: "Mar 11, 2025",
        description: 'Borrowed "Physics Essentials" from the library',
        avatar: "../../assets/images/faces/2.jpg",
        badgeClass: "bg-secondary-transparent",
        listClass:""
    },
    {
        id: 3,
        name: "Ryan Verma",
        date: "Mar 11, 2025",
        description: "Won 1st place in the Inter-School Debate Competition",
        initials: "RV",
        badgeClass: "bg-warning-transparent",
        listClass:""
    },
    {
        id: 4,
        name: "Neha Kapoor",
        date: "Mar 13, 2025",
        description: "Uploaded a new Art Project for review.",
        avatar: "../../assets/images/faces/5.jpg",
        badgeClass: "bg-info-transparent",
        listClass:""
    },
    {
        id: 5,
        name: "Karan Singh",
        date: "Mar 14, 2025",
        description: "Missed the deadline for the Science Project Submission.",
        avatar: "../../assets/images/faces/15.jpg",
        badgeClass: "bg-success-transparent",
        listClass:""
    }
];

//Students Overview
export const SchoolOverviewSeries = [6560, 3354]
export const SchoolOverviewOptions = {
    chart: {
        height: 227,
        type: 'donut',
    },
    colors: ["var(--primary-color)", "rgba(255, 73, 205, 1)"],
    labels: ["Boys", "Girls"],
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -5
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        color: undefined,
                        offsetY: 5,
                        fontWeight: 600,
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total Students',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    stroke: {
        width: 0
    },
    dataLabels: {
        enabled: false,
        dropShadow: {
            enabled: false,
        },
    },
}

//Top Students
interface TopStudent {
    id: number;
    name: string;
    grade: string;
    gpa: number;
    avatar: string;
    achievement: string;
    achievementClass: string;
}
export const TopStudents: TopStudent[] = [
    {
        id: 1,
        name: "Aarav Sharma",
        grade: "Grade-10",
        gpa: 9.8,
        avatar: "../../assets/images/faces/13.jpg",
        achievement: "Science Olympiad Winner",
        achievementClass: "text-primary"
    },
    {
        id: 2,
        name: "Sophia Patel",
        grade: "Grade-9",
        gpa: 9.7,
        avatar: "../../assets/images/faces/5.jpg",
        achievement: "Best Speaker in Debate",
        achievementClass: "text-secondary"
    },
    {
        id: 3,
        name: "Ryan Verma",
        grade: "Grade-12",
        gpa: 9.6,
        avatar: "../../assets/images/faces/3.jpg",
        achievement: "Top Scorer in Math",
        achievementClass: "text-warning"
    },
    {
        id: 4,
        name: "Neha Kapoor",
        grade: "Grade-11",
        gpa: 9.5,
        avatar: "../../assets/images/faces/7.jpg",
        achievement: "Art Competition Champion",
        achievementClass: "text-info"
    },
    {
        id: 5,
        name: "Karan Singh",
        grade: "Grade-8",
        gpa: 9.4,
        avatar: "../../assets/images/faces/14.jpg",
        achievement: "Chess Tournament Winner",
        achievementClass: "text-success"
    }
];

//Students Fee Analytics
interface Payment {
    id: string;
    name: string;
    feeType: string;
    status: 'Paid' | 'Pending' | 'Overdue';
    imageUrl: string;
  }
  
 export const Analyticspayments: Payment[] = [
    {
      id: '#SP01',
      name: 'Aarav Sharma',
      feeType: 'Tuition Fees',
      status: 'Paid',
      imageUrl: '../../assets/images/faces/12.jpg',
    },
    {
      id: '#SP02',
      name: 'Sophia Patel',
      feeType: 'Library Fees',
      status: 'Pending',
      imageUrl: '../../assets/images/faces/4.jpg',
    },
    {
      id: '#SP03',
      name: 'Ryan Verma',
      feeType: 'Exam Fees',
      status: 'Paid',
      imageUrl: '../../assets/images/faces/15.jpg',
    },
    {
      id: '#SP04',
      name: 'Neha Kapoor',
      feeType: 'Sports Fees',
      status: 'Overdue',
      imageUrl: '../../assets/images/faces/8.jpg',
    },
    {
      id: '#SP05',
      name: 'Karan Singh',
      feeType: 'Lab Fees',
      status: 'Paid',
      imageUrl: '../../assets/images/faces/10.jpg',
    },
];

//Student Summary
interface StudentPayment {
    id: string;
    name: string;
    grade: number;
    status: 'Paid' | 'Pending' | 'Overdue';
    currentPerformance: string;
    previousPerformance: string;
    dueDate: string;
    amount: string;
    imageUrl: string;
  }
  
 export const StudentPayments: StudentPayment[] = [
    {
      id: 'SPK01',
      name: 'Aarav Sharma',
      grade: 10,
      status: 'Paid',
      currentPerformance: '95%',
      previousPerformance: '92%',
      dueDate: 'March 1, 2025',
      amount: '₹50,000',
      imageUrl: '../../assets/images/faces/11.jpg',
    },
    {
      id: 'SPK02',
      name: 'Sophia Patel',
      grade: 9,
      status: 'Pending',
      currentPerformance: '88%',
      previousPerformance: '85%',
      dueDate: 'January 15, 2025',
      amount: '₹20,000',
      imageUrl: '../../assets/images/faces/2.jpg',
    },
    {
      id: 'SPK03',
      name: 'Ryan Verma',
      grade: 12,
      status: 'Overdue',
      currentPerformance: '80%',
      previousPerformance: '78%',
      dueDate: 'February 10, 2025',
      amount: '₹40,000',
      imageUrl: '../../assets/images/faces/14.jpg',
    },
    {
      id: 'SPK04',
      name: 'Karan Singh',
      grade: 8,
      status: 'Paid',
      currentPerformance: '70%',
      previousPerformance: '65%',
      dueDate: 'March 5, 2025',
      amount: '₹25,000',
      imageUrl: '../../assets/images/faces/13.jpg',
    },
    {
      id: 'SPK05',
      name: 'Sia Thrills',
      grade: 8,
      status: 'Paid',
      currentPerformance: '40%',
      previousPerformance: '75%',
      dueDate: 'March 8, 2025',
      amount: '₹22,000',
      imageUrl: '../../assets/images/faces/3.jpg',
    },
    {
      id: 'SPK06',
      name: 'Aditi Rao',
      grade: 10,
      status: 'Pending',
      currentPerformance: '85%',
      previousPerformance: '88%',
      dueDate: 'February 25, 2025',
      amount: '₹30,000',
      imageUrl: '../../assets/images/faces/15.jpg',
    },
];

//Attendance Overview
export const SchoolAttendanceSeries = [
    {
        name: "Girls",
        data: [44, 42, 57, 86, 58, 55, 45],
    },
    {
        name: "Boys",
        data: [-34, -22, -37, -56, -21, -35, -34],
    },
]
export const SchoolAttendanceOptions = {
    chart: {
        stacked: true,
        type: "bar",
        height: 365,
        toolbar: {
            show: false,
        },
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(253, 175, 34, 1) "],
    plotOptions: {
        bar: {
            borderRadius: 2,
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "all",
            columnWidth: "25%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        fontFamily: "Mulish",
        markers: {
            width: 10,
            height: 10,
        },
    },
    yaxis: {
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    xaxis: {
        type: "month",
        categories: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            rotate: -90,
        },
    },
}

export const SchoolCards = [
    {
      cardClass: "dashboard-main-card primary school-card",
      bodyClass: "",
      school: {
        title: "Students",
        value: "28,754",
        percent: "12.75%",
        badgeColor: "success",
        svgColor: "primary",
        svgIcon: (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
            </>
        ),
        icon:'up'
      },
    },
    {
      cardClass: "dashboard-main-card secondary school-card flex-wrap",
      bodyClass: "",
      school: {
        title: "Teachers",
        value: "385",
        percent: "8.65%",
        badgeColor: "success",
        svgColor: "secondary",
        svgIcon: (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5S9.83,15,9,15s-1.5-0.67-1.5-1.5S8.17,12,9,12z M12,18H6v-0.75c0-1,2-1.5,3-1.5 s3,0.5,3,1.5V18z M13,9h-2V4h2V9z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4V13.5z"></path></g></svg>
            </>
        ),
        icon:'up'
      },
    },
    {
      cardClass: "dashboard-main-card success school-card flex-wrap",
      bodyClass: "",
      school: {
        title: "Awards",
        value: "32",
        percent: "0.75%",
        badgeColor: "danger",
        svgColor: "success",
        svgIcon: (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"></rect><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"></path></svg>
            </>
        ),
        icon:'down'
      },
    },
    {
      cardClass: "dashboard-main-card warning school-card flex-wrap",
      bodyClass: "",
      school: {
        title: "Earning",
        value: "$12,765,233",
        percent: "4.07%",
        badgeColor: "success",
        svgColor: "warning",
        svgIcon: (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12.88,17.76V19h-1.75v-1.29 c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61c0-0.96-0.7-1.46-2.28-2.03 c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23l-1.58,0.67 c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z"></path></g></svg>
            </>
        ),
        icon:'up'
      },
    },
  ];