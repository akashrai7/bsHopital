import Image from "next/image";
import { JSX } from "react";

type Product = {
    id: string;
    brand: string;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
export const DetailsTable: Product[] = [
    {
      id: 'ADI-UB-2023',
      brand: 'Adidas',
      name: 'Adidas UltraBoost 2023',
      color: 'Green',
      size: '10 US',
      price: 159.99,
      quantity: 1,
      imageUrl: '../../../assets/images/ecommerce/jpg/1.jpg',
    },
    {
      id: 'NIKE-AMX-2025',
      brand: 'Nike',
      name: 'Nike Air Max 2025 Sneakers',
      color: 'Teal',
      size: '10 US',
      price: 129.99,
      quantity: 2,
      imageUrl: '../../../assets/images/ecommerce/jpg/4.jpg',
    },
];

//Order Activity
type OrderStatus = {
    title: string;
    description: string;
    date: string;
    time: string;
    isVisible: boolean;
  };
  
export const OrderTimeline: OrderStatus[] = [
    {
      title: 'Order Placed',
      description: 'Order successfully placed and awaiting processing.',
      date: 'March 15, 2025',
      time: '10:30 AM',
      isVisible: true,
    },
    {
      title: 'Payment Confirmed',
      description: 'Payment successfully processed via Visa Card.',
      date: 'March 15, 2025',
      time: '11:15 AM',
      isVisible: true,
    },
    {
      title: 'Order Processed',
      description: 'The order has been processed and is ready for packing.',
      date: 'March 15, 2025',
      time: '12:00 PM',
      isVisible: true,
    },
    {
      title: 'Shipped',
      description: 'Order dispatched from the warehouse and handed over to the carrier.',
      date: 'March 16, 2025',
      time: '8:00 AM',
      isVisible: true,
    },
    {
      title: 'Out for Delivery',
      description: 'The package is on its way to the delivery address.',
      date: 'March 17, 2025',
      time: '9:00 AM',
      isVisible: false,
    },
    {
      title: 'Delivered',
      description: 'The order was successfully delivered to the customer’s address.',
      date: 'March 17, 2025',
      time: '3:45 PM',
      isVisible: false,
    },
];

//Customer Details
type UserInfo = {
    label: string;
    icon: string;
    value: string | JSX.Element;
  };
  
export const UserInfoList: UserInfo[] = [
    {
      label: 'Full Name',
      icon: 'ri-user-line',
      value: (
        <div className="d-flex align-items-center gap-2">
          <div className="lh-1">
            <span className="avatar avatar-sm avatar-rounded">
              <Image width={28} height={28} src="../../../assets/images/faces/12.jpg" alt="Tom Phillip" />
            </span>
          </div>
          <div className="fw-medium">Tom Phillip</div>
        </div>
      ),
    },
    {
      label: 'Email',
      icon: 'ri-mail-line',
      value: <span className="fw-medium">tomphillip23@gmail.com</span>,
    },
    {
      label: 'Phone',
      icon: 'ri-phone-line',
      value: <span className="fw-medium text-end">(555) 123-4567</span>,
    },
  ];

  type PaymentDetail = {
    label: string;
    value: string | JSX.Element;
  };
  
export const PaymentDetails: PaymentDetail[] = [
    { label: 'Order ID', value: '#SPK202501' },
    { label: 'Payment Method', value: 'Credit Card' },
    { label: 'Card Number', value: '**** **** **** 1234' },
    {
      label: 'Payment Status',
      value: <span className="badge bg-success-transparent fs-13">Completed</span>,
    },
    { label: 'Amount Paid', value: '$389.99' },
    { label: 'Transaction ID', value: '5678-ABC12345XYZ' },
    { label: 'Payment Date', value: 'March 15, 2025, 11:45 AM' },
  ];