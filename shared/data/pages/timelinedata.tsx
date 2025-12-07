
export const TimelineData = [
  {
    date: "Jan 10, 2024 - 10:00 AM",
    title: "Project Kickoff",
    description:
      "Our team gathered to discuss project goals, scope, and initial milestones. The roadmap was finalized.",
    bgColor: "primary",
  },
  {
    date: "Feb 5, 2024 - 2:30 PM",
    title: "Initial Wireframes Completed",
    description:
      "The UI/UX team completed the first set of wireframes, ensuring a smooth user experience.",
    bgColor: "success",
  },
  {
    date: "Mar 12, 2024 - 11:00 AM",
    title: "Development Phase Begins",
    description:
      "The engineering team started coding, focusing on the core features of the platform.",
    bgColor: "warning",
  },
  {
    date: "May 8, 2024 - 4:45 PM",
    title: "Beta Version Released",
    description:
      "The first beta version was released for internal testing, and feedback collection began.",
    bgColor: "info",
  },
  {
    date: "Jun 20, 2024 - 9:15 AM",
    title: "Security Audit Completed",
    description:
      "A comprehensive security review was conducted to ensure data protection and system stability.",
    bgColor: "danger",
  },
];


export interface ActivityLogItem {
    title: string;
    description: string;
    timestamp: string;
  }
export const ActivityLogs: ActivityLogItem[] = [
  {
    title: "Logged In",
    description: "User successfully logged into the dashboard from a new device.",
    timestamp: "Mar 17, 2025 - 09:15 AM",
  },
  {
    title: "Profile Updated",
    description: "User updated their profile details, including name and contact information.",
    timestamp: "Mar 17, 2025 - 09:45 AM",
  },
  {
    title: "File Uploaded",
    description: "A new document was uploaded to the project folder.",
    timestamp: "Mar 17, 2025 - 10:10 AM",
  },
  {
    title: "Comment Added",
    description: "User posted a comment on the project discussion board.",
    timestamp: "Mar 17, 2025 - 10:30 AM",
  },
  {
    title: "Payment Processed",
    description: "A payment of $99.99 was successfully processed for the premium plan.",
    timestamp: "Mar 17, 2025 - 11:00 AM",
  },
];


interface Activity {
    title: string;
    time: string;
    user: string;
    message: string;
    avatar: string;
  }
  
export const Activities: Activity[] = [
    {
      title: "Logged In",
      time: "08:45 AM",
      user: "John Doe",
      message: "logged into the dashboard",
      avatar: "../../assets/images/faces/10.jpg",
    },
    {
      title: "Profile Updated",
      time: "09:10 AM",
      user: "Emily Johnson",
      message: "updated her profile information",
      avatar: "../../assets/images/faces/1.jpg",
    },
    {
      title: "File Uploaded",
      time: "09:35 AM",
      user: "Michael Brown",
      message: "uploaded a project report file",
      avatar: "../../assets/images/faces/11.jpg",
    },
    {
      title: "Comment Added",
      time: "10:05 AM",
      user: "Sarah Davis",
      message: "commented on a task in the project board",
      avatar: "../../assets/images/faces/2.jpg",
    },
    {
      title: "Payment Processed",
      time: "10:45 AM",
      user: "David Wilson",
      message: "completed the \"UI Redesign\" task",
      avatar: "../../assets/images/faces/14.jpg",
    },
    {
      title: "Task Assigned",
      time: "11:20 AM",
      user: "Olivia Harris",
      message: "processed a payment of $120.00",
      avatar: "../../assets/images/faces/5.jpg",
    },
    {
      title: "Settings Updated",
      time: "12:00 PM",
      user: "James Taylor",
      message: "invited a new team member to the project",
      avatar: "../../assets/images/faces/15.jpg",
    },
    {
      title: "Invitation Sent",
      time: "12:50 PM",
      user: "Lucas Scott",
      message: "modified security settings in the admin panel",
      avatar: "../../assets/images/faces/16.jpg",
    },
  ];
  
  interface ProjectEvent {
    title: string;
    time: string;
    badgeColor: string;
    description: string;
  }
export const ProjectTimeline: ProjectEvent[] = [
    {
      title: "Project Kickoff & Planning",
      time: "Jan 10, 2025 - 09:00 AM",
      badgeColor: "primary-transparent",
      description:
        'Project <span class="fw-medium text-default">"NextGen Web App"</span> was officially created, marking the beginning of development.',
    },
    {
      title: "Requirement Analysis",
      time: "Jan 11, 2025 - 10:30 AM",
      badgeColor: "success-transparent",
      description:
        "The team finalized the project scope, features, and initial milestones.",
    },
    {
      title: "Roadmap Planning",
      time: "Jan 12, 2025 - 02:15 PM",
      badgeColor: "warning-transparent",
      description:
        "A detailed roadmap was outlined, including design, development, and release phases.",
    },
    {
      title: "Team Assignments",
      time: "Jan 14, 2025 - 04:00 PM",
      badgeColor: "secondary-transparent",
      description:
        "Roles and responsibilities were assigned to developers, designers, and project managers.",
    },
    {
      title: "Wireframe & UI Design",
      time: "Jan 18, 2025 - 11:45 AM",
      badgeColor: "info-transparent",
      description:
        "Initial wireframes and UI mockups were created and shared for review.",
    },
    {
      title: "UI/UX Feedback & Revisions",
      time: "Jan 20, 2025 - 03:30 PM",
      badgeColor: "danger-transparent",
      description:
        "Stakeholders provided feedback on the design, leading to refinements.",
    },
  ];
    



