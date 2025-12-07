import Link from "next/link"
import { Fragment, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";

export const ProfileGallery = () => {

    const [open, setOpen] = useState(false);

    const Slides = [

        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" },
        { src: "../../assets/images/media/media-26.jpg" },
        { src: "../../assets/images/media/media-32.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-31.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-59.jpg" },
        { src: "../../assets/images/media/media-61.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
    ]

    return (
        <Fragment>
            <div className="row gy-4">
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-26.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-32.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-30.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-31.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-59.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-61.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
            </div>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}

interface UserProfile {
    name: string;
    mail: string;
    imgSrc: string;
    icon: string;
    color: string;
    followers: string;
}

export const Profiles: UserProfile[] = [
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "../../assets/images/faces/9.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "SarahSmith",
        mail: "sarah.smith@example.com",
        imgSrc: "../../assets/images/faces/1.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "MichaelBrown",
        mail: "michael.brown@example.com",
        imgSrc: "../../assets/images/faces/10.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "EmmaWilson",
        mail: "emma.wilson@example.com",
        imgSrc: "../../assets/images/faces/2.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "JamesTaylor",
        mail: "james.taylor@example.com",
        imgSrc: "../../assets/images/faces/11.jpg",
        icon: "minus",
        color: 'danger',
        followers: 'Unfollow'
    },
    {
        name: "OliviaJohnson",
        mail: "olivia.johnson@example.com",
        imgSrc: "../../assets/images/faces/3.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "DavidMartinez",
        mail: "david.martinez@example.com",
        imgSrc: "../../assets/images/faces/13.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "SophiaGarcia",
        mail: "sophia.garcia@example.com",
        imgSrc: "../../assets/images/faces/4.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "DanielLee",
        mail: "daniel.lee@example.com",
        imgSrc: "../../assets/images/faces/14.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "IsabellaHarris",
        mail: "isabella.harris@example.com",
        imgSrc: "../../assets/images/faces/5.jpg",
        icon: "minus",
        color: 'danger',
        followers: 'Unfollow'
    },
    {
        name: "WilliamClark",
        mail: "william.clark@example.com",
        imgSrc: "../../assets/images/faces/15.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "MiaLewis",
        mail: "mia.lewis@example.com",
        imgSrc: "../../assets/images/faces/6.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "AlexanderWalker",
        mail: "alexander.walker@example.com",
        imgSrc: "../../assets/images/faces/16.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "CharlotteAllen",
        mail: "charlotte.allen@example.com",
        imgSrc: "../../assets/images/faces/7.jpg",
        icon: "add",
        color: 'primary',
        followers: 'Follow'
    },
    {
        name: "BenjaminYoung",
        mail: "benjamin.young@example.com",
        imgSrc: "../../assets/images/faces/8.jpg",
        icon: "minus",
        color: 'danger',
        followers: 'Unfollow'
    },
];

interface Friend {
    name: string;
    mail: string;
    imgSrc: string;
}

export const FriendsList: Friend[] = [
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "../../assets/images/faces/9.jpg",
    },
    {
        name: "SarahSmith",
        mail: "sarah.smith@example.com",
        imgSrc: "../../assets/images/faces/1.jpg",
    },
    {
        name: "MichaelBrown",
        mail: "michael.brown@example.com",
        imgSrc: "../../assets/images/faces/10.jpg",
    },
    {
        name: "EmmaWilson",
        mail: "emma.wilson@example.com",
        imgSrc: "../../assets/images/faces/2.jpg",
    },
    {
        name: "JamesTaylor",
        mail: "james.taylor@example.com",
        imgSrc: "../../assets/images/faces/11.jpg",
    },
    {
        name: "OliviaJohnson",
        mail: "olivia.johnson@example.com",
        imgSrc: "../../assets/images/faces/3.jpg",
    },
    {
        name: "DavidMartinez",
        mail: "david.martinez@example.com",
        imgSrc: "../../assets/images/faces/13.jpg"
    },
    {
        name: "SophiaGarcia",
        mail: "sophia.garcia@example.com",
        imgSrc: "../../assets/images/faces/4.jpg"
    },
    {
        name: "DanielLee",
        mail: "daniel.lee@example.com",
        imgSrc: "../../assets/images/faces/14.jpg"
    },
    {
        name: "IsabellaHarris",
        mail: "isabella.harris@example.com",
        imgSrc: "../../assets/images/faces/6.jpg"
    },
    {
        name: "WilliamClark",
        mail: "william.clark@example.com",
        imgSrc: "../../assets/images/faces/15.jpg"
    },
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "../../assets/images/faces/9.jpg"
    },
];



