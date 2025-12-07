type Contact = {
    id: number;
    name: string;
    lastContacted: string;
    score: number;
    email: string;
    company: string;
    companyLogo: string;
    phone: string;
    source: string;
    tags: { label: string; color: string }[];
    image: string;
  };
export const Contactstable: Contact[] = [
    {
      id: 1,
      name: "Jane Smith",
      lastContacted: "2025-03-19 - 02:15 PM",
      score: 70,
      email: "jane.smith@example.com",
      company: "XYZ Ltd",
      companyLogo: "../../../assets/images/company-logos/1.png",
      phone: "(987) 654-3210",
      source: "Referral",
      tags: [
        { label: "New Lead", color: "primary-transparent" },
        { label: "VIP", color: "primary-transparent" }
      ],
      image: "../../../assets/images/faces/4.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      lastContacted: "2025-03-20 - 10:30 AM",
      score: 85,
      email: "john.doe@example.com",
      company: "ABC Corp",
      companyLogo: "../../../assets/images/company-logos/3.png",
      phone: "(123) 456-7890",
      source: "Web",
      tags: [
        { label: "Interested", color: "primary-transparent" },
        { label: "VIP", color: "danger-transparent" }
      ],
      image: "../../../assets/images/faces/12.jpg"
    },
    {
      id: 3,
      name: "Emily Johnson",
      lastContacted: "2025-03-18 - 09:45 AM",
      score: 90,
      email: "emily.johnson@example.com",
      company: "FutureTech",
      companyLogo: "../../../assets/images/company-logos/4.png",
      phone: "(555) 123-4567",
      source: "Social Media",
      tags: [
        { label: "High Priority", color: "success-transparent" },
        { label: "VIP", color: "success-transparent" }
      ],
      image: "../../../assets/images/faces/14.jpg"
    },
    {
      id: 4,
      name: "Michael Brown",
      lastContacted: "2025-03-17 - 03:00 PM",
      score: 50,
      email: "michael.brown@example.com",
      company: "Innovate Solutions",
      companyLogo: "../../../assets/images/company-logos/5.png",
      phone: "(333) 777-8888",
      source: "Web",
      tags: [
        { label: "Interested", color: "light text-default" },
      ],
      image: "../../../assets/images/faces/14.jpg"
    },
    {
      id: 5,
      name: "Sara White",
      lastContacted: "2025-03-16 - 11:20 AM",
      score: 60,
      email: "sara.white@example.com",
      company: "DesignWorks",
      companyLogo: "../../../assets/images/company-logos/6.png",
      phone: "(222) 333-4444",
      source: "Event",
      tags: [
        { label: "Potential", color: "pink-transparent" },
      ],
      image: "../../../assets/images/faces/8.jpg"
    },
    {
        id: 6,
        name: "David Lee",
        lastContacted: "2025-03-15 - 08:05 AM",
        score: 80,
        email: "david.lee@example.com",
        company: "Tech Innovations",
        companyLogo: "../../../assets/images/company-logos/7.png",
        phone: "(444) 555-6666",
        source: "Referral",
        tags: [
          { label: "Interested", color: "danger-transparent" },
          { label: "VIP", color: "info-transparent" }
        ],
        image: "../../../assets/images/faces/9.jpg"
      },
      {
        id: 7,
        name: "Olivia Green",
        lastContacted: "2025-03-14 - 12:30 PM",
        score: 95,
        email: "olivia.green@example.com",
        company: "GreenTech",
        companyLogo: "../../../assets/images/company-logos/8.png",
        phone: "(555) 777-8888",
        source: "Web",
        tags: [
          { label: "High Priority", color: "warning-transparent" },
          { label: "New Laed", color: "purple-transparent" }
        ],
        image: "../../../assets/images/faces/15.jpg"
      },
      {
        id: 8,
        name: "Liam Turner",
        lastContacted: "2025-03-13 - 05:45 PM",
        score: 65,
        email: "liam.turner@example.com",
        company: "Innovators Inc",
        companyLogo: "../../../assets/images/company-logos/9.png",
        phone: "(888) 999-0000",
        source: "Event",
        tags: [
          { label: "Interested", color: "success-transparent" },
        ],
        image: "../../../assets/images/faces/1.jpg"
      },
      {
        id: 9,
        name: "Mia Martinez",
        lastContacted: "2025-03-12 - 10:00 AM",
        score: 70,
        email: "mia.martinez@example.com",
        company: "Creativa Solutions",
        companyLogo: "../../../assets/images/company-logos/10.png",
        phone: "(777) 888-9999",
        source: "Social Media",
        tags: [
          { label: "New Laed", color: "primary-transparent" },
          { label: "VIP", color: "light text-default" }
        ],
        image: "../../../assets/images/faces/3.jpg"
      },
      {
        id: 10,
        name: "Noah Harris",
        lastContacted: "2025-03-11 - 01:30 PM",
        score: 85,
        email: "noah.harris@example.com",
        company: "GreenFuture",
        companyLogo: "../../../assets/images/company-logos/2.png",
        phone: "(444) 555-6666",
        source: "Referral",
        tags: [
          { label: "High Priority", color: "primary-transparent" },
        ],
        image: "../../../assets/images/faces/9.jpg"
      }
  ];
    

  interface loppdata {
    value: string;
    label: string;
  }
  export const LeadData: loppdata[] = [
    { value: 'Select Tag', label: 'Select Tag' },
    { value: 'New Lead', label: 'New Lead' },
    { value: 'Prospect', label: 'Prospect' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Hot Lead', label: 'Hot Lead' },
    { value: 'Partner', label: 'Partner' },
    { value: 'LostCustomer', label: 'LostCustomer' },
    { value: 'Influencer', label: 'Influencer' },
    { value: 'Subscriber', label: 'Subscriber' }
  ];
  
  export const SourceData: loppdata[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
  ];