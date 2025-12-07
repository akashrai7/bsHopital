import Image from "next/image"

export const NftSwiper = [
    <div className="" id="img-container">
      <Image fill className="img-fluid" src="../../../assets/images/nft-images/14.png" alt="img" />
    </div>,
    <div className=" image-container">
      <Image fill className="img-fluid" src="../../../assets/images/nft-images/13.png" alt="img" />
    </div>,
    <div className=" image-container">
      <Image fill className="img-fluid" src="../../../assets/images/nft-images/12.png" alt="img" />
    </div>,
    <div className=" image-container">
      <Image fill className="img-fluid" src="../../../assets/images/nft-images/10.png" alt="img" />
    </div>
  ]
  
  export const NftSwiperthumb = [
    <Image fill className="img-fluid" src="../../../assets/images/nft-images/14.png" alt="img" />,
    <Image fill className="img-fluid" src="../../../assets/images/nft-images/13.png" alt="img" />,
    <Image fill className="img-fluid" src="../../../assets/images/nft-images/12.png" alt="img" />,
    <Image fill className="img-fluid" src="../../../assets/images/nft-images/10.png" alt="img" />
  ]


interface NFTData {
    id: number;
    name: string;
    address: string;
    price: number;
    time: string;
    image: string;
  };
  
export const NftList: NFTData[] = [
    {
      id: 1,
      name: 'CryptoKing',
      address: '0xC4F25B8A...5623',
      price: 1.7,
      time: 'March 25, 2025, 02:30 PM',
      image: '../../../assets/images/nft-images/5.png',
    },
    {
      id: 2,
      name: 'NinjaBoi',
      address: '0xA1B2C3D4...8901',
      price: 1.6,
      time: 'March 25, 2025, 02:00 PM',
      image: '../../../assets/images/nft-images/7.png',
    },
    {
      id: 3,
      name: 'TheRuler',
      address: '0xE6A7C8D9...2341',
      price: 1.5,
      time: 'March 25, 2025, 01:45 PM',
      image: '../../../assets/images/nft-images/10.png',
    },
    {
      id: 4,
      name: 'BlockMaster',
      address: '0xD3F5A1E6...9872',
      price: 1.4,
      time: 'March 25, 2025, 01:30 PM',
      image: '../../../assets/images/nft-images/12.png',
    },
    {
      id: 5,
      name: 'PixelQueen',
      address: '0xA9D0B7C1...3410',
      price: 1.3,
      time: 'March 25, 2025, 01:00 PM',
      image: '../../../assets/images/nft-images/13.png',
    },
    {
      id: 6,
      name: 'CryptoFanatic',
      address: '0xB3C1A8D0...8921',
      price: 1.2,
      time: 'March 25, 2025, 12:30 PM',
      image: '../../../assets/images/nft-images/14.png',
    },
];

interface NFTDetails {
    label: string;
    value: string | number;
  };
  
export const NftData: NFTDetails[] = [
    {
      label: 'Artist Name',
      value: 'PixelWarrior',
    },
    {
      label: 'NFT ID',
      value: 'NFT-12345',
    },
    {
      label: 'Category/Type',
      value: 'Cyberpunk, Artwork',
    },
    {
      label: 'Number of Bids',
      value: 15,
    },
    {
      label: 'Creation Date',
      value: '2025-03-24',
    },
  ];

interface NFTInfo {
    label: string;
    value: string;
  };
  
export const NftInfo: NFTInfo[] = [
    { label: 'NFT Title', value: '"Cyber Samurai"' },
    { label: 'Edition', value: 'Legendary' },
    { label: 'Material', value: 'Neon Armor' },
    { label: 'Sale Date', value: 'Mar 10, 2024' },
    { label: 'Average Rating', value: '4.8/5' },
    { label: 'Background', value: 'Futuristic Cityscape' },
    { label: 'Eyes', value: 'Cybernetic Glow' },
    { label: 'Country of origin', value: 'USA' },
    { label: 'Description', value: 'A stunning cyberpunk artwork depicting a futuristic samurai with neon armor' },
];
  
interface Rating {
    stars: number;
    percentage: number;
    count: number;
    color:string;
  };
  
export const NftRatings: Rating[] = [
    { stars: 5, percentage: 55, count: 10, color:'success'},
    { stars: 4, percentage: 22, count: 6, color:'success'},
    { stars: 3, percentage: 8, count: 4, color:'success'},
    { stars: 2, percentage: 9, count: 1, color:'warning'},
    { stars: 1, percentage: 6, count: 1, color:'danger'},
  ];