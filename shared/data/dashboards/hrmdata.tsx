
interface CardData {
    title: string;
    value: string;
    iconColor: string;
    iconClass: string;
    percent: string;
    year: string;
    svgIcon: React.ReactNode;
    svgColor: string;
    cardClass:string;
}

export const Hrmcards: CardData[] = [
        {
            title: "Total Employees",
            value: "12,235",
            iconColor: "success",
            iconClass: "ti ti-arrow-up",
            percent: " 3.21%",
            year: "This Year",
            svgIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <g><rect fill="none" height="24" width="24" /></g>
                    <g><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5S9.83,15,9,15s-1.5-0.67-1.5-1.5S8.17,12,9,12z M12,18H6v-0.75c0-1,2-1.5,3-1.5 s3,0.5,3,1.5V18z M13,9h-2V4h2V9z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4V13.5z" />
                    </g>
                </svg>
            ),
            svgColor: "primary",
            cardClass:'dashboard-main-card border-0 shadow-none border-lg-end border-bottom mb-0 rounded-0'
        },
        {
            title: "New Employees",
            value: "10,784",
            iconColor: "danger",
            iconClass: "ti ti-arrow-down",
            percent: " 1.86%",
            year: "This Year",
            svgIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ),
            svgColor: "secondary",
            cardClass:'dashboard-main-card border-0 shadow-none border-bottom mb-0 rounded-0'
        },
        {
            title: "Total Job Applicants",
            value: "2,235",
            iconColor: "success",
            iconClass: "ti ti-arrow-up",
            percent: " 3.09%",
            year: "This Year",
            svgIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none" />
                    <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" />
                </svg>
            ),
            svgColor: "success",
            cardClass:'dashboard-main-card border-0 shadow-none border-lg-end mb-0 rounded-0'
        },
        {
            title: "Resigned Employees",
            value: "1,986",
            iconColor: "success",
            iconClass: "ti ti-arrow-up",
            percent: " 0.97%",
            year: "This Year",
            svgIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <g><rect fill="none" height="24" width="24" /></g>
                    <g><path d="M14,8c0-2.21-1.79-4-4-4S6,5.79,6,8s1.79,4,4,4S14,10.21,14,8z M17,10v2h6v-2H17z M2,18v2h16v-2c0-2.66-5.33-4-8-4 S2,15.34,2,18z" /></g>
                </svg>
            ),
            svgColor: "warning",
            cardClass:'dashboard-main-card border-0 shadow-none mb-0 rounded-0'
        }
]

//Candidate Statistics
export const CandidateSeries = [
    {
      name: "Candidates Hired",
      data: [13, 23, 20, 25, 10, 13, 13, 15, 13, 23, 20, 25],
      type: "column",
    },
    {
      name: "Received Responses",
      data: [20, 30, 25, 50, 25, 30, 20, 35, 20, 30, 25, 50],
      type: "column",
    },
  ]
export const CandidateOptions = {
    chart: {
        type: "line",
        height: 320,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
        stacked: true,
      },
      grid: {
        show: true,
        borderColor: "rgba(119, 119, 142, 0.1)",
        strokeDashArray: 4,
      },
      colors: ["var(--primary-color)", "var(--primary02)"],
      stroke: {
        curve: 'smooth',
        width: ['0', '0'],
        dashArray: ['0', '0']
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: "3",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
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
      legend: {
        show: true,
        position: "bottom",
        offsetX: 0,
        offsetY: 10,
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
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
}

//Attendance Overview
export const AttendanceSeries = [1754, 878, 634, 470]
export const AttendanceOptions = {
    labels: ["Present", "Late", "Permission", "Absent"],
    chart: {
      height: 260,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: "#fff",
      width: 4,
      dashArray: 0,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        expandOnClick: false,
        donut: {
          size: '80%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '20px',
              color: '#495057',
              offsetY: -30
            },
            value: {
              show: true,
              fontSize: '15px',
              color: undefined,
              offsetY: -25,
              formatter: function (val: string) {
                return val + "%"
              }
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--default-text-color)',
            }

          }
        }
      }
    },
    grid: {
      padding: {
        bottom: -100
      }
    },
    colors: ["var(--primary-color)", "rgba(50, 212, 132, 1)", "rgba(253, 175, 34, 1)", "rgba(255, 103, 87, 1)"],
}
interface AttendanceItem {
    type: string;
    count: number | string;
    className: string;
  }
export const AttendanceData: AttendanceItem[] = [
    { type: 'Present', count: "1,754", className: 'present' },
    { type: 'Late', count: 878, className: 'late' },
    { type: 'Permission', count: 634, className: 'permission' },
    { type: 'Absent', count: 470, className: 'absent' },
];

//Employees By Department
export const EmployeeSeries = [{
    data: [462, 451, 350, 530, 470, 500, 485],
    name: 'Employees',
  }]
export const EmployeeOptions = {
    chart: {
        type: 'bar',
        height: 367,
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          barHeight: '50%',
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
        categories: ['IT & Development', 'Marketing', 'Operations', 'Finance', 'Sales', 'Customer Service', 'Human Resources'],
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

//Employees List
interface Employee {
    name: string;
    image: string;
    department: string;
    role: string;
    joinDate: string;
    badgeColor: string; 
  }
  
export const Employees: Employee[] = [
      {
        name: 'Sarah Miller',
        image: '../../assets/images/faces/1.jpg',
        department: 'Marketing',
        role: 'Marketing Manager',
        joinDate: 'Apr 20, 2024',
        badgeColor: 'primary',
      },
      {
        name: 'Mark Taylor',
        image: '../../assets/images/faces/12.jpg',
        department: 'IT & Development',
        role: 'Backend Developer',
        joinDate: 'Nov 30, 2022',
        badgeColor: 'warning',
      },
      {
        name: 'Jessica Lee',
        image: '../../assets/images/faces/5.jpg',
        department: 'Operations',
        role: 'Project Manager',
        joinDate: 'Jun 20, 2021',
        badgeColor: 'secondary',
      },
      {
        name: 'David Wilson',
        image: '../../assets/images/faces/15.jpg',
        department: 'IT & Development',
        role: 'Data Scientist',
        joinDate: 'Oct 10, 2020',
        badgeColor: 'info',
      },
      {
        name: 'Lisa Grant',
        image: '../../assets/images/faces/6.jpg',
        department: 'Finance',
        role: 'Finance Analyst',
        joinDate: 'Feb 02, 2022',
        badgeColor: 'success',
      },
      {
        name: 'John Peterson',
        image: '../../assets/images/faces/6.jpg',
        department: 'Sales',
        role: 'Sales Executive',
        joinDate: 'Jul 25, 2022',
        badgeColor: 'success',
      },
];

// Today's Attendance
interface Attendance {
    name: string;
    role: string;
    image: string;
    time: string;
    status: string;
    badgeColor: string;
  }

export const AttendancesToday: Attendance[] = [
      {
        name: 'John Doe',
        role: 'Manager',
        image: '../../assets/images/faces/11.jpg',
        time: '8:48AM',
        status: 'Fullday',
        badgeColor: 'primary',
      },
      {
        name: 'Jane Smith',
        role: 'Developer',
        image: '../../assets/images/faces/8.jpg',
        time: '9:20AM',
        status: 'LateArrived',
        badgeColor: 'danger',
      },
      {
        name: 'Alex Johnson',
        role: 'HR Specialist',
        image: '../../assets/images/faces/12.jpg',
        time: '8:10AM',
        status: 'Fullday',
        badgeColor: 'primary',
      },
      {
        name: 'Sarah Brown',
        role: 'Analyst',
        image: '../../assets/images/faces/5.jpg',
        time: '7:20AM',
        status: 'Early Departure',
        badgeColor: 'warning',
      },
      {
        name: 'Robert White',
        role: 'Designer',
        image: '../../assets/images/faces/10.jpg',
        time: '10:30AM',
        status: 'Fullday',
        badgeColor: 'primary',
      },
];

//Applicant Details
interface Applicant {
    id:string | any;
    application: string;
    name: string;
    role: string;
    image: string;
    dateApplied: string;
    email: string;
    experience: string;
    status: string;
  }
  
export const Applicants: Applicant[] = [
      {
        id:'1',
        application: '#SPT-011',
        name: 'Mayor Kelly',
        role: 'System Administrator',
        image: '../../assets/images/faces/4.jpg',
        dateApplied: '24,Nov 2023',
        email: 'mayorkelly2341@gmail.com',
        experience: '2+ Years',
        status: 'New',
      },
      {
        id:'2',
        application: '#SPT-012',
        name: 'Andrew Garfield',
        role: 'Data and Analytics',
        image: '../../assets/images/faces/15.jpg',
        dateApplied: '13,Dec 2023',
        email: 'andrewgarfield45@gmail.com',
        experience: '3+ Years',
        status: 'Interviewed',
      },
      {
        id:'3',
        application: '#SPT-013',
        name: 'Simon Cowel',
        role: 'UX/UI Design',
        image: '../../assets/images/faces/11.jpg',
        dateApplied: '10,Nov 2023',
        email: 'simoncowel234@gmail.com',
        experience: 'Fresher',
        status: 'Hired',
      },
      {
        id:'4',
        application: '#SPT-014',
        name: 'Mirinda Hers',
        role: 'Database Management',
        image: '../../assets/images/faces/8.jpg',
        dateApplied: '16,Dec 2023',
        email: 'mirindahers@gmail.com',
        experience: '1 Year',
        status: 'Under Review',
      },
      {
        id:'5',
        application: '#SPT-015',
        name: 'Jacob Smith',
        role: 'AI and Machine Learning',
        image: '../../assets/images/faces/9.jpg',
        dateApplied: '22,Dec 2023',
        email: 'jacobsmith@gmail.com',
        experience: '5+ Years',
        status: 'Rejected',
      },
    ];