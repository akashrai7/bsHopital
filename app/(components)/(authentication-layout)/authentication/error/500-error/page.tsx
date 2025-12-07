"use client"

import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col } from "react-bootstrap";

interface Error500Props { }

const Error500: React.FC<Error500Props> = () => {

    return (

        <Fragment>
            <Seo title="Error-500" />
            <div className="page error-bg">
                <div className="error-page-background grid-cards">
                    <Image fill src="../../../assets/images/media/backgrounds/10.svg" alt="" />
                </div>

                {/* <!-- Start::error-page --> */}

                <div className="row align-items-center justify-content-center h-100 g-0">
                    <Col xl={7} md={7} className="col-12">
                        <div className="text-center">
                            <div className="text-center mb-5 custom-width">
                                <Image fill src="../../../assets/images/media/backgrounds/11.png" alt="" className="w-sm-auto w-100 h-100" />
                            </div>
                            <span className="d-block fs-4 text-primary fw-semibold">Oops! Something Went Wrong</span>
                            <p className="error-text mb-0">500</p>
                            <p className="fs-5 fw-normal mb-4">There was an issue with the page. Try again <br /> later or contact support.</p>
                            <Link scroll={false} href="/dashboards/sales" className="btn btn-primary btn-w-lg">Back to home<i className="ti ti-arrow-narrow-right ms-2"></i></Link>
                        </div>
                    </Col>
                </div>
            </div>
        </Fragment>

    )
};

export default Error500;