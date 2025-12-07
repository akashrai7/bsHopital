import { ReactNode } from "react";

interface Job {
    id: string | any;
    title: string;
    location: string;
    company: string;
    department: string;
    applicants: number;
    interviews: number;
    status: 'Active' | 'Closed';
    employmentType: string;
    postedDate: string;
    svgIcon:ReactNode;
    color:string;
    imgSrc:string;
    svgClass:string;
  };

export const JobsListData: Job[] = [
    {
      id: '1',
      title: 'Software Engineer',
      location: 'New York, NY',
      company: 'Tech Innovations Inc.',
      department: 'Engineering',
      applicants: 25,
      interviews: 5,
      status: 'Active',
      employmentType: 'Full-Time',
      postedDate: 'Feb 15, 2025',
      svgIcon:(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176Z" opacity="0.2"></path><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="144" y1="88" x2="112" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
        </>
      ), 
      color:'success',
      imgSrc:'../../../assets/images/company-logos/1.png',
      svgClass:'primary'
    },
    {
      id: '2',
      title: 'Data Analyst',
      location: 'London, UK',
      company: 'Creative Solutions Ltd.',
      department: 'Analytics',
      applicants: 18,
      interviews: 3,
      status: 'Active',
      employmentType: 'Full-Time',
      postedDate: 'Feb 10, 2025',
      svgIcon:(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="152" y="40" width="56" height="168" opacity="0.2"></rect><polyline points="48 208 48 136 96 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="224" y1="208" x2="32" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><polyline points="96 208 96 88 152 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polyline points="152 208 152 40 208 40 208 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>
        </>
      ), 
      color:'success',
      imgSrc:'../../../assets/images/company-logos/2.png',
      svgClass:'secondary'
    },
    {
      id: '3',
      title: 'Product Manager',
      location: 'San Francisco, CA',
      company: 'GreenTech Solutions',
      department: 'Product',
      applicants: 12,
      interviews: 2,
      status: 'Closed',
      employmentType: 'Full-Time',
      postedDate: 'Jan 30, 2025',
      svgIcon:(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z" opacity="0.2"></path><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
        </>
      ), 
      color:'danger',
      imgSrc:'../../../assets/images/company-logos/3.png',
      svgClass:'warning'
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      location: 'Berlin, Germany',
      company: 'UI/UX Designer',
      department: 'Design',
      applicants: 40,
      interviews: 4,
      status: 'Active',
      employmentType: 'Full-Time',
      postedDate: 'Feb 18, 2025',
      svgIcon:(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M165.36,123.05C192.36,99.43,224,64.81,224,32,191.19,32,156.57,63.64,133,90.64A84.39,84.39,0,0,1,165.36,123.05Z" opacity="0.2"></path><path d="M16,216H92a52,52,0,1,0-52-52C40,200,16,216,16,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M112.41,116.16C131.6,90.29,179.46,32,224,32c0,44.54-58.29,92.4-84.16,111.59" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M133,90.64a84.39,84.39,0,0,1,32.41,32.41" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
        </>
      ), 
      color:'success',
      imgSrc:'../../../assets/images/company-logos/4.png',
      svgClass:'info'
    },
    {
      id: '5',
      title: 'Marketing Specialist',
      location: 'Tokyo, Japan',
      company: 'SmartSolutions Co.',
      department: 'Marketing',
      applicants: 22,
      interviews: 3,
      status: 'Active',
      employmentType: 'Full-Time',
      postedDate: 'Feb 12, 2025',
      svgIcon:(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M160,160h40a40,40,0,0,0,0-80H160Z" opacity="0.2"></path><path d="M160,80V200.67a8,8,0,0,0,3.56,6.65l11,7.33a8,8,0,0,0,12.2-4.72L200,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M40,200a8,8,0,0,0,13.15,6.12C105.55,162.16,160,160,160,160h40a40,40,0,0,0,0-80H160S105.55,77.84,53.15,33.89A8,8,0,0,0,40,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
        </>
      ), 
      color:'success',
      imgSrc:'../../../assets/images/company-logos/5.png',
      svgClass:'success'
    },
    {
        id: '6',
        title: 'HR Manager',
        location: 'Mumbai, India',
        company: 'SoftMinds Technologies',
        department: 'HR',
        applicants: 6,
        interviews: 1,
        status: 'Closed',
        employmentType: 'Full Time',
        postedDate: 'Jan 25, 2025',
        svgIcon:(
          <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="84" cy="108" r="52" opacity="0.2"></circle><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
          </>
        ), 
        color:'danger',
      imgSrc:'../../../assets/images/company-logos/6.png',
      svgClass:'danger'
      },
      {
        id: '7',
        title: 'Full Stack Developer',
        location: 'Singapore',
        company: 'DataFusion Labs',
        department: 'Development',
        applicants: 35,
        interviews: 6,
        status: 'Active',
        employmentType: 'Full Time',
        postedDate: 'Feb 20, 2025',
        svgIcon:(
          <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="192 168 240 128 192 88 64 88 16 128 64 168 192 168" opacity="0.2"></polygon><polyline points="64 88 16 128 64 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polyline points="192 88 240 128 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="160" y1="40" x2="96" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
          </>
        ), 
        color:'success',
      imgSrc:'../../../assets/images/company-logos/7.png',
      svgClass:'teal'
      },
      {
        id: '8',
        title: 'Network Administrator',
        location: 'Toronto, Canada',
        company: 'NextGen Systems',
        department: 'IT',
        applicants: 8,
        interviews: 2,
        status: 'Active',
        employmentType: 'Part Time',
        postedDate: 'Jan 12, 2024',
        svgIcon:(
          <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="104" y="32" width="48" height="48" rx="8" opacity="0.2"></rect><rect x="40" y="168" width="48" height="48" rx="8" opacity="0.2"></rect><rect x="168" y="168" width="48" height="48" rx="8" opacity="0.2"></rect><rect x="104" y="32" width="48" height="48" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><rect x="40" y="168" width="48" height="48" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><rect x="168" y="168" width="48" height="48" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><line x1="128" y1="80" x2="128" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="192" y1="120" x2="192" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="64" y1="168" x2="64" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="24" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
          </>
        ), 
        color:'success',
      imgSrc:'../../../assets/images/company-logos/8.png',
      svgClass:'pink'
      },
      {
        id: '9',
        title: 'Customer Support Lead',
        location: 'Sydney, Australia',
        company: 'Customer Support Lead',
        department: 'Support',
        applicants: 50,
        interviews: 5,
        status: 'Closed',
        employmentType: 'Full-Time',
        postedDate: 'Jan 28, 2025',
        svgIcon:(
          <>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,184a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32Z" opacity="0.2"></path><path d="M192,128a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z" opacity="0.2"></path><path d="M224,200v8a32,32,0,0,1-32,32H136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
          </>
        ), 
        color:'danger',
      imgSrc:'../../../assets/images/company-logos/9.png',
      svgClass:'purple'
      },
      {
        id: '10',
        title: 'Sales Manager',
        location: 'Paris, France',
        company: 'Sales Manager',
        department: 'Sales',
        applicants: 30,
        interviews: 2,
        status: 'Active',
        employmentType: 'Full Time',
        postedDate: 'Feb 11, 2025',
        svgIcon:(
          <>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56Z" opacity="0.2"></path><path d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="180" cy="132" r="12"></circle></svg>
          </>
        ), 
        color:'success',
      imgSrc:'../../../assets/images/company-logos/10.png',
      svgClass:'warning'
      },
  ];