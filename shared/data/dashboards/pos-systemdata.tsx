import SpkPosCard from "@/shared/@spk-reusable-components/dashboards-reusable/spk-poscard";

export interface MenuItem {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  category: string;
  outOfStock?: boolean;
}
export const Systemcards: MenuItem[] = [
  {
    id: 1,
    title: "Velvety Tomato Soup",
    image: "../../assets/images/pos-system/16.png",
    price: 14.99,
    originalPrice: 24.99,
    category: "Soups"
  },
  {
    id: 2,
    title: "Crispy Garden Medley",
    image: "../../assets/images/pos-system/17.png",
    price: 8.49,
    originalPrice: 18.49,
    category: "Salads",
    outOfStock: true
  },
  {
    id: 3,
    title: "Frosty Dream Parfait",
    image: "../../assets/images/pos-system/19.png",
    price: 6.99,
    originalPrice: 12.99,
    category: "Desserts"
  },
  {
    id: 4,
    title: "Zesty Caesar",
    image: "../../assets/images/pos-system/18.png",
    price: 6.99,
    originalPrice: 14.99,
    category: "Salads"
  },
  {
    id: 5,
    title: "Citrus Breeze",
    image: "../../assets/images/pos-system/11.png",
    price: 4.99,
    originalPrice: 6.99,
    category: "Beverages"
  },
  {
    id: 6,
    title: "Creamy Corn Bisque",
    image: "../../assets/images/pos-system/15.png",
    price: 5.49,
    originalPrice: 12.49,
    category: "Soups"
  },
  {
    id: 7,
    title: "Cheddar Poppers",
    image: "../../assets/images/pos-system/8.png",
    price: 7.29,
    originalPrice: 14.99,
    category: "Appetizers"
  },
  {
    id: 8,
    title: "Frosty Dream Parfait",
    image: "../../assets/images/pos-system/13.png",
    price: 6.99,
    originalPrice: 9.99,
    category: "Desserts"
  },
  {
    id: 9,
    title: "Classic Prans Parmesan",
    image: "../../assets/images/pos-system/10.png",
    price: 14.99,
    originalPrice: 24.99,
    category: "Main-Course"
  },
  {
    id: 10,
    title: "Sugar Rush Pie",
    image: "../../assets/images/pos-system/14.png",
    price: 5.99,
    originalPrice: 11.99,
    category: "Desserts"
  },
  {
    id: 11,
    title: "Golden Crisps",
    image: "../../assets/images/pos-system/7.png",
    price: 5.99,
    originalPrice: 7.99,
    category: "Appetizers"
  },
  {
    id: 12,
    title: "GrillMaster Steak",
    image: "../../assets/images/pos-system/9.png",
    price: 18.99,
    originalPrice: 27.99,
    category: "Main-Course"
  }
];

export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}
export const CartItems: CartItem[] = [
  {
    id: 1,
    title: "Frosty Dream Parfait",
    image: "../../assets/images/pos-system/13.png",
    price: 6.99,
    quantity: 1
  },
  {
    id: 2,
    title: "Zesty Caesar",
    image: "../../assets/images/pos-system/18.png",
    price: 6.99,
    quantity: 1
  },
  {
    id: 3,
    title: "GrillMaster Steak",
    image: "../../assets/images/pos-system/9.png",
    price: 18.99,
    quantity: 1
  },
  {
    id: 4,
    title: "Berry Fusion",
    image: "../../assets/images/pos-system/12.png",
    price: 4.99,
    quantity: 1
  }
];

// OrderCardData.ts (or inside the same component file)

export interface OrderCardData {
  id: string;
  title: string;
  items: string;
  time: string;
  badge: string;
  color: string;
}

const Orders: OrderCardData[] = [
  {
    id: "#SPK12",
    title: "Jhon Doe",
    items: "2 Items",
    time: "12 Mins ago",
    badge: "Completed",
    color: "primary",
  },
  {
    id: "#SPK13",
    title: "Alex Turner",
    items: "3 Items",
    time: "15 Mins ago",
    badge: "Processing",
    color: "secondary",
  },
  {
    id: "#SPK14",
    title: "Rachel Adams",
    items: "1 Item",
    time: "4 Mins ago",
    badge: "Ready for Pickup",
    color: "warning",
  },
  {
    id: "#SPK15",
    title: "James Hawkins",
    items: "1 Item",
    time: "18 Mins ago",
    badge: "Out for Delivery",
    color: "success",
  },
  {
    id: "#SPK16",
    title: "Olivia Reed",
    items: "4 Items",
    time: "2 Hrs ago",
    badge: "Cancelled",
    color: "danger",
  },
  {
    id: "#SPK17",
    title: "Michael Harris",
    items: "5 Items",
    time: "8 Mins ago",
    badge: "Pending",
    color: "info",
  },
  {
    id: "#SPK18",
    title: "Sophia Miller",
    items: "1 Item",
    time: "10 Mins ago",
    badge: "Processing",
    color: "pink",
  },
];

export const PosCardsData = Orders.map((idx, index) => (

  <SpkPosCard key={index} pos={idx} />

))