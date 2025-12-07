
interface FAQItem {
    id:number;
  title: any;
  content: string;
}

export const Faqs1: FAQItem[] = [
  {
    id:1,
    title: (
        <>
        <i className="ri-information-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
        What is this website about?
        </>
    ),
    content: 'This website provides information, services, and tools related to [your niche].',
  },
  {
    id:2,
    title: (
         <>
         <i className="ri-user-add-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
         How do I create an account?
         </>
    ),
    content: 'Click on the "Sign Up" button, fill in your details, and verify your email.',
  },
  {
    id:3,
    title: (
        <>
        <i className="ri-money-dollar-circle-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
        Is this website free to use?
        </>
    ),
    content: 'Some features are free, while premium features may require a subscription.',
  },
  {
    id:4,
    title: (
        <>
        <i className="ri-headphone-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
        How can I contact support?
        </>
    ),
    content: 'You can reach our support team via the "Contact Us" page or email us at [support email].',
  },
  {
    id:5,
    title: <>
    <i className="ri-shield-check-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
    Is my personal data safe on this website?
    </>,

    content: 'Yes, we use encryption and follow strict security measures to protect your data.',
  },
];

export const Faqs2: FAQItem[] = [
  {
    id: 1,
    title: (
      <>
      <i className="ri-lock-password-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do I reset my password?
      </>
    ),
    content: 'Click on "Forgot Password" on the login page and follow the instructions.',
  },
  {
    id: 2,
    title: (
      <>
      <i className="ri-mail-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Can I change my registered email?
      </>
    ),
    content: "Yes, go to account settings and update your email address.",
  },
  {
    id: 3,
    title: (
      <>
      <i className="ri-mail-send-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Why am I not receiving the verification email?
      </>
    ),
    content: "Check your spam folder or try resending the email from the login page.",
  },
  {
    id: 4,
    title: (
      <>
      <i className="ri-delete-bin-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Can I delete my account permanently?
      </>
    ),
    content: "Yes, you can request account deletion from your account settings.",
  },
  {
    id: 5,
    title: (
      <>
      <i className="ri-user-settings-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do I update my profile information?
      </>
    ),
    content: "Go to your profile page and edit your details as needed.",
  },
];

export const Faqs3: FAQItem[] = [
  {
    id: 1,
    title: (
      <>
      <i className="ri-bank-card-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      What payment methods do you accept?
      </>
    ),
    content: "We accept credit/debit cards, PayPal, and other online payment gateways.",
  },
  {
    id: 2,
    title: (
      <>
      <i className="ri-file-text-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How can I get an invoice for my purchase?
      </>
    ),
    content: 'You can download invoices from the "Billing" section in your account.',
  },
  {
    id: 3,
    title: (
      <>
      <i className="ri-refund-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Do you offer refunds?
      </>
    ),
    content: "Refunds are subject to our refund policy. Please check our terms and conditions.",
  },
  {
    id: 4,
    title: (
      <>
      <i className="ri-shield-check-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Is my payment information secure?
      </>
    ),
    content: "Yes, all transactions are processed securely using encrypted payment gateways.",
  },
  {
    id: 5,
    title: (
      <>
      <i className="ri-close-circle-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Can I cancel my subscription anytime?
      </>
    ),
    content: "Yes, you can cancel your subscription from your account settings.",
  },
];

export const Faqs4: FAQItem[] = [
  {
    id: 1,
    title: (
      <>
      <i className="ri-search-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do I search for specific content on the website?
      </>
    ),
    content: "Use the search bar at the top of the page to find what you need.",
  },
  {
    id: 2,
    title: (
      <>
      <i className="ri-bookmark-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Can I save my favorite content for later?
      </>
    ),
    content: "Yes, you can bookmark or save items to your profile for easy access.",
  },
  {
    id: 3,
    title: (
      <>
      <i className="ri-bug-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do I report a bug or issue?
      </>
    ),
    content: 'You can report bugs via the "Report Issue" form in the help section.',
  },
  {
    id: 4,
    title: (
      <>
      <i className="ri-smartphone-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Does the website support mobile devices?
      </>
    ),
    content: "Yes, the website is fully responsive and works on all devices.",
  },
  {
    id: 5,
    title: (
      <>
      <i className="ri-share-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Can I share website content on social media?
      </>
    ),
    content: "Yes, use the share buttons to post content on your preferred platform.",
  },
];

export const Faqs5: FAQItem[] = [
  {
    id: 1,
    title: (
      <>
      <i className="ri-time-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Why is the website not loading properly?
      </>
    ),
    content: "Try clearing your browser cache or switching to a different browser.",
  },
  {
    id: 2,
    title: (
      <>
      <i className="ri-wifi-off-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      What should I do if I experience slow loading times?
      </>
    ),
    content: "Check your internet connection and try reloading the page.",
  },
  {
    id: 3,
    title: (
      <>
      <i className="ri-notification-2-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do I enable notifications on this website?
      </>
    ),
    content: "Allow notifications when prompted by your browser or enable them in settings.",
  },
  {
    id: 4,
    title: (
      <>
      <i className="ri-apps-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Is there a mobile app for this website?
      </>
    ),
    content: "If available, you can download it from the App Store or Google Play.",
  },
  {
    id: 5,
    title: (
      <>
      <i className="ri-flag-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How can I report inappropriate content?
      </>
    ),
    content: 'Click the "Report" button next to the content or contact support.',
  },
];

export const Faqs6: FAQItem[] = [
  {
    id: 1,
    title: (
      <>
      <i className="ri-shield-keyhole-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do you protect my personal data?
      </>
    ),
    content: "We use encryption, secure servers, and strict access controls to protect your data.",
  },
  {
    id: 2,
    title: (
      <>
      <i className="ri-eye-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Can I control who sees my information?
      </>
    ),
    content: "Yes, you can adjust privacy settings in your account preferences.",
  },
  {
    id: 3,
    title: (
      <>
      <i className="ri-forbid-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      Do you sell my data to third parties?
      </>
    ),
    content: "No, we do not sell or share your personal information without your consent.",
  },
  {
    id: 4,
    title: (
      <>
      <i className="ri-alarm-warning-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      How do I report a security concern?
      </>
    ),
    content: 'Contact our security team via the "Report Security Issue" option in the Help section.',
  },
  {
    id: 5,
    title: (
      <>
      <i className="ri-lock-line fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary"></i>
      What should I do if I suspect unauthorized access to my account?
      </>
    ),
    content: "Change your password immediately and enable two-factor authentication (2FA).",
  },
];




