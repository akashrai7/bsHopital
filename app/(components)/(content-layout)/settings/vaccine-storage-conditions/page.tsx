"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type VaccineStorageConditionItem = {
  _id: string;
  code: string;
  condition: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function VaccineStorageConditionPage() {
  const [list, setList] = useState<VaccineStorageConditionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({ code: "", condition: "", description: "" });
  const [errors, setErrors] = useState<{
    code?: string;
    condition?: string;
    description?: string;
    auth?: string;
  }>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch list
  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/vaccine-storage-conditions", {
        method: "GET",
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch storage conditions");
        setList([]);
      } else {
        setList(Array.isArray(data.data) ? data.data : data.data.items || []);
      }
    } catch (err) {
      console.error("Fetch vaccine storage conditions error:", err);
      toast.error("Server error while fetching storage conditions");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  function validate(): boolean {
    const e: { code?: string; condition?: string; description?: string } = {};
    const code = form.code.trim();
    const condition = form.condition.trim();
    const description = form.description.trim();

    if (!code) {
      e.code = "Code is required.";
    } else if (!/^[A-Za-z0-9_-]{1,10}$/.test(code)) {
      e.code = "Code must be 1–10 chars (letters/numbers/-/_).";
    }

    if (!condition) {
      e.condition = "Condition is required.";
    } else if (condition.length < 2) {
      e.condition = "Condition must be at least 2 characters.";
    }

    if (!description) {
      e.description = "Description is required.";
    } else if (description.length < 5) {
      e.description = "Description must be at least 5 characters.";
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
        code: form.code.trim().toUpperCase(),
        condition: form.condition.trim(),
        description: form.description.trim(),
      };

      const url = editingId
        ? `/api/settings/vaccine-storage-conditions/${editingId}`
        : "/api/settings/vaccine-storage-conditions";
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
          editingId
            ? "Vaccine storage condition updated"
            : "Vaccine storage condition added"
        );
        setForm({ code: "", condition: "", description: "" });
        setEditingId(null);
        fetchList();
      }
    } catch (err) {
      console.error("Save vaccine storage condition error:", err);
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: VaccineStorageConditionItem) {
    setForm({
      code: item.code,
      condition: item.condition,
      description: item.description,
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: VaccineStorageConditionItem) {
    const ok = confirm(
      `Are you sure you want to delete "${item.code} - ${item.condition}"?`
    );
    if (!ok) return;
    try {
      const res = await fetch(
        `/api/settings/vaccine-storage-conditions/${item._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({ code: "", condition: "", description: "" });
        }
        fetchList();
      }
    } catch (err) {
      console.error("Delete vaccine storage condition error:", err);
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ code: "", condition: "", description: "" });
    setErrors({});
  }

  return (
    <Fragment>
      <Seo title="Vaccine Storage Condition Master" />
      <Pageheader
        title="Settings"
        currentpage="Vaccine Storage Condition Master"
        activepage="Vaccine Storage Conditions"
      />

      <Row>
        {/* FORM COLUMN */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId
                  ? "Edit Vaccine Storage Condition"
                  : "Add Vaccine Storage Condition"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                {/* Code */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Code</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={form.code}
                      onChange={(e) => setForm({ ...form, code: e.target.value })}
                      type="text"
                      placeholder="Enter code (e.g., FZ)"
                      isInvalid={!!errors.code}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.code}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                {/* Condition */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Condition</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={form.condition}
                      onChange={(e) =>
                        setForm({ ...form, condition: e.target.value })
                      }
                      type="text"
                      placeholder="Enter condition (e.g., Frozen)"
                      isInvalid={!!errors.condition}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.condition}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Description</Form.Label>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder="Enter description (e.g., Required for some specialized vaccines)"
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
              <Card.Title>Vaccine Storage Condition List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover size="sm" className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Code</th>
                      <th>Condition</th>
                      <th>Description</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : list.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      list.map((item, idx) => (
                        <tr key={item._id}>
                          <td>{idx + 1}</td>
                          <td>{item.code}</td>
                          <td>{item.condition}</td>
                          <td style={{ maxWidth: 320 }}>
                            <span
                              className="d-inline-block text-truncate"
                              style={{ maxWidth: 300 }}
                            >
                              {item.description}
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