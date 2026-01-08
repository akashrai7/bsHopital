// import ParentKycCard from "@/app/(components)/(content-layout)/admin/parents/ParentKycCard";
// // import ParentKycCard from "@/components/admin/parents/ParentKycCard";
// import { connectMongo } from "@/lib/mongoose";
// import ParentMaster from "@/models/ParentMaster";

// export default async function ParentDetailPage({
//   searchParams
// }: {
//   searchParams: Promise<{ id?: string }>;
// }) {
//   // ✅ IMPORTANT: unwrap the promise
//   const { id: parentId } = await searchParams;

//   console.log("PARENT ID FROM URL:", parentId);

//   if (!parentId) {
//     return <p>Parent ID missing in URL</p>;
//   }

//   await connectMongo();

//   const parentDoc = await ParentMaster.findById(parentId).lean();

// if (!parentDoc) {
//   return <p>Parent not found</p>;
// }

// // ✅ IMPORTANT: deep-serialize
// const parent = JSON.parse(JSON.stringify(parentDoc));

// return <ParentKycCard parent={parent} />;
// }

"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Tab, Nav, Button } from "react-bootstrap";
import Image from "next/image";
import { toast } from "react-toastify";

import KycOtpModal from "@/app/(components)/(content-layout)/admin/parents/KycOtpModal";
import KycHistoryTable from "@/app/(components)/(content-layout)/admin/parents/KycHistoryTable";

/* ================= helpers ================= */

function getAuthHeader(): HeadersInit {
  try {
    const t = localStorage.getItem("accessToken");
    return t ? { Authorization: `Bearer ${t}` } : {};
  } catch {
    return {};
  }
}

export default function ParentDetailPage() {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get("id");

  const [parent, setParent] = useState<any>(null);
  const [children, setChildren] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* KYC states */
  const [showOtp, setShowOtp] = useState(false);
  const [requestId, setRequestId] = useState<number | null>(null);
  const [sendingOtp, setSendingOtp] = useState(false);

  /* ================= load ================= */

  const loadParent = async () => {
    if (!id) return;

    try {
      setLoading(true);

      const [pRes, cRes] = await Promise.all([
        fetch(`/api/admin/parents/${id}`, { headers: getAuthHeader() }),
        fetch(`/api/admin/parents/${id}/children`, {
          headers: getAuthHeader(),
        }),
      ]);

      const pJson = await pRes.json();
      const cJson = await cRes.json();

      if (!pJson?.status) throw new Error("Parent load failed");

      setParent(pJson.data);
      setChildren(Array.isArray(cJson?.data) ? cJson.data : []);
    } catch {
      toast.error("Failed to load parent details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadParent();
  }, [id]);

  /* ================= SEND OTP ================= */

  const sendOtp = async () => {
    if (!parent?.aadhaar) {
      toast.error("Aadhaar not available");
      return;
    }

    try {
      setSendingOtp(true);

      const res = await fetch(
        `/api/admin/parents/${parent._id}/kyc/generate-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ aadhaar: parent.aadhaar }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to send OTP");
        return;
      }

      setRequestId(data.requestId);
      setShowOtp(true);
      toast.success("OTP sent");
    } catch {
      toast.error("Failed to send OTP");
    } finally {
      setSendingOtp(false);
    }
  };

  if (loading || !parent) return null;

  const isVerified = parent?.kyc?.status === "verified";

  return (
    <Fragment>
      <Seo title="Parent Detail" />
      <Pageheader
        title="Parents"
        currentpage="Parent Detail"
        activepage="parents"
      />

      <Row className="justify-content-center">
        <Col xl={10}>
          <Tab.Container defaultActiveKey="about">
            {/* ================= HEADER ================= */}
            <Card className="custom-card profile-card">
              <div className="profile-banner-image profile-img">
                <Image fill src="/assets/images/media/media-3.jpg" alt="banner" />
              </div>

              <Card.Body className="p-4 pb-0 position-relative">
                <div className="d-flex align-items-end justify-content-between flex-wrap">
                  <div>
                    <span className="avatar avatar-xxl avatar-rounded bg-primary">
                      <Image
                        height={80}
                        width={80}
                        src={
                          parent.profile_photo ||
                          "/assets/images/faces/user.png"
                        }
                        alt="parent"
                      />
                    </span>

                    <div className="mt-4 mb-3">
                      <h5 className="fw-semibold mb-1">
                        {parent.first_name} {parent.middle_name} {parent.last_name}
                      </h5>
                      <span className="text-muted">
                        UID: {parent.parent_uid}
                      </span>
                    </div>
                  </div>

                  <Nav className="nav-tabs tab-style-8 scaleX">
                    <Nav.Item>
                      <Nav.Link eventKey="about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="children">Children</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="kyc">KYC</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Card.Body>
            </Card>

            {/* ================= TABS ================= */}
            <Tab.Content>
              {/* ===== ABOUT ===== */}
              <Tab.Pane eventKey="about">
                <Row>
                  <Col xl={4}>
                    <Card className="custom-card">
                      <Card.Header>
                        <div className="card-title">Parent Info</div>
                      </Card.Header>
                      <Card.Body className="text-muted">
                        <p><b>Phone:</b> {parent.phone}</p>
                        <p><b>Email:</b> {parent.email || "-"}</p>
                        <p><b>Aadhaar:</b> {parent.aadhaar || "-"}</p>
                        <p><b>National id:</b> {parent.national_id || "-"}</p>
                        <p><b>City:</b> {parent.address.line1 || "-"} {parent.address.line2 || "-"}</p>
                        <p><b>City:</b> {parent.address?.city || "-"}</p>
                        <p><b>State:</b> {parent.address?.state?.name || "-"}</p>
                        <p><b>Country:</b> {parent.address?.country?.name || "-"}</p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={8}>
                    <Card className="custom-card">
                      <Card.Header>
                        <div className="card-title">Notes</div>
                      </Card.Header>
                      <Card.Body>
                        {parent.admin_notes || (
                          <span className="text-muted">
                            No notes available
                          </span>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* ===== CHILDREN ===== */}
              <Tab.Pane eventKey="children">
                <Row>
                  {children.length === 0 ? (
                    <Col xl={12}>
                      <Card className="custom-card">
                        <Card.Body className="text-center text-muted">
                          No children linked
                        </Card.Body>
                      </Card>
                    </Col>
                  ) : (
                    children.map((c) => (
                      <Col xl={4} key={c._id}>
                        <Card className="custom-card">
                          <Card.Body>
                            <h6>{c.full_name}</h6>
                            <Button
                              size="sm"
                              variant="light"
                              onClick={() =>
                                router.push(`/admin/children/profile?id=${c._id}`)
                              }
                            >
                              View Child
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  )}
                </Row>
              </Tab.Pane>

              {/* ===== KYC ===== */}
              <Tab.Pane eventKey="kyc">
                <Card className="custom-card">
                  <Card.Body>
                    <h5>Aadhaar KYC</h5>

                    <p>Status: {parent?.kyc?.status || "not_started"}</p>
                    <p>
                      Attempts: {parent?.kyc?.totalAttempts || 0} / 3
                    </p>

                    {!isVerified && (
                      <Button
                        variant="primary"
                        onClick={sendOtp}
                        disabled={sendingOtp}
                      >
                        {sendingOtp ? "Sending..." : "Send OTP"}
                      </Button>
                    )}

                    {isVerified && (
                      <p className="text-success mt-2">
                        Aadhaar KYC Verified
                      </p>
                    )}
                  </Card.Body>
                </Card>

                {parent?._id && (
                  <Card className="custom-card mt-3">
                    <Card.Header>
                      <h5>KYC History</h5>
                    </Card.Header>
                    <Card.Body>
                      <KycHistoryTable parentId={parent._id} />
                    </Card.Body>
                  </Card>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>

      {requestId && (
        <KycOtpModal
          parentId={parent._id}
          requestId={requestId}
          show={showOtp}
          onClose={() => setShowOtp(false)}
          onSuccess={loadParent}
        />
      )}
    </Fragment>
  );
}
