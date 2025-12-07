
import Link from "next/link"
import { Fragment, useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";

export const GalleryList = () => {

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
    ]

    return (
        <Fragment>
            <Row className="gy-4">
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
                <Col lg={3} md={4} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" className="img-fluid rounded" />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent close={() => setOpen(false)} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}

