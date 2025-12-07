import { JSX } from "react";

interface MailMenuItem {
    label: string;
    icon: JSX.Element;
    count?: number;
    isActive?: boolean;
  };
  
export const MailMenuItems: MailMenuItem[] = [
    {
      label: "All Mails",
      count: 5,
      isActive: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <polygon points="224 56 128 144 32 56 224 56" opacity="0.2" />
          <path d="M32,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <polyline points="224 56 128 144 32 56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      label: "Inbox",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M216,72V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208Z" opacity="0.2" />
          <path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <line x1="40" y1="72" x2="216" y2="72" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <line x1="128" y1="104" x2="128" y2="184" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <polyline points="96 152 128 184 160 152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      label: "Sent",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" opacity="0.2" />
          <line x1="144" y1="128" x2="80" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      label: "Drafts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M72,224H56a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polyline points="120 32 152 32 208 88 208 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M48,64V40a8,8,0,0,1,8-8H80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M208,176v40a8,8,0,0,1-8,8h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="48" y1="104" x2="48" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="112" y1="224" x2="152" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
      ),
    },
    {
      label: "Spam",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16" />
          <line x1="128" y1="136" x2="128" y2="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <circle cx="128" cy="172" r="12" />
        </svg>
      ),
    },
    {
      label: "Important",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" opacity="0.2" />
          <path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      label: "Trash",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M26.18,184A16,16,0,0,0,40,208H216a16,16,0,0,0,13.84-24l-88-152a16,16,0,0,0-27.7,0Z" opacity="0.2" />
          <polyline points="152 232 128 208 152 184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <polyline points="194.63 75.19 185.84 107.98 153.06 99.19" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <polyline points="78.96 140.77 70.16 108 37.39 116.77" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M70.16,108l-44,76A16,16,0,0,0,40,208H88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M128,208h88a16,16,0,0,0,13.84-24l-23.14-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <path d="M185.84,108l-44-76a16,16,0,0,0-27.7,0L91,72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
    {
      label: "Archive",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z" opacity="0.2"></path><rect x="24" y="56" width="208" height="40" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
      ),
    },
    {
      label: "Starred",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2" />
          <path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
    },
];

interface TagItem {
    label: string;
    colorClass: string;
  };
export const TagItems: TagItem[] = [
    { label: "Mail", colorClass: "text-primary" },
    { label: "Home", colorClass: "text-danger" },
    { label: "Work", colorClass: "text-success" },
    { label: "Friends", colorClass: "text-info" },
];

//Mail Table
interface MailItem {
    id: string;
    senderName: string;
    senderAvatar: string;
    subject: string;
    content: string;
    time: string;
    starred?: boolean;
    important?: boolean;
    checked?: boolean;
    badge?: {
      text: string;
      className: string;
    };
  };
  
export const Mailstable: MailItem[] = [
    {
      id: "mail1",
      senderName: "Amelia Turner",
      senderAvatar: "../../../assets/images/faces/7.jpg",
      subject: "[Reminder] Client Meeting at 3 PM Today",
      content: "Hi John, just a quick reminder about our meeting with ABC Corp at 3 PM. Let me know if you need any changes. Regards, Sarah.",
      time: "10:15 AM",
      starred: true,
    },
    {
      id: "mail2",
      senderName: "Sarah Smith",
      senderAvatar: "../../../assets/images/faces/6.jpg",
      subject: "Invoice #45678 – Payment Due Soon",
      content: "Dear Sarah, your invoice for February services is attached. Kindly process the payment before the due date. Let me know if you have any questions. Best, Finance Team.",
      time: "09:45 AM",
      checked: true,
    },
    {
      id: "mail3",
      senderName: "David Johnson",
      senderAvatar: "../../../assets/images/faces/14.jpg",
      subject: "Project Alpha – Weekly Update & Next Steps",
      content: "Hi David, please find attached the latest updates on Project Alpha. Let’s connect tomorrow to discuss the next steps. Regards, James.",
      time: "01 Mar",
      starred: true,
      important: true,
      badge: { text: "Personal", className: "bg-primary" },
    },
    {
      id: "mail4",
      senderName: "Emily Carter",
      senderAvatar: "../../../assets/images/faces/4.jpg",
      subject: "HR Policy Changes Effective Next Month",
      content: "Hello Emily, please review the attached HR policy changes regarding annual leaves and remote work. Let us know if you have any concerns. HR Department.",
      time: "01 Mar",
      starred: true,
    },
    {
      id: "mail5",
      senderName: "Mark Wilson",
      senderAvatar: "../../../assets/images/faces/13.jpg",
      subject: "Your Subscription is Expiring",
      content: "Hi Mark, your premium subscription is set to expire on March 5. Click here to renew and continue enjoying premium features.",
      time: "29 Feb",
      badge: { text: "Social", className: "bg-success" },
    },
    {
      id: "mail6",
      senderName: "Olivia Brown",
      senderAvatar: "../../../assets/images/faces/3.jpg",
      subject: "Job Application for Marketing Analyst",
      content: "Dear Olivia, thank you for applying to our company. Your application is under review, and we will get back to you soon. Best regards, HR Team.",
      time: "29 Feb",
      starred: true,
      badge: { text: "Promotion", className: "bg-warning" },
    },
    {
      id: "mail7",
      senderName: "Daniel Lee",
      senderAvatar: "../../../assets/images/faces/12.jpg",
      subject: "Top Industry News & Trends",
      content: "Hello Daniel, this week’s newsletter covers the latest trends in technology and business. Don’t miss out on our expert insights! Read more inside.",
      time: "29 Feb",
    },
    {
      id: "mail8",
      senderName: "Sophia Miller",
      senderAvatar: "../../../assets/images/faces/2.jpg",
      subject: "Unusual Login Attempt Detected",
      content: "Hi Sophia, we detected an unusual login attempt on your account from a new device. If this wasn’t you, please reset your password immediately.",
      time: "29 Feb",
      important: true,
    },
    {
      id: "mail9",
      senderName: "Michael Adams",
      senderAvatar: "../../../assets/images/faces/15.jpg",
      subject: "Your Order #98765 Has Been Shipped!",
      content: "Hi Michael, your order has been dispatched and is expected to arrive within 3-5 business days. Track your order using the link inside.",
      time: "29 Feb",
    },
    {
      id: "mail10",
      senderName: "Emma White",
      senderAvatar: "../../../assets/images/faces/5.jpg",
      subject: "Annual Tech Conference 2025",
      content: "Dear Emma, you’re invited to our exclusive Tech Conference 2025. Join industry leaders to discuss upcoming trends. Reserve your spot today!",
      time: "28 Feb",
      starred: true,
    }
];

interface RecipientOption {
    label: string;
    value: string;
  };
  
export const RecipientOptions: RecipientOption[] = [
    { label: "jay@gmail.com", value: "jay@gmail.com" },
    { label: "kia@gmail.com", value: "kia@gmail.com" },
    { label: "don@gmail.com", value: "don@gmail.com" },
    { label: "kimo@gmail.com", value: "kimo@gmail.com" },
  ];
  


  