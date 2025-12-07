import SpkTestimonialcard from "@/shared/@spk-reusable-components/reusable-pages/spk-testimonialcard";
import SpkTeststyleCard from "@/shared/@spk-reusable-components/reusable-pages/spk-teststylecard";
import Image from "next/image";
import { Card } from "react-bootstrap";

//Testimonials Style 1

interface Review {
    title: string;
    stars: any;
    description: string;
    name: string;
    role: string;
    imgSrc: string;
};
const Reviews: Review[] = [
    {
        title: 'Quality',
        stars: (
            <>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-half-line"></i>
            </>
        ),
        description:
            'The product is well-designed and of great quality. It met all my expectations, and I am satisfied with my purchase.',
        name: 'John Doe',
        role: 'Product Manager',
        imgSrc: '../../assets/images/faces/10.jpg',
    },
    {
        title: 'Overall Experience',
        stars: (
            <>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
            </>
        ),
        description: 'The performance of this product is outstanding. It works smoothly without any lag.',
        name: 'Sarah Lee',
        role: 'Software Engineer',
        imgSrc: '../../assets/images/faces/2.jpg',
    },
    {
        title: 'Performance',
        stars: (
            <>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-half-line"></i>
            </>
        ),
        description:
            'The product is well-designed and of great quality. It met all my expectations, and I am satisfied with my purchase.',
        name: 'John Doe',
        role: 'Product Manager',
        imgSrc: '../../assets/images/faces/10.jpg',
    },
    {
        title: 'Usability',
        stars: (
            <>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-line"></i>
                <i className="ri-star-line"></i>
            </>
        ),
        description:
            'The usability of the product is okay, but there are some features that could be improved for easier navigation.',
        name: 'Emily Johnson',
        role: 'Marketing Lead',
        imgSrc: '../../assets/images/faces/4.jpg',
    },
    {
        title: 'Customer Support',
        stars: (
            <>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-line"></i>
            </>
        ),
        description:
            'The customer support team was very responsive and helpful in resolving my queries. The issue was fixed.',
        name: 'David Smith',
        role: 'Sales Manager',
        imgSrc: '../../assets/images/faces/13.jpg',
    },
    {
        title: 'Value for Money',
        stars: (
            <>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-fill me-1"></i>
                <i className="ri-star-half-line"></i>
            </>
        ),
        description:
            'The product is decent, but I feel it’s a little overpriced for the features it offers. It’s good, but not exceptional.',
        name: 'Michael Brown',
        role: 'Business Analyst',
        imgSrc: '../../assets/images/faces/15.jpg',
    },
];

export const Reviewsdata = Reviews.map((review, index) => (
    <div key={index}>
        <SpkTestimonialcard test={review} />
    </div>
));

//Testimonials Style 2

interface CustomReview {
    title: string;
    stars: any;
    description: string;
    name: string;
    role: string;
    imgSrc: string;
    color: string;
}

const CustomReviews: CustomReview[] = [
    {
        title: "User Experience",
        description: "The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.",
        name: "Clara Johnson",
        role: "Senior Graphic Designer",
        imgSrc: "../../assets/images/faces/1.jpg",
        color: "primary border-0",
        stars: (
            <>
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-half-line" />
            </>
        ),
    },
    {
        title: "Integration & Compatibility",
        description: "The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.",
        name: "Peter Hayes",
        role: "Chief Technology Officer",
        imgSrc: "../../assets/images/faces/10.jpg",
        color: "success border-0",
        stars: (
            <>
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-half-line" />
            </>
        ),
    },
    {
        title: "Product Quality",
        description: "This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.",
        name: "John Thompson",
        role: "Marketing Director",
        imgSrc: "../../assets/images/faces/9.jpg",
        color: "warning border-0",
        stars: (
            <>
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-half-line" />
            </>
        ),
    },
    {
        title: "Efficiency",
        description: "The automation tools have saved us so much time, especially during critical project timelines. We've been able to reduce delays and improve our overall project delivery rates.",
        name: "Ashley Miller",
        role: "Project Manager",
        imgSrc: "../../assets/images/faces/5.jpg",
        color: "info border-0",
        stars: (
            <>
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-half-line" />
            </>
        ),
    },
    {
        title: "Customer Support",
        description: "Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.",
        name: "Kevin Brown",
        role: "Customer Relations Manager",
        imgSrc: "../../assets/images/faces/14.jpg",
        color: "danger border-0",
        stars: (
            <>
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-half-line" />
            </>
        ),
    },
    {
        title: "Sales Performance",
        description: "The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.",
        name: "Grace Lee",
        role: "Sales Executive",
        imgSrc: "../../assets/images/faces/3.jpg",
        color: "teal border-0",
        stars: (
            <>
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-fill me-1" />
                <i className="ri-star-half-line" />
            </>
        ),
    },
];

export const CustomReviewdata = CustomReviews.map((review, index) => (
    <div key={index}>
        <SpkTeststyleCard cardClass={review.color} style={review} />
    </div>
));

//Testimonials Style 3

interface Testimonial {
    id: number;
    image: string;
    name: string;
    role: string;
    rating: number;
    text: string;
}

const Testimonials3: Testimonial[] = [
    {
        id: 1,
        image: "../../assets/images/faces/1.jpg",
        name: "Clara Johnson",
        role: "Senior Graphic Designer",
        rating: 4.5,
        text: "This product has made a difference in my daily routine. Simple, effective, and worth every penny.",
    },
    {
        id: 2,
        image: "../../assets/images/faces/6.jpg",
        name: "Ashley Miller",
        role: "Project Manager",
        rating: 4.5,
        text: "I love the modern design, and it delivers top-notch performance. A great addition to my setup!",
    },
    {
        id: 3,
        image: "../../assets/images/faces/3.jpg",
        name: "Grace Lee",
        role: "Sales Executive",
        rating: 4.5,
        text: "Initially skeptical, but this product exceeded my expectations. Highly recommended.",
    },
    {
        id: 4,
        image: "../../assets/images/faces/10.jpg",
        name: "Lucas Scott",
        role: "Business Consultant",
        rating: 4.5,
        text: "Does exactly what it promises. Easy to use, durable, and fantastic. I'm a happy customer!",
    },
    {
        id: 5,
        image: "../../assets/images/faces/5.jpg",
        name: "Maria Evans",
        role: "Operations Manager",
        rating: 4.5,
        text: "Affordable and high-quality. This product outshines competitors. Thrilled with the value I got!",
    },
    {
        id: 6,
        image: "../../assets/images/faces/6.jpg",
        name: "Rachel Walker",
        role: "Senior Analyst",
        rating: 4.5,
        text: "Exceptional product. Quick responses and a genuine commitment to customer satisfaction.",
    },
];

export const TestimonialCards = Testimonials3.map((testimonial) => (
    <div className="card custom-card" key={testimonial.id}>
        <div className="card-body text-center p-5">
            <div className="testimonaial-3-quote">
                <i className="bx bxs-quote-alt-left"></i>
            </div>
            <div className="lh-1 mb-4">
                <span className="avatar avatar-xl avatar-rounded">
                    <Image width={64} height={64} src={testimonial.image} alt="img" />
                </span>
            </div>
            <div className="mb-2 text-warning fs-15">
                {[...Array(5)].map((_, index) => (
                    <i key={index} className={`ri-star-fill ${index < Math.floor(testimonial.rating) ? '' : 'ri-star-half-line'} me-1`}></i>
                ))}
            </div>
            <p>{testimonial.text}</p>
            <div className="d-flex align-items-center justify-content-start">
                <div className="flex-grow-1">
                    <h6 className="mb-1">{testimonial.name}</h6>
                    <span className="fs-14 fw-normal text-muted">{testimonial.role}</span>
                </div>
            </div>
        </div>
    </div>
));

//Testimonials Style 4

interface Testimonials {
    id: string;
    name: string;
    role: string;
    text: string;
    image: string;
    rating: number;
    cardClass: string;
}

const Testimonialsdata: Testimonials[] = [
    {
        id: '1',
        name: 'John Thompson',
        role: 'Marketing Director',
        text: 'This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.',
        image: '../../assets/images/faces/9.jpg',
        rating: 4.5,
        cardClass: 'primary',
    },
    {
        id: '2',
        name: 'Clara Johnson',
        role: 'Senior Graphic Designer',
        text: 'The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.',
        image: '../../assets/images/faces/2.jpg',
        rating: 4.5,
        cardClass: 'success',
    },
    {
        id: '3',
        name: 'Peter Hayes',
        role: 'Chief Technology Officer',
        text: 'The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.',
        image: '../../assets/images/faces/10.jpg',
        rating: 4.5,
        cardClass: 'warning',
    },
    {
        id: '4',
        name: 'Ashley Miller',
        role: 'Project Manager',
        text: 'The automation tools have saved us so much time, especially during critical project timelines. We\'ve been able to reduce delays and improve our overall project delivery rates and exceptional support.',
        image: '../../assets/images/faces/3.jpg',
        rating: 4.5,
        cardClass: 'info',
    },
    {
        id: '5',
        name: 'Kevin Brown',
        role: 'Customer Relations Manager',
        text: 'Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.',
        image: '../../assets/images/faces/13.jpg',
        rating: 4.5,
        cardClass: 'danger',
    },
    {
        id: '6',
        name: 'Grace Lee',
        role: 'Sales Executive',
        text: 'The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.',
        image: '../../assets/images/faces/5.jpg',
        rating: 4.5,
        cardClass: 'teal',
    },
];

export const TestimonialSlider = Testimonialsdata.map((testimonial) => (

    <div key={testimonial.id} className={`card custom-card ${testimonial.cardClass}`}>
        <div className="card-body p-5">
            <div className="lh-1">
                <span className="avatar avatar-xxl avatar-rounded">
                    <Image width={80} height={80} src={testimonial.image} alt={testimonial.name} />
                </span>
            </div>
            <div>
                <div className="main-content">
                    <div className="mb-2 text-warning fs-15">
                        {[...Array(5)].map((_, index) => (
                            <i key={index} className={`ri-star-fill ${index < Math.floor(testimonial.rating) ? '' : 'ri-star-half-line'} me-1`}></i>
                        ))}
                    </div>
                    <p className="text-muted mb-3">{testimonial.text}</p>
                    <div>
                        <span className="d-block fw-semibold">{testimonial.name}</span>
                        <span className="fs-13 text-muted">{testimonial.role}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

));


