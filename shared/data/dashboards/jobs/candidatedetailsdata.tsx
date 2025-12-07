interface Project {
    id: number;
    title: string;
    description: string;
    logoSrc: string;
    assignedDate: string;
    status: string;
    dueDate: string;
  };
  
export const ProjectsCandidate: Project[] = [
    {
      id: 1,
      title: "Weather Forecast Web App",
      description: "A weather forecasting application using React and OpenWeatherMap API.",
      logoSrc: "../../../assets/images/company-logos/1.png",
      assignedDate: "January 10, 2025",
      status: "Completed",
      dueDate: "June 15, 2025",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Developed a full-stack e-commerce site using Node.js and MongoDB.",
      logoSrc: "../../../assets/images/company-logos/10.png",
      assignedDate: "March 1, 2025",
      status: "Completed",
      dueDate: "September 30, 2025",
    },
];

interface Certification {
    title: string;
    issuer: string;
    year: string;
  };
  
export const Certifications: Certification[] = [
    {
      title: "Certified JavaScript Developer",
      issuer: "Code Academy",
      year: "2015",
    },
    {
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      year: "2017",
    },
    {
      title: "Certified Full-Stack Web Developer",
      issuer: "Code Academy",
      year: "2023",
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Web Services (AWS)",
      year: "2024",
    },
];

interface Preference {
    label: string;
    value: string;
  };
  
export const Preferences: Preference[] = [
    { label: "Preferred Job Type", value: "Full-Time" },
    { label: "Preferred Salary", value: "$80,000 - $100,000 per year" },
    { label: "Availability", value: "Immediate" },
    { label: "Preferred Location", value: "Remote or New York" },
];

interface PersonalInfo {
    label: string;
    value: string;
    icon: string;
  };
  
export const PersonalInfoList: PersonalInfo[] = [
    { label: 'Email', value: 'johndoe@example.com', icon: 'ti-mail' },
    { label: 'Phone', value: '+1 234 567 8901', icon: 'ti-phone' },
    { label: 'Gender', value: 'Male', icon: 'ti-gender-female' },
    { label: 'Date of Birth', value: 'January 15, 1990', icon: 'ti-cake' },
    { label: 'Nationality', value: 'American', icon: 'ti-flag' },
    { label: 'Languages Known', value: 'English, Spanish', icon: 'ti-language' },
    { label: 'Address', value: '1234 Elm Street, New York, 10001, United States', icon: 'ti-map-pin' },
];

interface Skill {
    name: string;
    progress: number;
    color: string;
  };
  
export const Skills: Skill[] = [
    { name: 'JavaScript', progress: 80, color: 'primary' },
    { name: 'Python', progress: 64, color: 'warning' },
    { name: 'React', progress: 53, color: 'success' },
    { name: 'Node.js', progress: 90, color: 'info' },
    { name: 'Mongo DB', progress: 35, color: 'danger' },
    { name: 'My SQL', progress: 70, color: 'secondary' },
];

interface SocialLink {
    href: string;
    iconClass: string;
    buttonClass: string;
    title: string;
  };
  
export const SocialLinks: SocialLink[] = [
    {
      href: 'javascript:void(0);',
      iconClass: 'ti ti-brand-dribbble',
      buttonClass: 'btn-pink',
      title: 'Dribbble',
    },
    {
      href: 'javascript:void(0);',
      iconClass: 'ti ti-brand-github',
      buttonClass: 'btn-github',
      title: 'Github',
    },
    {
      href: 'javascript:void(0);',
      iconClass: 'ti ti-brand-behance',
      buttonClass: 'btn-primary',
      title: 'Behance',
    },
    {
      href: 'javascript:void(0);',
      iconClass: 'ti ti-world',
      buttonClass: 'btn-success',
      title: 'Web',
    },
    {
      href: 'javascript:void(0);',
      iconClass: 'ti ti-brand-pinterest',
      buttonClass: 'btn-danger',
      title: 'Pinterest',
    },
  ];