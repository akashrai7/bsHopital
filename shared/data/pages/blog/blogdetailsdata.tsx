interface CategoryStat {
    name: string;
    count: number;
    badgeClass: string;
  };
export const CategoryStats: CategoryStat[] = [
    { name: "Technology & AI", count: 12450, badgeClass: "bg-primary-transparent" },
    { name: "Health & Wellness", count: 9320, badgeClass: "bg-secondary-transparent" },
    { name: "Personal Finance", count: 7800, badgeClass: "bg-warning-transparent" },
    { name: "Travel & Adventure", count: 5600, badgeClass: "bg-info-transparent" },
    { name: "Business & Entrepreneurship", count: 8950, badgeClass: "bg-success-transparent" },
    { name: "Lifestyle", count: 11200, badgeClass: "bg-danger-transparent" },
];
    
//  Blogs you may like

interface PopularPost {
    image: string;
    title: string;
    dateViews: string;
  };
export const PopularPosts: PopularPost[] = [
    {
      image: "../../../assets/images/media/blog/11.jpg",
      title: "Building a Sustainable Future: How Green Technology is Changing the World",
      dateViews: "Mar 15, 2025 - 1.8k Views",
    },
    {
      image: "../../../assets/images/media/blog/10.jpg",
      title: "Exploring the Rise of Remote Work: Trends and Best Practices",
      dateViews: "Apr 3, 2025 - 2.3k Views",
    },
    {
      image: "../../../assets/images/media/blog/9.jpg",
      title: "Digital Marketing Trends: What You Need to Know for 2025",
      dateViews: "May 10, 2025 - 3.1k Views",
    },
    {
      image: "../../../assets/images/media/blog/4.jpg",
      title: "Top 5 Budget-Friendly Home Improvement Projects",
      dateViews: "Jun 22, 2025 - 4.0k Views",
    },
    {
      image: "../../../assets/images/media/blog/7.jpg",
      title: "Mastering the Art of Public Speaking",
      dateViews: "Jul 19, 2025 - 850 Views",
    },
  ];
    

export const Tags = [
  {title:"Artificial Intelligence"},
  {title:"Machine Learning"},
  {title:"Tech Trends"},
  {title:"Software Development"},
  {title:"Mental Health"},
  {title:"Fitness Tips"},
  {title:"Weight Loss"},
  {title:"Self-Care"},
  {title:"Saving Money"},
  {title:"Investing"},
  {title:"Travel Tips"},
  {title:"Bucket List"},
  {title:"Solo Travel"},
  {title:"Startup Tips"},
  {title:"Leadership"},
  {title:"E-commerce"},
  {title:"TV Shows"},
  {title:"Motivation"},
];

