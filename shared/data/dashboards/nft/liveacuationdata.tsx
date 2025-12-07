
interface NftItem {
    image: string;
    title: string;
    author: string;
    price: string;
  }
  
export const LiveList: NftItem[] = [
    {
      image: "../../../assets/images/nft-images/36.png",
      title: "Blade of the Future",
      author: "Kairo Tetsuo",
      price: "10 ETH",
    },
    {
      image: "../../../assets/images/nft-images/38.png",
      title: "Rebels of the Neon Streets",
      author: "Aiko Nakamura",
      price: "5 ETH",
    },
    {
      image: "../../../assets/images/nft-images/40.png",
      title: "The Last Cyberpunk Hero",
      author: "Ryo Takahashi",
      price: "7 ETH",
    },
    {
      image: "../../../assets/images/nft-images/41.png",
      title: "Reborn in the Matrix",
      author: "Nova Cypher",
      price: "12 ETH",
    },
    {
      image: "../../../assets/images/nft-images/42.png",
      title: "Neon Rage",
      author: "Zara Kai",
      price: "7 ETH",
    },
    {
      image: "../../../assets/images/nft-images/43.png",
      title: "Dawn of Darkness",
      author: "Maxim Xeno",
      price: "8 ETH",
    },
];

interface NotificationItem {
    image: string;
    title: string;
    time: string;
    content: string;
  }
export const NotificationsLive: NotificationItem[] = [
    {
      image: "../../../assets/images/nft-images/31.png",
      title: 'DreamSpace',
      time: '24 mins ago',
      content: `Purchsed from you by <a class="text-decoration-underline" href="javascript:void(0);">Mitchell</a> for <span class="text-success fw-medium fs-12">0.57ETH</span>.`,
    },
    {
      image: "../../../assets/images/nft-images/25.png",
      title: 'DreamSpace',
      time: '16 mins ago',
      content: `You started following mark zensberg.`,
    },
    {
      image: "../../../assets/images/nft-images/21.png",
      title: 'Neo Nebulae',
      time: '5 mins ago',
      content: `Showed interest in purchasing <a href="javascript:void(0);" class="fs-12 text-warning fw-medium">NeoNebulae</a>.`,
    },
    {
      image: "../../../assets/images/nft-images/26.png",
      title: 'Neo Nebulae',
      time: '16 mins ago',
      content: `Purchased from <a href="javascript:void(0);" class="text-decoration-underline">CyberCanvas</a> for <span class="fw-medium fs-12 text-pink">1.345ETH</span>.`,
    },
];

interface NftTag {
    text: string;
    className: string;
    active?: boolean;
  }
  
export const AcuationTags: NftTag[] = [
    { text: "Music", className: "nft-tag-primary", active: true },
    { text: "Games", className: "nft-tag-secondary" },
    { text: "Art", className: "nft-tag-info" },
    { text: "Photography", className: "nft-tag-success" },
    { text: "Sport", className: "nft-tag-danger" },
    { text: "Cartoon", className: "nft-tag-purple" },
  ];
  
    
  