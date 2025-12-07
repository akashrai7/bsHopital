"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RelationshipTypeItem = {
  _id: string;
  code: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function RelationshipTypePage() {
  const [list, setList] = useState<RelationshipTypeItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({ code: "", name: "" });
  const [errors, setErrors] = useState<{ code?: string; name?: string; auth?: string }>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/relationship-types", { method: "GET" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch relationship types");
        setList([]);
      } else {
        setList(Array.isArray(data.data) ? data.data : data.data.items || []);
      }
    } catch (err) {
      console.error("Fetch relationship types error:", err);
      toast.error("Server error while fetching relationship types");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  function validate(): boolean {
    const e: { code?: string; name?: string } = {};
    const code = form.code.trim();
    const name = form.name.trim();

    if (!code) {
      e.code = "Code is required.";
    } else if (!/^[A-Za-z]{1,10}$/.test(code)) {
      // e.g., F, M, GF, GM, BRO, SIS etc.
      e.code = "Code must be 1-10 letters (e.g., F, M, GF).";
    }

    if (!name) {
      e.name = "Name is required.";
    } else if (name.length < 2) {
      e.name = "Name must be at least 2 characters.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setErrors({});
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = {
        code: form.code.trim().toUpperCase(), // codes in upper-case
        name: form.name.trim(),
      };

      const url = editingId
        ? `/api/settings/relationship-types/${editingId}`
        : "/api/settings/relationship-types";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data?.status) {
        if (data.errors) setErrors(data.errors);
        toast.error(data.message || "Operation failed");
      } else {
        toast.success(editingId ? "Relationship type updated" : "Relationship type added");
        setForm({ code: "", name: "" });
        setEditingId(null);
        fetchList();
      }
    } catch (err) {
      console.error("Save relationship type error:", err);
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: RelationshipTypeItem) {
    setForm({ code: item.code, name: item.name });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: RelationshipTypeItem) {
    const ok = confirm(`Are you sure you want to delete "${item.code} - ${item.name}"?`);
    if (!ok) return;
    try {
      const res = await fetch(`/api/settings/relationship-types/${item._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({ code: "", name: "" });
        }
        fetchList();
      }
    } catch (err) {
      console.error("Delete relationship type error:", err);
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ code: "", name: "" });
    setErrors({});
  }

  return (
    <Fragment>
      <Seo title="Relationship Type Master" />
      <Pageheader
        title="Settings"
        currentpage="Relationship Type Master"
        activepage="Relationship Types"
      />

      <Row>
        {/* FORM COLUMN */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit Relationship Type" : "Add Relationship Type"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Code</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={form.code}
                      onChange={(e) => setForm({ ...form, code: e.target.value })}
                      type="text"
                      placeholder="Enter code (e.g., F, M, GF)"
                      isInvalid={!!errors.code}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.code}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      type="text"
                      placeholder="Enter name (e.g., Father, Mother)"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                <div className="d-flex gap-2">
                  <SpkButton
                    Buttontype="submit"
                    Customclass="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting
                      ? editingId
                        ? "Updating..."
                        : "Saving..."
                      : editingId
                      ? "Update"
                      : "Save"}
                  </SpkButton>

                  {editingId ? (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  ) : null}
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>

        {/* TABLE COLUMN */}
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Relationship Type List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover size="sm" className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : list.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      list.map((item, idx) => (
                        <tr key={item._id}>
                          <td>{idx + 1}</td>
                          <td>{item.code}</td>
                          <td>{item.name}</td>
                          <td>
                            {item.createdAt
                              ? new Date(item.createdAt).toLocaleString()
                              : "-"}
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-outline-primary"
                                type="button"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                type="button"
                                onClick={() => handleDelete(item)}
                              >
                                Delete
                              </button>
                            </div>
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