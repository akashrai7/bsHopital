// "use client"

// import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Fragment, useState } from "react"
// import { Card, Col, Form, Row } from "react-bootstrap";
// import { toast,ToastContainer } from "react-toastify";

// interface CoverProps { }

// const Cover: React.FC<CoverProps> = () => {

//     const [values, setValues] = useState<any>({
//         email: '',
//         password: '',
//         showPassword: false
//     });

//     const [errors, setErrors] = useState<any>({});

//     const validate = () => {
//         const newErrors: any = {};

//         // Email validation
//         if (!values.email) {
//             newErrors.email = "Email is required.";
//         } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//             newErrors.email = "Invalid email format.";
//         }

//         // Password validation
//         if (!values.password) {
//             newErrors.password = "Password is required.";
//         } else if (values.password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters.";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
//     const router = useRouter()
//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         if (validate()) {
//             router.push('/dashboards/sales/');
//             toast.success('Save Password successful', {
//                 position: 'top-right',
//                 autoClose: 1500,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//             });
//             // Handle form submission logic here
//         }
//     };


//     return (

//         <Fragment>
//             <Seo title="Signin-Cover" />

//             <Row className="authentication authentication-cover-main mx-0">
//                 <Col xxl={9} xl={9}>
//                     <Row className="justify-content-center align-items-center h-100">
//                         <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
//                             <Card className="custom-card border-0 shadow-none my-4">
//                                 <Card.Body className="p-5">
//                                     <div>
//                                         <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
//                                         <p className="mb-4 text-muted fw-normal">Please enter your credentials</p>
//                                     </div>
//                                     <Form onSubmit={handleSubmit}>
//                                         <Row className=" gy-3">
//                                             <Col xl={12}>
//                                                 <Form.Label htmlFor="signin-email" className="text-default">Email</Form.Label>
//                                                 <Form.Control
//                                                     type="email"
//                                                     className="form-control "
//                                                     id="signup-firstname"
//                                                     placeholder="Enter Email ID"
//                                                     value={values.email}
//                                                     onChange={(e) => setValues({ ...values, email: e.target.value })}
//                                                     isInvalid={!!errors.email}
//                                                 />
//                                                 <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//                                             </Col>
//                                             <Col xl={12} className="mb-2">
//                                                 <Form.Label htmlFor="signin-password" className="text-default d-block">Password</Form.Label>
//                                                 <div className="position-relative">
//                                                     <Form.Control
//                                                         type={values.showPassword ? "text" : "password"}
//                                                         className="form-control "
//                                                         id="signup-password"
//                                                         placeholder="Password"
//                                                         value={values.password}
//                                                         onChange={(e) => setValues({ ...values, password: e.target.value })}
//                                                         isInvalid={!!errors.password}
//                                                     />
//                                                     <Link scroll={false} href="#!" className="show-password-button text-muted"
//                                                         onClick={() => setValues((prev: any) => ({ ...prev, showPassword: !prev.showPassword }))}>
//                                                         {values.showPassword ? (
//                                                             <i className="ri-eye-line align-middle"></i>
//                                                         ) : (
//                                                             <i className="ri-eye-off-line align-middle"></i>
//                                                         )}
//                                                     </Link>
//                                                     <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//                                                 </div>
//                                                 <div className="mt-2">
//                                                     <div className="form-check">
//                                                         <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
//                                                         <label className="form-check-label" htmlFor="defaultCheck1">
//                                                             Remember me
//                                                         </label>
//                                                         <Link scroll={false} href="/authentication/reset-password/basic" className="float-end link-danger fw-medium fs-12">Forget password ?</Link>
//                                                     </div>
//                                                 </div>
//                                             </Col>
//                                         </Row>
//                                         <div className="d-grid mt-3">
//                                             <SpkButton Buttontype="submit" Customclass="btn btn-primary">Sign In</SpkButton>
//                                         </div>
//                                     </Form>
//                                     <div className="text-center my-3 authentication-barrier">
//                                         <span className="op-4 fs-13">OR</span>
//                                     </div>
                                  
//                                     <div className="text-center mt-3 fw-medium">
//                                         Dont have an account? <Link scroll={false} href="/authentication/sign-up/basic/" className="text-primary">Sign Up</Link>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Col>
//                 <Col xxl={3} xl={3} lg={12} className="d-xl-block d-none px-0">
//                     <div className="authentication-cover overflow-hidden">
//                         <div className="authentication-cover-logo">
//                             <Link scroll={false} href="/dashboards/sales">
//                                 <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
//                             </Link>
//                         </div>
//                         <div className="authentication-cover-background">
//                             <Image fill src="../../../assets/images/media/backgrounds/9.png" alt="" />
//                         </div>
//                         <div className="authentication-cover-content">
//                             <div className="p-5">
//                                 <h3 className="fw-semibold lh-base">Welcome to Dashboard</h3>
//                                 <p className="mb-0 text-muted fw-medium">Manage your website and content with ease using our powerful admin tools.</p>
//                             </div>
//                             <div>
//                                 <Image fill src="../../../assets/images/media/media-72.png" alt="" className="img-fluid" />
//                             </div>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//             <ToastContainer />
//         </Fragment>
//     )
// }
// export default Cover;



// app/(authentication-layout)/authentication/sign-in/cover/page.tsx
"use client";

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!values.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!values.password) {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
  e.preventDefault();
  setErrors({});
  if (!validate()) return;

  try {
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email, password: values.password }),
    });

    const data = await res.json();
   // console.log("login response:", data);

    if (!data?.status) {
      // If API returned field-wise errors object, use it
      if (data.errors && typeof data.errors === "object" && Object.keys(data.errors).length) {
        setErrors(data.errors);
      } else if (data.message) {
        // Put generic message into errors.auth so UI can render it
        setErrors({ auth: data.message });
      } else {
        setErrors({ auth: "Login failed. Try again." });
      }

      // Also show toast for visibility
      toast.error(data.message || "Login failed");
      setLoading(false);
      return;
    }

    // success
    toast.success(data.message || "Login successful", {
      position: "top-right",
      autoClose: 1200,
    });

    if (data.data?.accessToken) {
      try {
        localStorage.setItem("bs_access_token", data.data.accessToken);
      } catch (err) {
        console.warn("Could not store token in localStorage", err);
      }
    }

    setTimeout(() => {
      router.push("/dashboards/medical/");
    }, 500);
  } catch (err: any) {
    console.error("Login error:", err);
    toast.error("Server error. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <Fragment>
      <Seo title="Signin-Cover" />

      <Row className="authentication authentication-cover-main mx-0">
        <Col xxl={9} xl={9}>
          <Row className="justify-content-center align-items-center h-100">
            <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
              <Card className="custom-card border-0 shadow-none my-4">
                <Card.Body className="p-5">
                  <div>
                    <h4 className="mb-1 fw-semibold">Hi, Welcome back!</h4>
                    <p className="mb-4 text-muted fw-normal">Please enter your credentials</p>
                  </div>
{/* after the Sign In button (inside the form, below) */}
{errors?.auth && (
  <div className="field-error text-danger mt-2" role="alert">
    {errors.auth}
  </div>
)}

                  <Form onSubmit={handleSubmit}>
                    <Row className="gy-3">
                      <Col xl={12}>
                        <Form.Label htmlFor="signin-email" className="text-default">
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="form-control"
                          id="signin-email"
                          placeholder="Enter Email ID"
                          value={values.email}
                          onChange={(e) => setValues({ ...values, email: e.target.value })}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Col>

                      <Col xl={12} className="mb-2">
                        <Form.Label htmlFor="signin-password" className="text-default d-block">
                          Password
                        </Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type={values.showPassword ? "text" : "password"}
                            className="form-control"
                            id="signin-password"
                            placeholder="Password"
                            value={values.password}
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            isInvalid={!!errors.password}
                          />
                          {/* use button not anchor to avoid #! navigation */}
                          <button
                            type="button"
                            aria-label="toggle password"
                            onClick={() => setValues((prev: any) => ({ ...prev, showPassword: !prev.showPassword }))}
                            className="show-password-button text-muted btn"
                            style={{ position: "absolute", right: 8, top: 8, border: "none", background: "transparent" }}
                          >
                            {values.showPassword ? <i className="ri-eye-line align-middle"></i> : <i className="ri-eye-off-line align-middle"></i>}
                          </button>
                          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </div>

                        {/* <div className="mt-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                              Remember me..
                            </label>
                            <Link scroll={false} href="/authentication/reset-password/basic" className="float-end link-danger fw-medium fs-12">
                              Forget password ?
                            </Link>
                          </div>
                        </div> */}
                      </Col>
                    </Row>

                    <div className="d-grid mt-3">
                      <SpkButton Buttontype="submit" Customclass="btn btn-primary" Disabled={loading}>
                        {loading ? "Signing in..." : "Sign In"}
                      </SpkButton>
                    </div>
                  </Form>

                  <div className="text-center my-3 authentication-barrier">
                    <span className="op-4 fs-13">OR</span>
                  </div>

                  <div className="text-center mt-3 fw-medium">
                    Don't have an account? <Link scroll={false} href="/authentication/sign-up/basic/" className="text-primary">Sign Up</Link>
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
                {/* Use absolute public path to avoid relative import issues */}
                <Image fill src="/assets/images/brand-logos/toggle-logo.png" alt="logo" className="desktop-dark" />
              </Link>
            </div>
            <div className="authentication-cover-background">
              <Image fill src="/assets/images/media/backgrounds/9.png" alt="" />
            </div>
            <div className="authentication-cover-content">
              <div className="p-5">
                <h3 className="fw-semibold lh-base">Welcome to Dashboard</h3>
                <p className="mb-0 text-muted fw-medium">Manage your website and content with ease using our powerful admin tools.</p>
              </div>
              <div>
                <Image fill src="/assets/images/media/media-72.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <ToastContainer />
    </Fragment>
  );
};

export default Cover;
