interface Product {
    id: number;
    brand: string;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    stockStatus: 'In Stock' | 'Limited Stock';
    image: string;
  }
  
export const CartData: Product[] = [
    {
      id: 1,
      brand: 'Adidas',
      name: 'Adidas UltraBoost 2023',
      color: 'Green',
      size: '10 US',
      price: 159.99,
      quantity: 1,
      stockStatus: 'In Stock',
      image: '../../../assets/images/ecommerce/jpg/1.jpg',
    },
    {
      id: 2,
      brand: 'Puma',
      name: 'Puma RS-X Sneakers',
      color: 'Gray',
      size: '8 US',
      price: 119.99,
      quantity: 2,
      stockStatus: 'Limited Stock',
      image: '../../../assets/images/ecommerce/jpg/2.jpg',
    },
    {
      id: 3,
      brand: 'Reebok',
      name: 'Reebok Classic Leather',
      color: 'Blue',
      size: '11 US',
      price: 89.99,
      quantity: 1,
      stockStatus: 'In Stock',
      image: '../../../assets/images/ecommerce/jpg/3.jpg',
    },
    {
      id: 4,
      brand: 'Nike',
      name: 'Nike Air Max 2025 Sneakers',
      color: 'Teal',
      size: '10 US',
      price: 129.99,
      quantity: 1,
      stockStatus: 'In Stock',
      image: '../../../assets/images/ecommerce/jpg/4.jpg',
    },
    {
      id: 5,
      brand: 'Under Armour',
      name: 'Under Armour HOVR Phantom',
      color: 'Neon Green',
      size: '10 US',
      price: 139.99,
      quantity: 2,
      stockStatus: 'In Stock',
      image: '../../../assets/images/ecommerce/jpg/5.jpg',
    }
];

interface PricingItem {
    label: string;
    value: string;
    isDiscount?: boolean;
    isFree?: boolean;
  }
export const PricingSummary: PricingItem[] = [
    {
      label: "Sub Total",
      value: "$929.79",
    },
    {
      label: "Discount (10%)",
      value: "- $92.97",
      isDiscount: true,
    },
    {
      label: "Tax",
      value: "$0.00",
    },
    {
      label: "Shipping",
      value: "Free",
      isFree: true,
    },
    {
      label: "Total",
      value: "$837.79",
    },
  ];