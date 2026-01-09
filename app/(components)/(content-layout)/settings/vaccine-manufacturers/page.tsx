"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type VaccineManufacturerItem = {
  _id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function VaccineManufacturerPage() {
  const [list, setList] = useState<VaccineManufacturerItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({ name: "", description: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    description?: string;
    auth?: string;
  }>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch list
  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/vaccine-manufacturers", { method: "GET" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch vaccine manufacturers");
        setList([]);
      } else {
        setList(Array.isArray(data.data) ? data.data : data.data.items || []);
      }
    } catch (err) {
      console.error("Fetch vaccine manufacturers error:", err);
      toast.error("Server error while fetching vaccine manufacturers");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  function validate(): boolean {
    const e: { name?: string; description?: string } = {};
    const name = form.name.trim();
    const description = form.description.trim();

    if (!name) {
      e.name = "Name is required.";
    } else if (name.length < 2) {
      e.name = "Name must be at least 2 characters.";
    }

    // description optional; अगर हो तो थोड़ा length check कर सकते हैं
    if (description && description.length < 3) {
      e.description = "Description must be at least 3 characters if provided.";
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
        name: form.name.trim(),
        description: form.description.trim() || "",
      };

      const url = editingId
        ? `/api/settings/vaccine-manufacturers/${editingId}`
        : "/api/settings/vaccine-manufacturers";
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
        toast.success(
          editingId ? "Vaccine manufacturer updated" : "Vaccine manufacturer added"
        );
        setForm({ name: "", description: "" });
        setEditingId(null);
        fetchList();
      }
    } catch (err) {
      console.error("Save vaccine manufacturer error:", err);
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: VaccineManufacturerItem) {
    setForm({
      name: item.name,
      description: item.description || "",
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: VaccineManufacturerItem) {
    const ok = confirm(
      `Are you sure you want to delete "${item.name}"?`
    );
    if (!ok) return;
    try {
      const res = await fetch(`/api/settings/vaccine-manufacturers/${item._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({ name: "", description: "" });
        }
        fetchList();
      }
    } catch (err) {
      console.error("Delete vaccine manufacturer error:", err);
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ name: "", description: "" });
    setErrors({});
  }

  return (
    <Fragment>
      <Seo title="Vaccine Manufacturer Master" />
      <Pageheader
        title="Settings"
        currentpage="Vaccine Manufacturer Master"
        activepage="Vaccine Manufacturers"
      />

      <Row>
        {/* FORM COLUMN */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit Vaccine Manufacturer" : "Add Vaccine Manufacturer"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      type="text"
                      placeholder="Enter manufacturer name (e.g., Serum Institute of India)"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Description (optional)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder="Enter description (optional)"
                      isInvalid={!!errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                <div className="d-flex gap-2">
                  <SpkButton
                    Buttontype="submit"
                    Customclass="btn btn-primary"
                    Disabled={submitting}
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
              <Card.Title>Vaccine Manufacturer List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover size="sm" className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
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
                          <td>{item.name}</td>
                          <td style={{ maxWidth: 320 }}>
                            <span
                              className="d-inline-block text-truncate"
                              style={{ maxWidth: 300 }}
                            >
                              {item.description || "-"}
                            </span>
                          </td>
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