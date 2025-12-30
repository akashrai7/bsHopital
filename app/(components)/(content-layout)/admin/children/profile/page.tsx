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

export default function ChildProfilePage() {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get("id");

  const [child, setChild] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  /* ================= load ================= */

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const res = await fetch(`/api/admin/children/${id}`, {
          headers: getAuthHeader(),
        });
        const data = await res.json();
        if (!data?.status) throw new Error();
        setChild(data.data);
      } catch {
        toast.error("Failed to load child profile");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return null;
  if (!child) return null;

  return (
    <Fragment>
      <Seo title="Child Profile" />
      <Pageheader
        title="Children"
        currentpage="Child Profile"
        activepage="children"
      />

      <Row className="justify-content-center">
        <Col xl={10}>
          <Tab.Container defaultActiveKey="about">
            {/* ================= HEADER CARD ================= */}
            <Card className="custom-card profile-card">
              <div className="profile-banner-image profile-img">
                <Image
                  fill
                  src="/assets/images/media/media-3.jpg"
                  alt="banner"
                />
              </div>

              <Card.Body className="p-4 pb-0 position-relative">
                <div className="d-flex align-items-end justify-content-between flex-wrap">
                  <div>
                    <span className="avatar avatar-xxl avatar-rounded bg-info">
                      <Image
                        height={80}
                        width={80}
                        src={child.photo || "/assets/images/faces/child.png"}
                        alt="child"
                      />
                    </span>

                    <div className="mt-4 mb-3">
                      <h5 className="fw-semibold mb-1">{child.full_name}</h5>
                      <span className="text-muted">
                        DOB: {new Date(child.dob).toLocaleDateString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <Nav className="nav-tabs tab-style-8 scaleX">
                    <Nav.Item>
                      <Nav.Link eventKey="about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="parents">Parents</Nav.Link>
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
                        <div className="card-title">Child Info</div>
                      </Card.Header>
                      <Card.Body className="text-muted">
                        <p><b>Gender:</b> {child.gender_code}</p>
                        <p><b>Blood Group:</b> {child.blood_group_code || "-"}</p>
                        <p><b>Primary Contact:</b> {child.primary_contact}</p>
                        <p><b>Place of Birth:</b> {child.place_of_birth || "-"}</p>
                        <p><b>Hospital:</b> {child.hospital_name || "-"}</p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={8}>
                    <Card className="custom-card">
                      <Card.Header>
                        <div className="card-title">Notes</div>
                      </Card.Header>
                      <Card.Body>
                        {child.notes || (
                          <span className="text-muted">No notes available</span>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* ===== PARENTS ===== */}
              <Tab.Pane eventKey="parents">
                <Row>
                  {child.parent_ids?.map((p: any) => (
                    <Col xl={4} key={p._id}>
                      <Card className="custom-card">
                        <Card.Body>
                          <h6 className="fw-semibold">
                            {p.first_name} {p.last_name}
                          </h6>
                          <div className="text-muted">
                            UID: {p.parent_uid}
                          </div>
                          <div className="text-muted">
                            Phone: {p.phone}
                          </div>

                          <button
                            className="btn btn-sm btn-light mt-2"
                            onClick={() =>
                              router.push(`/admin/parents/add?id=${p._id}`)
                            }
                          >
                            View Parent
                          </button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Fragment>
  );
}