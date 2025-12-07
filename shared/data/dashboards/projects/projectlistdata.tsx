
export interface Project {
    name: string;
    companyLogo: string;
    companyName: string;
    startDate: string;
    endDate: string;
    status: string;
    budget: string;
    team: string[];
    extraTeam: number;
    priority: "High" | "Medium" | "Low";
}

export const projectData: Project[] = [
    {
        name: "Website Redesign",
        companyLogo: "../../../assets/images/company-logos/1.png",
        companyName: "ABC Corp",
        startDate: "2025-01-10",
        endDate: "2025-03-15",
        status: "In Progress",
        budget: "$15,000",
        team: [
            "../../../assets/images/faces/2.jpg",
            "../../../assets/images/faces/8.jpg",
            "../../../assets/images/faces/2.jpg",
            "../../../assets/images/faces/10.jpg",
        ],
        extraTeam: 2,
        priority: "High"
    },
    {
        name: "Mobile App",
        companyLogo: "../../../assets/images/company-logos/2.png",
        companyName: "XYZ Ltd",
        startDate: "2025-02-01",
        endDate: "2025-04-20",
        status: "Completed",
        budget: "$25,000",
        team: [
            "../../../assets/images/faces/12.jpg",
            "../../../assets/images/faces/9.jpg",
            "../../../assets/images/faces/11.jpg",
        ],
        extraTeam: 4,
        priority: "Medium"
    },
    {
        name: "E-commerce Platform",
        companyLogo: "../../../assets/images/company-logos/3.png",
        companyName: "FutureTech",
        startDate: "2025-03-05",
        endDate: "2025-05-30",
        status: "In Progress",
        budget: "$50,000",
        team: [
            "../../../assets/images/faces/5.jpg",
            "../../../assets/images/faces/6.jpg",
        ],
        extraTeam: 1,
        priority: "High"
    },
    {
        name: "CRM System",
        companyLogo: "../../../assets/images/company-logos/4.png",
        companyName: "Innovate Solutions",
        startDate: "2025-01-15",
        endDate: "2025-04-05",
        status: "Delayed",
        budget: "$20,000",
        team: [
            "../../../assets/images/faces/3.jpg",
            "../../../assets/images/faces/9.jpg",
            "../../../assets/images/faces/12.jpg",
            "../../../assets/images/faces/11.jpg",
        ],
        extraTeam: 2,
        priority: "Low"
    },
    {
        name: "Content Management System",
        companyLogo: "../../../assets/images/company-logos/5.png",
        companyName: "DesignWorks",
        startDate: "2025-02-20",
        endDate: "2025-05-01",
        status: "Completed",
        budget: "$18,000",
        team: [
            "../../../assets/images/faces/10.jpg",
            "../../../assets/images/faces/2.jpg",
            "../../../assets/images/faces/1.jpg",
        ],
        extraTeam: 1,
        priority: "Medium"
    },
    {
        name: "Analytics Dashboard",
        companyLogo: "../../../assets/images/company-logos/6.png",
        companyName: "GreenTech",
        startDate: "2025-03-01",
        endDate: "2025-06-15",
        status: "In Progress",
        budget: "$30,000",
        team: [
            "../../../assets/images/faces/7.jpg",
            "../../../assets/images/faces/13.jpg",
        ],
        extraTeam: 0,
        priority: "High"
    },
    {
        name: "AI Integration",
        companyLogo: "../../../assets/images/company-logos/7.png",
        companyName: "Tech Innovations",
        startDate: "2025-03-10",
        endDate: "2025-07-01",
        status: "Not Started",
        budget: "$40,000",
        team: [
            "../../../assets/images/faces/5.jpg",
            "../../../assets/images/faces/14.jpg",
            "../../../assets/images/faces/15.jpg",
        ],
        extraTeam: 2,
        priority: "High"
    },
    {
        name: "SEO Optimization",
        companyLogo: "../../../assets/images/company-logos/8.png",
        companyName: "Creativa Solutions",
        startDate: "2025-01-25",
        endDate: "2025-03-10",
        status: "Completed",
        budget: "$8,000",
        team: [
            "../../../assets/images/faces/13.jpg",
            "../../../assets/images/faces/16.jpg",
        ],
        extraTeam: 2,
        priority: "Medium"
    },
    {
        name: "HR Management System",
        companyLogo: "../../../assets/images/company-logos/9.png",
        companyName: "Innovators Inc",
        startDate: "2025-04-01",
        endDate: "2025-07-01",
        status: "In Progress",
        budget: "$12,000",
        team: [
            "../../../assets/images/faces/1.jpg",
            "../../../assets/images/faces/15.jpg",
            "../../../assets/images/faces/12.jpg",
            "../../../assets/images/faces/8.jpg",
        ],
        extraTeam: 7,
        priority: "Medium"
    },
    {
        name: "Project Management Tool",
        companyLogo: "../../../assets/images/company-logos/10.png",
        companyName: "GreenFuture",
        startDate: "2025-02-10",
        endDate: "2025-02-10",
        status: "Delayed",
        budget: "$22,000",
        team: [
            "../../../assets/images/faces/5.jpg",
            "../../../assets/images/faces/11.jpg",
            "../../../assets/images/faces/13.jpg",
        ],
        extraTeam: 4,
        priority: "Low"
    }
];

export const Projectselectdata = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Date Added', label: 'Date Added' },
    { value: 'Type', label: 'Type' },
    { value: 'A - Z', label: 'A - Z' },
]

export const AvatarImages: string[] = [
    "../../../assets/images/faces/1.jpg",
    "../../../assets/images/faces/2.jpg",
    "../../../assets/images/faces/8.jpg",
    "../../../assets/images/faces/12.jpg",
    "../../../assets/images/faces/10.jpg",
    "../../../assets/images/faces/4.jpg",
    "../../../assets/images/faces/5.jpg",
    "../../../assets/images/faces/13.jpg"
  ];
