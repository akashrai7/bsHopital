"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function ParentsListPage() {
  const router = useRouter();
  const [parents, setParents] = useState<any[]>([]);

  async function loadParents() {
    try {
      const res = await fetch("/api/admin/parents");
      const data = await res.json();
      if (data.status) {
        setParents(data.data);
      }
    } catch {
      toast.error("Failed to load parents");
    }
  }

  useEffect(() => {
    loadParents();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this parent?")) return;

    const res = await fetch(`/api/admin/parents/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (data.status) {
      toast.success("Deleted");
      loadParents();
    } else {
      toast.error(data.message);
    }
  }

  return (
    <Fragment>
      <Seo title="Parents List" />
      <Pageheader title="Parents" currentpage="Parents List" activepage="Parents" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Parents List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Parent UID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parents.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">No records</td>
                      </tr>
                    ) : (
                      parents.map((p, i) => (
                        <tr key={p._id}>
                          <td>{i + 1}</td>
                          <td>{p.parent_uid}</td>
                          <td>{p.first_name} {p.last_name}</td>
                          <td>{p.phone}</td>
                          <td>{p.email || "-"}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() =>
                                router.push(`/admin/parents/add?id=${p._id}`)
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

