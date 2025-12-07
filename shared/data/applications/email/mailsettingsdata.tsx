
export const LanguageSelect = [
    { label: 'English', value: 'English' },
    { label: 'French', value: 'French' },
    { label: 'Arabic', value: 'Arabic' },
    { label: 'Hindi', value: 'Hindi' },
]

export const CountrySelect = [
    { label: 'Usa', value: 'Usa' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Dubai', value: 'Dubai' },
]

interface Device {
    icon: string;
    name: string;
    locationDate: string;
};

export const Devices: Device[] = [
    {
        icon: 'bi-phone',
        name: 'Mobile-LG-1023',
        locationDate: 'Manchester, UK-Nov 30, 04:45PM',
    },
    {
        icon: 'bi-laptop',
        name: 'Lenovo-1291203',
        locationDate: 'England, UK-Aug 12, 12:25PM',
    },
    {
        icon: 'bi-laptop',
        name: 'Macbook-Suzika',
        locationDate: 'Brightoon, UK-Jul 18, 8:34AM',
    },
    {
        icon: 'bi-pc-display-horizontal',
        name: 'Apple-Desktop',
        locationDate: 'Darlington, UK-Jan 14, 11:14AM',
    },
];

interface MailCategory {
    id: string;
    label: string;
    defaultChecked: boolean;
  };
  
export const MailCategories: MailCategory[] = [
    { id: 'label-all-mails', label: 'All Mails', defaultChecked: true },
    { id: 'label-sent', label: 'Inbox', defaultChecked: true },
    { id: 'label-sent2', label: 'Sent', defaultChecked: true },
    { id: 'label-drafts', label: 'Drafts', defaultChecked: true },
    { id: 'label-spam', label: 'Spam', defaultChecked: true },
    { id: 'label-important', label: 'Important', defaultChecked: true },
    { id: 'label-trash', label: 'Trash', defaultChecked: true },
    { id: 'label-archive', label: 'Archive', defaultChecked: true },
    { id: 'label-starred', label: 'Starred', defaultChecked: true },
];

interface Category {
    id: string;
    label: string;
    defaultChecked: boolean;
  };
  
export const Categories: Category[] = [
    { id: 'label-mail', label: 'Mail', defaultChecked: true },
    { id: 'label-home', label: 'Home', defaultChecked: true },
    { id: 'label-work', label: 'Work', defaultChecked: true },
    { id: 'label-friends', label: 'Friends', defaultChecked: true },
];

export const MaxLimitoptions=[
	{value:"3 Attempts", label:"3 Attempts"},
	{value:"5 Attempts", label:"5 Attempts"},
	{value:"10 Attempts", label:"10 Attempts"},
	{value:"20 Attempts", label:"20 Attempts"},
  
];
export const Accountoptions=[
	{value:"1 Day", label:"1 Day"},
	{value:"1 Hour", label:"1 Hour"},
	{value:"1 Month", label:"1 Month"},
	{value:"1 Year", label:"1 Year"},
  
];

export const Maximumoptions=[
	{value:"10", label:"10"},
	{value:"50", label:"50"},
	{value:"100", label:"100"},
	{value:"200", label:"200"},
  
];