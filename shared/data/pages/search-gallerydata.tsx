
"use client";
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Link from 'next/link';
import Image from 'next/image';
import { Lightboxcomponent } from '@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox';
import { Col, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons';

export const SearchGallerylist = () => {

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
        <>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/6.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Tech Gadgets</div>
                            </div>
                            <div className="fs-12 text-default">Innovative Marvels</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/2.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Healthy Recipes</div>
                            </div>
                            <div className="fs-12 text-default">Nutrient Nourish</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/4.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Travel Explorer</div>
                            </div>
                            <div className="fs-12 text-default">Global Wander</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/5.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Fashion Finds</div>
                            </div>
                            <div className="fs-12 text-default">Chic Styles</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/6.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Nature Photography</div>
                            </div>
                            <div className="fs-12 text-default">Wild Beauty</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" >
                    <Image fill src="../../assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/7.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Future Tales</div>
                            </div>
                            <div className="fs-12 text-default">Innovative Marvels</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/8.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Science Fiction Books</div>
                            </div>
                            <div className="fs-12 text-default">Future Tales</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <Image fill src="../../assets/images/company-logos/9.png" alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">Fitness Fanatics</div>
                            </div>
                            <div className="fs-12 text-default">Active Vibes</div>
                        </div>
                    </Link>
                </Col>
                <Col xl={12} className="mb-4">
                    <SpkButton Customclass="btn btn-info-light btn-loader mx-auto">
                        <span className="me-2">Loading</span>
                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                    </SpkButton>
                </Col>

            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={Slides} index={0} />
        </>
    );
};
