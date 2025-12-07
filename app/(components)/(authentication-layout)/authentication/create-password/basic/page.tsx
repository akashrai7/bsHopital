"use client"

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

interface BasicProps { }

const Basic: React.FC<BasicProps> = () => {

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState<any>({});
    const [passwordVisibility, setPasswordVisibility] = useState<any>({
        password: false,
        passwords: false,
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setFormErrors((prev: any) => ({ ...prev, [id]: '' }));
    };

    const togglePasswordVisibility = (field: any) => {
        setPasswordVisibility((prev: any) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const validate = () => {
        const errors: any = {};

        if (!formData.password || formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            router.push('/dashboards/sales/');
            toast.success('Create Password successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (

        <Fragment>

            <Seo title="Creatpassword-Basic" />

            <div className="authentication-basic-background">
                <Image fill src="../../../assets/images/media/backgrounds/9.png" alt="" />
            </div>
            <div className="container">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                        <Card className="custom-card border-0 my-4">
                            <Card.Body className="p-5">
                                <div className="mb-4">
                                    <Link scroll={false} href="/dashboards/sales">
                                        <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                                    </Link>
                                </div>
                                <div>
                                    <h4 className="mb-1 fw-semibold">Create Password</h4>
                                    <p className="mb-4 text-muted fw-normal">Set your new password</p>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="create-password" className="text-default">Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={passwordVisibility.password ? 'text' : 'password'}
                                                    className="form-control form-control-lg"
                                                    id="password"
                                                    placeholder="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                                <Link scroll={false} href="#!" onClick={() => togglePasswordVisibility('password')} className="show-password-button text-muted"><i className={`align-middle ${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'}`}></i></Link>
                                            </div>
                                            {formErrors.password && (
                                                <p className="text-danger text-xs mt-1">{formErrors.password}</p>
                                            )}
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={passwordVisibility.passwords ? 'text' : 'password'}
                                                    className="form-control form-control-lg"
                                                    id="confirmPassword"
                                                    placeholder="confirm password"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                                <Link onClick={() => togglePasswordVisibility('passwords')} scroll={false} href="#!" className="show-password-button text-muted"><i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                            {formErrors.confirmPassword && (
                                                <p className="text-danger text-xs mt-1">{formErrors.confirmPassword}</p>
                                            )}
                                            <div className="mt-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-3">
                                        <SpkButton Buttontype="submit" Customclass="btn btn-primary">Create Password</SpkButton>

                                    </div>
                                </Form>
                                <div className="text-center my-3 authentication-barrier">
                                    <span className="op-4 fs-13">OR</span>
                                </div>
                                <div className="d-grid mb-3">
                                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
                                        <span className="avatar avatar-xs">
                                            <Image fill src="../../../assets/images/media/apps/google.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                                    </SpkButton>
                                    <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <Image fill src="../../../assets/images/media/apps/facebook.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                                    </SpkButton>
                                </div>
                                <div className="text-center mt-3 fw-medium">
                                    Dont have an account? <Link scroll={false} href="/authentication/sign-up/basic" className="text-primary">Sign Up</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
                <ToastContainer />
        </Fragment>
    )
};

export default Basic;