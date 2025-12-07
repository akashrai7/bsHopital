import { JSX } from "react";

interface TaskCategory {
    id: number;
    name: string;
    icon: JSX.Element;
    badgeCount?: number;
    active?: boolean;
  }
  
export const TodoCategories: TaskCategory[] = [
    {
      id: 1,
      name: 'All Tasks',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
          <polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
      badgeCount: 55,
      active: true,
    },
    {
      id: 2,
      name: 'Assigned',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <circle cx="128" cy="96" r="64" opacity="0.2" />
          <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Starred',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2" />
          <path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Deleted',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z" opacity="0.2" />
          <line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
];

interface Category {
    id: number;
    name: string;
    iconClass: string;
    textColor: string;
}
  
export const Categories: Category[] = [
    {
      id: 1,
      name: 'Personal',
      iconClass: 'ri-circle-fill fs-8 fw-medium',
      textColor: 'text-primary',
    },
    {
      id: 2,
      name: 'Work',
      iconClass: 'ri-circle-fill fs-8 fw-medium',
      textColor: 'text-secondary',
    },
    {
      id: 3,
      name: 'Health & Fitness',
      iconClass: 'ri-circle-fill fs-8 fw-medium',
      textColor: 'text-warning',
    },
    {
      id: 4,
      name: 'Daily Goals',
      iconClass: 'ri-circle-fill fs-8 fw-medium',
      textColor: 'text-success',
    },
    {
      id: 5,
      name: 'Financial Management',
      iconClass: 'ri-circle-fill fs-8 fw-medium',
      textColor: 'text-danger',
    },
];

interface Todotable {
    id: number;
    title: string;
    assignee: {
        name: string;
        avatar: string;
    };
    priority: 'High' | 'Medium' | 'Low';
    dueDate: string;
    status: 'In Progress' | 'Pending' | 'Completed';
    createdDate: string;
    progress: number;
    priorityColor:string;
    statusColor:string;
}

export const Todotables: Todotable[] = [
    {
        id: 2,
        title: 'Develop Login Page',
        assignee: {
            name: 'Jane Smith',
            avatar: '../../assets/images/faces/4.jpg',
        },
        priority: 'Medium',
        priorityColor:'warning',
        dueDate: '2025-03-15',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-02',
        progress: 20,
    },
    {
        id: 3,
        title: 'Write Documentation',
        assignee: {
            name: 'Sarah Lee',
            avatar: '../../assets/images/faces/6.jpg',
        },
        priority: 'Low',
        priorityColor:'success',
        dueDate: '2025-03-20',
        status: 'Completed',
        statusColor:'primary',
        createdDate: '2025-03-03',
        progress: 100,
    },
    {
        id: 4,
        title: 'Test Payment Gateway',
        assignee: {
            name: 'Michael Brown',
            avatar: '../../assets/images/faces/10.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-18',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-05',
        progress: 40,
    },
    {
        id: 5,
        title: 'Fix UI Bugs',
        assignee: {
            name: 'Emily Clark',
            avatar: '../../assets/images/faces/7.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-12',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-02',
        progress: 10,
    },
    {
        id: 1,
        title: 'Design Homepage',
        assignee: {
            name: 'John Doe',
            avatar: '../../assets/images/faces/12.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-10',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-01',
        progress: 40,
    },
    {
        id: 6,
        title: 'Update Blog Section',
        assignee: {
            name: 'Chris Martin',
            avatar: '../../assets/images/faces/11.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-12',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-02',
        progress: 10,
    },
    {
        id: 7,
        title: 'Set Up Email Campaign',
        assignee: {
            name: 'Olivia White',
            avatar: '../../assets/images/faces/5.jpg',
        },
        priority: 'Medium',
        priorityColor:'warning',
        dueDate: '2025-03-22',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-03',
        progress: 50,
    },
    {
        id: 8,
        title: 'Review SEO Reports',
        assignee: {
            name: 'James Brown',
            avatar: '../../assets/images/faces/15.jpg',
        },
        priority: 'Low',
        priorityColor:'success',
        dueDate: '2025-03-17',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-01',
        progress: 0,
    },
    {
        id: 9,
        title: 'Prepare Client Demo',
        assignee: {
            name: 'Sophia Green',
            avatar: '../../assets/images/faces/8.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-14',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-02',
        progress: 80,
    },
    {
        id: 10,
        title: 'Update User Profiles',
        assignee: {
            name: 'Noah Wilson',
            avatar: '../../assets/images/faces/16.jpg',
        },
        priority: 'Low',
        priorityColor:'success',
        dueDate: '2025-03-28',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-06',
        progress: 0,
    }
];

interface ListType {
    value: string;
    label: string;
  }
  export const Listviewassigneddata: ListType[] = [
    { value: 'Angelina May', label: 'Angelina May' },
    { value: 'Kiara advain', label: 'Kiara advain' },
    { value: 'Hercules Jhon', label: 'Hercules Jhon' },
    { value: 'Mayor Kim', label: 'Mayor Kim' },
  ]
  
  export const Prioritydata: ListType[] = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
  ]
  
  export const Statusdata: ListType[] = [
    { value: 'New', label: 'New' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Inprogress', label: 'Inprogress' },
    { value: 'Pending', label: 'Pending' }
  ]
