type ContactRow = {
    id: number;
    companyName: string;
    companyLogo: string;
    email: string;
    phone: string;
    employeeBadge: string;
    industry: string;
    personName: string;
    personImage: string;
    score: number;
    badgeColor: string;
  };
 export const CompaniesTable: ContactRow[] = [
    {
      id: 1,
      companyName: "Tech Innovations",
      companyLogo: "../../../assets/images/company-logos/1.png",
      email: "contact@techinnovations.com",
      phone: "(123) 456-7890",
      employeeBadge: "200+ employees",
      industry: "Technology",
      personName: "John Doe",
      personImage: "../../../assets/images/faces/14.jpg",
      score: 150,
      badgeColor: "primary-transparent",
    },
    {
      id: 2,
      companyName: "Creative Solutions",
      companyLogo: "../../../assets/images/company-logos/3.png",
      email: "info@creativesolutions.com",
      phone: "(987) 654-3210",
      employeeBadge: "50-100 employees",
      industry: "Marketing",
      personName: "Jane Smith",
      personImage: "../../../assets/images/faces/2.jpg",
      score: 75,
      badgeColor: "danger-transparent",
    },
    {
      id: 3,
      companyName: "Future Enterprises",
      companyLogo: "../../../assets/images/company-logos/4.png",
      email: "sales@futureenterprises.com",
      phone: "(555) 123-4567",
      employeeBadge: "(555) 123-4567",
      industry: "E-Commerce",
      personName: "Emily Johnson",
      personImage: "../../../assets/images/faces/4.jpg",
      score: 120,
      badgeColor: "success-transparent",
    },
    {
      id: 4,
      companyName: "Innovate Global",
      companyLogo: "../../../assets/images/company-logos/5.png",
      email: "hello@innovateglobal.com",
      phone: "(333) 777-8888",
      employeeBadge: "500+ employees",
      industry: "Manufacturing",
      personName: "Michael Brown",
      personImage: "../../../assets/images/faces/11.jpg",
      score: 200,
      badgeColor: "light text-default",
    },
    {
      id: 5,
      companyName: "DesignWorks",
      companyLogo: "../../../assets/images/company-logos/6.png",
      email: "contact@designworks.com",
      phone: "(222) 333-4444",
      employeeBadge: "20-50 employees",
      industry: "Design",
      personName: "Sara White",
      personImage: "../../../assets/images/faces/8.jpg",
      score: 35,
      badgeColor: "pink-transparent",
    },
    {
        id: 6,
        companyName: "GreenTech",
        companyLogo: "../../../assets/images/company-logos/7.png",
        email: "support@greentech.com",
        phone: "support@greentech.com",
        employeeBadge: "50-100 employees",
        industry: "Renewable Energy",
        personName: "David Lee",
        personImage: "../../../assets/images/faces/13.jpg",
        score: 80,
        badgeColor: "danger-transparent",
      },
      {
        id: 7,
        companyName: "Tech Pros",
        companyLogo: "../../../assets/images/company-logos/8.png",
        email: "info@techpros.com",
        phone: "(888) 999-0000",
        employeeBadge: "100-500 employees",
        industry: "IT Services",
        personName: "Olivia Green",
        personImage: "../../../assets/images/faces/5.jpg",
        score: 65,
        badgeColor: "primary-transparent",
      },
      {
        id: 8,
        companyName: "Innovators Inc",
        companyLogo: "../../../assets/images/company-logos/9.png",
        email: "contact@innovatorsinc.com",
        phone: "(777) 888-9999",
        employeeBadge: "200+ employees",
        industry: "Consulting",
        personName: "Liam Turner",
        personImage: "../../../assets/images/faces/9.jpg",
        score: 110,
        badgeColor: "warning-transparent",
      },
      {
        id: 9,
        companyName: "Future Vision",
        companyLogo: "../../../assets/images/company-logos/10.png",
        email: "info@futurevision.com",
        phone: "(555) 111-2222",
        employeeBadge: "10-20 employees",
        industry: "Media",
        personName: "Mia Martinez",
        personImage: "../../../assets/images/faces/1.jpg",
        score: 50,
        badgeColor: "success-transparent",
      },
      {
        id: 10,
        companyName: "Green Future",
        companyLogo: "../../../assets/images/company-logos/2.png",
        email: "support@greenfuture.com",
        phone: "(444) 222-3333",
        employeeBadge: "100-500 employees",
        industry: "Sustainable Tech",
        personName: "Noah Harris",
        personImage: "../../../assets/images/faces/10.jpg",
        score: 130,
        badgeColor: "light text-default",
      }
  ];

  interface selectdata {
    value: string;
    label: string;
  }
  export const Selectdata: selectdata[] = [
    { value: 'Company Size', label: 'Company Size' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Small Business', label: 'Small Business' },
    { value: 'Micro Business', label: 'Micro Business' },
    { value: 'Startup', label: 'Startup' },
    { value: 'Large Enterprise', label: 'Large Enterprise' },
    { value: 'Medium Size', label: 'Medium Size' },
  ];
  
  export const Selectdatas: selectdata[] = [
    { value: 'Select Insustry', label: 'Select Insustry' },
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Telecommunications', label: 'Telecommunications' },
    { value: 'Logistics', label: 'Logistics' },
    { value: 'Professional Services', label: 'Professional Services' },
    { value: 'Education', label: 'Education' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Healthcare', label: 'Healthcare' }
  ];