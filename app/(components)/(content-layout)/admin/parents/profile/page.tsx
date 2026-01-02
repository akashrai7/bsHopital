"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Tab, Nav } from "react-bootstrap";
import Image from "next/image";
import { toast } from "react-toastify";

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

  /* ================= load ================= */

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const [pRes, cRes] = await Promise.all([
          fetch(`/api/admin/parents/${id}`, { headers: getAuthHeader() }),
          // ✅ CORRECT API
          fetch(`/api/admin/parents/${id}/children`, {
            headers: getAuthHeader(),
          }),
        ]);

        const pJson = await pRes.json();
        const cJson = await cRes.json();

        if (!pJson?.status) throw new Error("Parent load failed");

        setParent(pJson.data);

        // ✅ ABSOLUTE SAFETY
        if (Array.isArray(cJson?.data)) {
          setChildren(cJson.data);
        } else {
          setChildren([]);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load parent details");
        setChildren([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return null;
  if (!parent) return null;

  return (
    <Fragment>
      <Seo title="Parent Profile" />
      <Pageheader
        title="Parents"
        currentpage="Parent Profile"
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
                        {parent.first_name} {parent.last_name}
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
                        <p><b>City:</b> {parent.address?.city || "-"}</p>
                        <p><b>State:</b> {parent.address?.state?.name || "-"}</p>
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
                            <div className="d-flex align-items-center gap-3">
                              <span className="avatar avatar-lg avatar-rounded bg-info">
                                <Image
                                  width={48}
                                  height={48}
                                  src={
                                    c.photo ||
                                    "/assets/images/faces/child.png"
                                  }
                                  alt="child"
                                />
                              </span>
                              <div>
                                <h6 className="fw-semibold mb-1">
                                  {c.full_name}
                                </h6>
                                <div className="text-muted fs-13">
                                  DOB:{" "}
                                  {new Date(c.dob).toLocaleDateString("en-IN")}
                                </div>
                              </div>
                            </div>

                            <button
                              className="btn btn-sm btn-light mt-3"
                              onClick={() =>
                                router.push(
                                  `/admin/children/profile?id=${c._id}`
                                )
                              }
                            >
                              View Child
                            </button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  )}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Fragment>
  );
}
