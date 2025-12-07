"use client"

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

interface CoverProps { }

const Cover: React.FC<CoverProps> = () => {

    const [values, setValues] = useState<any>({
        email: '',
        password: '',
        showPassword: false
    });

    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const newErrors: any = {};

        // Email validation
        if (!values.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = "Invalid email format.";
        }

        // Password validation
        if (!values.password) {
            newErrors.password = "Password is required.";
        } else if (values.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            router.push('/dashboards/sales/');
            toast.success('Save Password successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            // Handle form submission logic here
        }
    };

    return (

        <Fragment>
            <Seo title="Signup-Cover" />
            <Row className="authentication authentication-cover-main mx-0">
                <Col xxl={9} xl={9}>
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card border-0  shadow-none my-4">
                                <Card.Body className="p-5">
                                    <div>
                                        <h4 className="mb-1 fw-semibold">Create your account</h4>
                                        <p className="mb-4 text-muted fw-normal">Please enter valid credentials</p>
                                    </div>
                                     <Form onSubmit={handleSubmit}>
                                    <Row className="gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signup-username" className="text-default">User Name</Form.Label>
                                            <Form.Control type="text" className="" id="signup-username" placeholder="Enter User Name" defaultValue="Tom Phillip" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signin-email" className="text-default">Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                className="form-control "
                                                id="signup-firstname"
                                                placeholder="Enter Email ID"
                                                value={values.email}
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="signin-password" className="text-default d-block">Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={values.showPassword ? "text" : "password"}
                                                    className="form-control "
                                                    id="signup-password"
                                                    placeholder="Password"
                                                    value={values.password}
                                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Link scroll={false} href="#!" className="show-password-button text-muted"
                                                    onClick={() => setValues((prev: any) => ({ ...prev, showPassword: !prev.showPassword }))}>
                                                    {values.showPassword ? (
                                                        <i className="ri-eye-line align-middle"></i>
                                                    ) : (
                                                        <i className="ri-eye-off-line align-middle"></i>
                                                    )}
                                                </Link>
                                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>   </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-3">
                                    <SpkButton Buttontype="submit" Customclass="btn btn-primary">Sign In</SpkButton>
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
                                        Already have a account? <Link scroll={false} href="/authentication/sign-in/basic/" className="text-primary">Sign In</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={3} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link scroll={false} href="/dashboards/sales">
                                <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <div className="authentication-cover-background">
                            <Image fill src="../../../assets/images/media/backgrounds/9.png" alt="" />
                        </div>
                        <div className="authentication-cover-content">
                            <div className="p-5">
                                <h3 className="fw-semibold lh-base">Welcome to Dashboard</h3>
                                <p className="mb-0 text-muted fw-medium">Manage your website and content with ease using our powerful admin tools.</p>
                            </div>
                            <div>
                                <Image fill src="../../../assets/images/media/media-72.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Fragment>
    )
};

export default Cover;