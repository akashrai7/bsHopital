interface Leads {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    companyLogo: string;
    companyName: string;
    source: string;
    tags: { label: string; color: string }[];
    avatar: string;
};

export const Leadsdata: Leads[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(123) 456-7890",
        status: "New Lead",
        companyLogo: "../../../assets/images/company-logos/1.png",
        companyName: "ABC Corp",
        source: "Web",
        tags: [
            { label: "Interested", color: "primary-transparent" },
            { label: "VIP", color: "primary-transparent" }
          ],
        avatar: "../../../assets/images/faces/9.jpg"
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "(987) 654-3210",
        status: "Contacted",
        companyLogo: "../../../assets/images/company-logos/3.png",
        companyName: "XYZ Ltd",
        source: "Referral",
        tags: [
            { label: "Follow-up", color: "primary-transparent" },
          ],
        avatar: "../../../assets/images/faces/1.jpg"
    },
    {
        id: "3",
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "(555) 123-4567",
        status: "Qualified",
        companyLogo: "../../../assets/images/company-logos/4.png",
        companyName: "FutureTech",
        source: "Social Media",
        tags: [
            { label: "High Priority", color: "success-transparent" },
            { label: "VIP", color: "primary-transparent" }
          ],
        avatar: "../../../assets/images/faces/2.jpg"
    },
    {
        id: "4",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "(333) 777-8888",
        status: "Negotiation",
        companyLogo: "../../../assets/images/company-logos/5.png",
        companyName: "Innovate Solutions",
        source: "Web",
        tags: [
            { label: "Potential", color: "light text-default" },
          ],
        avatar: "../../../assets/images/faces/10.jpg"
    },
    {
        id: "5",
        name: "Sara White",
        email: "sara.white@example.com",
        phone: "(222) 333-4444",
        status: "Lead Closed",
        companyLogo: "../../../assets/images/company-logos/6.png",
        companyName: "DesignWorks",
        source: "Event",
        tags: [
            { label: "Coverted", color: "pink-transparent" },
          ],
        avatar: "../../../assets/images/faces/3.jpg"
    },
    {
        id: "6",
        name: "David Lee",
        email: "david.lee@example.com",
        phone: "(444) 555-6666",
        status: "Contacted",
        companyLogo: "../../../assets/images/company-logos/7.png",
        companyName: "Tech Innovations",
        source: "Referral",
        tags: [
            { label: "Follow-up", color: "danger-transparent" },
          ],
        avatar: "../../../assets/images/faces/11.jpg"
    },
    {
        id: "7",
        name: "Olivia Green",
        email: "olivia.green@example.com",
        phone: "(555) 777-8888",
        status: "Contacted",
        companyLogo: "../../../assets/images/company-logos/8.png",
        companyName: "GreenTech",
        source: "Web",
        tags: [
            { label: "Interested", color: "warning-transparent" },
            { label: "VIP", color: "purple-transparent" }
          ],
        avatar: "../../../assets/images/faces/4.jpg"
    },
    {
        id: "8",
        name: "Liam Turner",
        email: "liam.turner@example.com",
        phone: "(888) 999-0000",
        status: "Negotiation",
        companyLogo: "../../../assets/images/company-logos/9.png",
        companyName: "Innovators Inc",
        source: "Event",
        tags: [
            { label: "Potential", color: "success-transparent" },
          ],
        avatar: "../../../assets/images/faces/13.jpg"
    },
    {
        id: "9",
        name: "Mia Martinez",
        email: "mia.martinez@example.com",
        phone: "(777) 888-9999",
        status: "Qualified",
        companyLogo: "../../../assets/images/company-logos/10.png",
        companyName: "Creativa Solutions",
        source: "Social Media",
        tags: [
            { label: "VIP", color: "primary-transparent" }
          ],
        avatar: "../../../assets/images/faces/5.jpg"
    },
    {
        id: "10",
        name: "Noah Harris",
        email: "noah.harris@example.com",
        phone: "(444) 222-3333",
        status: "Lead Closed",
        companyLogo: "../../../assets/images/company-logos/2.png",
        companyName: "GreenFuture",
        source: "Referral",
        tags: [
            { label: "Converted", color: "primary-transparent" },
          ],
        avatar: "../../../assets/images/faces/15.jpg"
    }
];


interface Selecttype {
    value: string;
    label: string;
}
export const Tagselect: Selecttype[] = [
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

export const LeadsSelect: Selecttype[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];

interface data2 {
    value: string;
    label: string;
}
export const StatusSelect: data2[] = [
    { value: 'Select Status', label: 'Select Status' },
    { value: 'New', label: 'New' },
    { value: 'Follow-up', label: 'Follow-up' },
    { value: 'Closed', label: 'Closed' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Disqualified', label: 'Disqualified' },
    { value: 'Qualified', label: 'Qualified' }
];