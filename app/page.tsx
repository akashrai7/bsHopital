// "use client"

// import { basePath } from '@/next.config';
// import { auth } from '@/shared/firebase/firebaseapi';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import { Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
// import Seo from '@/shared/layouts-components/seo/seo';
// import SpkAlerts from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alerts';
// import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons';
// import Image from 'next/image';
// import { ToastContainer, toast } from 'react-toastify';
// import ParticleCard from '@/shared/data/authentication/particles';

// const Firebase = () => {
//   const [passwordVisibility, setPasswordVisibility] = useState<{ [key: string]: boolean }>({});

//   const togglePasswordVisibility = (field: string) => {
//     setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   const [err, setError] = useState("");
//   const [err1, setError1] = useState("");
//   const [data, setData] = useState({
//     "email": "adminnextjs@gmail.com",
//     "password": "1234567890",
//   });
//   const { email, password } = data;
//   const changeHandler = (e: any) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//     setError("");
//   };
//   const [loading, setLoading] = useState(false);

//   const Login = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(email, password);
//       console.log(userCredential.user);

//       toast.success('Login successful', {
//         position: 'top-right',
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       setTimeout(() => {
//         RouteChange();
//       }, 1200);
//     } catch (err: any) {
//       setError(err.message);
//       // Show error message
//       toast.error('Invalid details', {
//         position: 'top-right',
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
//   const [loading1, setLoading1] = useState(false);

//   const Login1 = async (_e: any) => {
//     _e.preventDefault();
//     setLoading1(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (data.email === "adminnextjs@gmail.com" && data.password === "1234567890") {
//       toast.success('Login successful', {
//         position: 'top-right',
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       setTimeout(() => {
//         RouteChange(); // Navigate after toast delay
//       }, 2000);

//     } else {
//       setError1("The Auction details did not Match");
//       setData({
//         email: "adminnextjs@gmail.com",
//         password: "1234567890",
//       });
//       toast.error('Invalid login credentials', {
//         position: 'top-right',
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,

//         pauseOnHover: true,
//         draggable: true,
//       });
//     }

//     setLoading1(false);
//   };


//   const router = useRouter();
//   const RouteChange = () => {
//     let path = "/dashboards/sales";
//     router.push(path);
//   };

//   useEffect(() => {
//     const body = document.body
//     body.classList.add("authentication-background");
//     return () => {
//       body.classList.remove("authentication-background");
//     };
//   }, []);

//   return (
//     <html>
//       <body className='' >
//         <Seo title={"Home"} />
//         <div className="authentication-basic-background">
//           <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/backgrounds/9.png`} alt="" />
//         </div>
//         <ParticleCard />
//         <div className="container">
//           <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
//             <Col xxl={4} xl={5} lg={6} md={6} sm={8} className="col-12">
//               <Tab.Container defaultActiveKey={"react"}>
//                 <Nav variant="pills" className="justify-content-center authentication-tabs mt-3">
//                   <Nav.Item>
//                     <Nav.Link eventKey="react">
//                       <Image width={28} height={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/nextjs.png`} alt="logo" className='avatar avatar-sm' />
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="firebase">
//                       <Image width={28} height={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/firbase.png`} alt="logo" className='avatar avatar-sm' />
//                     </Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//                 <Card className="custom-card border-0 my-4">
//                   <Tab.Content className=''>
//                     <Tab.Pane eventKey="react" className='border-0'>
//                       <Card.Body className="p-sm-5 ">
//                         <div className="mb-4">
//                           {err1 &&
//                             <SpkAlerts variant="danger">{err1}</SpkAlerts>
//                           }
//                           <Link scroll={false} href="/dashboards/sales">
//                             <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="desktop-dark" />
//                           </Link>
//                         </div>
//                         <div>
//                           <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
//                           <p className="mb-4 text-muted fw-normal">Please enter your credentials</p>
//                         </div>
//                         <div className="row gy-3">
//                           <Col xl={12}>
//                             <label htmlFor="signin-email" className="form-label text-default">Email</label>
//                             <Form.Control type="email" name="email" className="signin-email-input" id="email" placeholder="user name"
//                               defaultValue={email}
//                               onChange={changeHandler}
//                             />
//                           </Col>
//                           <Col xl={12} className="mb-2">
//                             <label htmlFor="signin-password" className="form-label text-default d-block">Password</label>
//                             <div className="position-relative">
//                               <Form.Control name="password" type={passwordVisibility.password ? 'text' : 'password'} value={password}
//                                 onChange={changeHandler} className="create-password-input" id="signin-password" placeholder="password" />
//                               <Link scroll={false} href="#!" onClick={() => togglePasswordVisibility('password')} className="show-password-button text-muted" id="button-addon2">
//                                 <i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
//                             </div>
//                             <div className="mt-2">
//                               <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
//                                 <label className="form-check-label" htmlFor="defaultCheck1">
//                                   Remember me
//                                 </label>
//                                 <Link scroll={false} href="/authentication/reset-password/basic" className="float-end link-danger fw-medium fs-12">Forget password ?</Link>
//                               </div>
//                             </div>
//                           </Col>
//                         </div>
//                         <div className="d-grid mt-3">
//                           <button onClick={Login1} className={`btn btn-primary ${loading1 ? 'disabled' : ''}`}>
//                             <i className="ri-login-circle-line me-2"></i> Sign In
//                             {loading1 && <i className="fa fa-spinner fa-spin me-2 ms-2"></i>}
//                           </button>
//                         </div>
//                         <div className="text-center my-3 authentication-barrier">
//                           <span className="op-4 fs-13">OR</span>
//                         </div>
//                         <div className="d-grid mb-3">
//                           <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
//                             <span className="avatar avatar-xs">
//                               <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/google.png`} alt="" />
//                             </span>
//                             <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
//                           </SpkButton>
//                           <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
//                             <span className="avatar avatar-xs">
//                               <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/facebook.png`} alt="" />
//                             </span>
//                             <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
//                           </SpkButton>
//                         </div>
//                         <div className="text-center mt-3 fw-medium">
//                           Dont have an account? <Link scroll={false} href="/authentication/sign-up/basic" className="text-primary">Sign up</Link>
//                         </div>
//                       </Card.Body>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="firebase" className='border-0'>
//                       <Card.Body className="p-sm-5 ">
//                         <div className="mb-4">
//                           {err &&
//                             <SpkAlerts variant="danger">{err}</SpkAlerts>
//                           }
//                           <Link scroll={false} href="/dashboards/sales">
//                             <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="desktop-dark" />
//                           </Link>
//                         </div>
//                         <div>
//                           <h4 className="mb-1 fw-semibold">Hi,Welcome back!</h4>
//                           <p className="mb-4 text-muted fw-normal">Please enter your credentials</p>
//                         </div>
//                         <div className="row gy-3">
//                           <Col xl={12}>
//                             <label htmlFor="signin-email" className="form-label text-default">Email</label>
//                             <Form.Control type="email" name="email" className="" id="email" placeholder="user name"
//                               defaultValue={email}
//                               onChange={changeHandler}
//                             />
//                           </Col>
//                           <Col xl={12} className="mb-2">
//                             <label htmlFor="signin-password" className="form-label text-default d-block">Password</label>
//                             <div className="position-relative">
//                               <Form.Control name="password" type={passwordVisibility.passwords ? 'text' : 'password'} value={password}
//                                 onChange={changeHandler} className="create-password-input" id="signin-password" placeholder="password" />
//                               <Link scroll={false} href="#!" onClick={() => togglePasswordVisibility('passwords')} className="show-password-button text-muted" id="button-addon2">
//                                 <i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>


//                             </div>
//                             <div className="mt-2">
//                               <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" defaultChecked />
//                                 <label className="form-check-label" htmlFor="defaultCheck1">
//                                   Remember me
//                                 </label>
//                                 <Link scroll={false} href="/authentication/reset-password/basic" className="float-end link-danger fw-medium fs-12">Forget password ?</Link>
//                               </div>
//                             </div>
//                           </Col>
//                         </div>
//                         <div className="d-grid mt-3">
//                           <button onClick={Login} className={`btn btn-primary ${loading ? 'disabled' : ''}`}>
//                             <i className="ri-login-circle-line me-2"></i> Sign In
//                             {loading && <i className="fa fa-spinner fa-spin me-2 ms-2"></i>}
//                           </button>
//                         </div>
//                         <div className="text-center my-3 authentication-barrier">
//                           <span className="op-4 fs-13">OR</span>
//                         </div>
//                         <div className="d-grid mb-3">
//                           <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
//                             <span className="avatar avatar-xs">
//                               <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/google.png`} alt="" />
//                             </span>
//                             <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
//                           </SpkButton>
//                           <SpkButton Customclass="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
//                             <span className="avatar avatar-xs">
//                               <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/facebook.png`} alt="" />
//                             </span>
//                             <span className="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
//                           </SpkButton>
//                         </div>
//                         <div className="text-center mt-3 fw-medium">
//                           Dont have an account? <Link scroll={false} href="/authentication/sign-up/basic" className="text-primary">Sign up</Link>
//                         </div>
//                       </Card.Body>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Card>
//               </Tab.Container>
//             </Col>
//           </Row>
//         </div>
//         <ToastContainer />
//       </body>
//     </html>
//   )
// }

// export default Firebase;

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/authentication/sign-in/cover");
}