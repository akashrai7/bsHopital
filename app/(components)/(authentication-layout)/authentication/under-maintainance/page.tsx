"use client"

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { DayCounter } from "@/shared/data/authentication/comingsoondata";
import ParticleCard from "@/shared/data/authentication/particles";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Form } from "react-bootstrap";

interface UnderMaintenanceProps { }

const UnderMaintenance: React.FC<UnderMaintenanceProps> = () => {

    return (

        <Fragment>
            <div className="coming-soon-background">
                <Image fill src="../../assets/images/media/backgrounds/9.png" alt="" />
            </div>
            <ParticleCard />
            <div className="row authentication coming-soon g-0 my-4 justify-content-center">
                <Col xxl={7} xl={7} lg={7} md={7} sm={7} className="col-11 my-auto">
                    <div className="authentication-cover text-center">
                        <div className="authentication-cover-content">
                            <div className="row justify-content-center align-items-center mx-0 g-0">
                                <Col xxl={7} xl={7} lg={7} md={12} sm={12} className="col-12">
                                    <div>
                                        <div className="mb-3">
                                            <Link scroll={false} href="/dashboards/sales">
                                                <Image fill src="../../assets/images/brand-logos/desktop-logo.png" alt="" className="authentication-brand" />
                                                <Image fill src="../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand dark" />
                                            </Link>
                                        </div>
                                        <h1 className="mb-0">Under Maintenance</h1>
                                        <DayCounter />
                                        <p className="mb-4 fs-18">We're cooking up something great! Our website is getting an <br /> upgrade – check back soon for a better experience!</p>
                                        <div className="input-group">
                                            <Form.Control type="email" className="form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-lg" Buttontype="button">Subscribe</SpkButton>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        </Fragment>

    )
};

export default UnderMaintenance;