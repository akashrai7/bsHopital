"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function DoctorsListPage() {
  const router = useRouter();
  const [doctors, setDoctors] = useState<any[]>([]);

  async function loadDoctors() {
    try {
      const res = await fetch("/api/admin/doctors");
      const data = await res.json();
      if (data.status) {
        setDoctors(data.data);
      }
    } catch {
      toast.error("Failed to load doctors");
    }
  }

  useEffect(() => {
    loadDoctors();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this doctor?")) return;

    const res = await fetch(`/api/admin/doctors/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (data.status) {
      toast.success("Deleted");
      loadDoctors();
    } else {
      toast.error(data.message);
    }
  }

  return (
    <Fragment>
      <Seo title="Doctors List" />
      <Pageheader title="Doctors" currentpage="Doctors List" activepage="Doctors" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Doctors List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Doctor UID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">No records</td>
                      </tr>
                    ) : (
                      doctors.map((p, i) => (
                        <tr key={p._id}>
                          <td>{i + 1}</td>
                          <td>{p.doctor_uid}</td>
                          <td>{p.first_name} {p.last_name}</td>
                          <td>{p.phone}</td>
                          <td>{p.email || "-"}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() =>
                                router.push(`/admin/doctors/add?id=${p._id}`)
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(p._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}

