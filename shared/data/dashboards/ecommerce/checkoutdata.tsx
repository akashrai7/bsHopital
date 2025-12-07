interface PaymentOption {
    id: string;
    icon: string;
    label: string;
    target: string;
    isActive: boolean;
  }
export const PaymentOptions: PaymentOption[] = [
    {
      id: 'paypal-tab',
      icon: 'bi bi-paypal',
      label: 'PayPal',
      target: '#paypal-tab',
      isActive: true,
    },
    {
      id: 'card-tab',
      icon: 'bi bi-credit-card',
      label: 'Credit Or Debit Card',
      target: '#card-tab',
      isActive: false,
    },
    {
      id: 'netbanking-tab',
      icon: 'bi bi-globe',
      label: 'UPI / Net Banking',
      target: '#netbanking-tab',
      isActive: false,
    },
    {
      id: 'cod-tab',
      icon: 'bi bi-cash-stack',
      label: 'Cash On Delivery',
      target: '#cod-tab',
      isActive: false,
    },
];

interface Product {
    id: number;
    name: string;
    color: string;
    quantity: number;
    price: number;
    imageUrl: string;
  }
export const CheckoutSummary: Product[] = [
    {
      id: 1,
      name: 'Adidas UltraBoost 2023',
      color: 'Green',
      quantity: 2,
      price: 159.99,
      imageUrl: '../../../assets/images/ecommerce/jpg/1.jpg',
    },
    {
      id: 2,
      name: 'Reebok Classic Leather',
      color: 'Blue',
      quantity: 1,
      price: 89.99,
      imageUrl: '../../../assets/images/ecommerce/jpg/2.jpg',
    },
    {
      id: 3,
      name: 'Nike Air Max 2025 Sneakers',
      color: 'Teal Blue',
      quantity: 1,
      price: 129.99,
      imageUrl: '../../../assets/images/ecommerce/jpg/4.jpg',
    },
];

interface SummaryItem {
    label: string;
    value: string;
    isTotal?: boolean;
    isFree?: boolean;
  }
export const SummaryData: SummaryItem[] = [
    { label: 'Sub Total', value: '$929.79' },
    { label: 'Discount (10%)', value: '- $92.97' },
    { label: 'Tax', value: '$0.00' },
    { label: 'Shipping', value: 'Free', isFree: true },
    { label: 'Total', value: '$836.82', isTotal: true },
  ];