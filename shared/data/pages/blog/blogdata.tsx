interface BlogPost {
    image: string;
    title: string;
    desc: string;
  };
  
export const BlogPosts: BlogPost[] = [
    {
      image: "../../../assets/images/media/blog/2.jpg",
      title: "Automation",
      desc: "The Future of Automation: A Robot at Work",
    },
    {
      image: "../../../assets/images/media/blog/3.jpg",
      title: "Digital Trends",
      desc: "How Platforms are Shaping Digital Communication",
    },
    {
      image: "../../../assets/images/media/blog/4.jpg",
      title: "Robotics",
      desc: "The Role of Robotic Hands in Modern Technology",
    },
    {
      image: "../../../assets/images/media/blog/5.jpg",
      title: "Gadgets",
      desc: "Exploring the Latest Innovations in Headphone Technology.",
    },
  ];

//Top Stories

interface TopStory {
    image: string;
    badgeText: string;
    badgeClass: string;
    title: string;
    link: string;
  };
export const TopStories: TopStory[] = [
    {
      image: "../../../assets/images/media/blog/6.jpg",
      badgeText: "Technology & Innovation",
      badgeClass: "bg-primary-transparent",
      title: "How 5G is Revolutionizing Connectivity Across the Globe",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/7.jpg",
      badgeText: "Health & Wellness",
      badgeClass: "bg-secondary-transparent",
      title: "The Benefits of a Plant-Based Diet: What You Need to Know",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/8.jpg",
      badgeText: "Business & Finance",
      badgeClass: "bg-warning-transparent",
      title: "2025 Financial Trends: How to Prepare for a Changing Market",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/9.jpg",
      badgeText: "Travel & Adventure",
      badgeClass: "bg-success-transparent",
      title: "The Future of Travel Post-Pandemic: What to Expect",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/10.jpg",
      badgeText: "Entertainment & Culture",
      badgeClass: "bg-info-transparent",
      title: "How Social Media is Shaping the Entertainment Industry",
      link: "/pages/blog/blog-details/",
    },
  ];

//Popular Topics
interface BlogCategoryCard {
    imgSrc: string;
    title: string;
  };
export const BlogCategoryCards: BlogCategoryCard[] = [
    { imgSrc: "../../../assets/images/media/blog/11.jpg", title: "Technology" },
    { imgSrc: "../../../assets/images/media/blog/12.jpg", title: "Health" },
    { imgSrc: "../../../assets/images/media/blog/13.jpg", title: "Business" },
    { imgSrc: "../../../assets/images/media/blog/14.jpg", title: "Lifestyle" },
    { imgSrc: "../../../assets/images/media/blog/15.jpg", title: "Travel" },
    { imgSrc: "../../../assets/images/media/blog/16.jpg", title: "Entertainment" },
    { imgSrc: "../../../assets/images/media/blog/17.jpg", title: "Food & Recipes" },
    { imgSrc: "../../../assets/images/media/blog/18.jpg", title: "Animals" },
  ];

  interface BlogCard {
    image: string;
    title: string;
    desc: string;
  };
export const BlogCards: BlogCard[] = [
    {
      image: "../../../assets/images/media/blog/19.jpg",
      title: "Technology",
      desc: "Tech Innovations and Future Trends",
    },
    {
      image: "../../../assets/images/media/blog/20.jpg",
      title: "Health & Wellness",
      desc: "How to Stay Fit and Healthy in 2025",
    },
    {
      image: "../../../assets/images/media/blog/21.jpg",
      title: "Business & Finance",
      desc: "The Ultimate Guide to Personal Finance for Beginners",
    },
    {
      image: "../../../assets/images/media/blog/22.jpg",
      title: "Lifestyle",
      desc: "The Art of Minimalism: Simplify Your Life",
    },
    {
      image: "../../../assets/images/media/blog/23.jpg",
      title: "Productivity",
      desc: "The Secret to Effective Time Management",
    },
    {
      image: "../../../assets/images/media/blog/24.jpg",
      title: "Travel",
      desc: "Top 10 Hidden Travel Gems You Need to Visit",
    },
    {
      image: "../../../assets/images/media/blog/25.jpg",
      title: "Entertainment",
      desc: "Breaking Down the Latest Blockbuster Movies of 2025",
    },
    {
      image: "../../../assets/images/media/blog/26.jpg",
      title: "Food & Recipes",
      desc: "Healthy and Delicious Recipes for Every Meal",
    },
  ];
    
//Popular Blogs
interface PopularBlog {
    image: string;
    title: string;
    dateViews: string;
    link: string;
  };
export const PopularBlogs: PopularBlog[] = [
    {
      image: "../../../assets/images/media/blog/11.jpg",
      title: "Building a Sustainable Future: How Green Technology is Changing the World",
      dateViews: "Mar 15, 2025 - 1.8k Views",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/10.jpg",
      title: "Exploring the Rise of Remote Work: Trends and Best Practices",
      dateViews: "Apr 3, 2025 - 2.3k Views",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/9.jpg",
      title: "Digital Marketing Trends: What You Need to Know for 2025",
      dateViews: "May 10, 2025 - 3.1k Views",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/4.jpg",
      title: "Top 5 Budget-Friendly Home Improvement Projects",
      dateViews: "Jun 22, 2025 - 4.0k Views",
      link: "/pages/blog/blog-details/",
    },
    {
      image: "../../../assets/images/media/blog/7.jpg",
      title: "Mastering the Art of Public Speaking",
      dateViews: "Jul 19, 2025 - 850 Views",
      link: "/pages/blog/blog-details/",
    },
  ];
    
  
  