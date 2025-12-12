"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";

export default function LanguagesPage() {
  const [languages, setLanguages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    code: "",
    name: "",
    is_active: true,
  });

  const [errors, setErrors] = useState<any>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function fetchLanguages() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/languages");
      const data = await res.json();
      if (data.status) {
        setLanguages(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLanguages();
  }, []);

  function validate() {
    const e: any = {};
    if (!form.code.trim()) e.code = "Code required";
    if (!form.name.trim()) e.name = "Name required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);

    const payload = {
      code: form.code.trim().toUpperCase(),
      name: form.name.trim(),
      is_active: form.is_active,
    };

    const url = editingId
      ? `/api/settings/languages/${editingId}`
      : "/api/settings/languages";

    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!data.status) {
        if (data.errors) setErrors(data.errors);
        toast.error(data.message);
      } else {
        toast.success(editingId ? "Updated" : "Added");
        setForm({ code: "", name: "", is_active: true });
        setEditingId(null);
        fetchLanguages();
      }
    } catch (err) {
      toast.error("Error saving");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(item: any) {
    setEditingId(item._id);
    setForm({
      code: item.code,
      name: item.name,
      is_active: item.is_active,
    });
    window.scrollTo(0, 0);
  }

  async function handleDelete(item: any) {
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(`/api/settings/languages/${item._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.status) {
        toast.success("Deleted");
        fetchLanguages();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Delete failed");
    }
  }

  return (
    <Fragment>
      <Seo title="Languages Master" />
      <Pageheader
        title="Settings"
        currentpage="Languages Master"
        activepage="Languages"
      />

      <Row>
        {/* LEFT SIDE FORM */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit Language" : "Add Language"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                {/* CODE */}
                <div className="mb-3">
                  <Form.Label>Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={form.code}
                    onChange={(e) =>
                      setForm({ ...form, code: e.target.value })
                    }
                    isInvalid={!!errors.code}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.code}
                  </Form.Control.Feedback>
                </div>

                {/* NAME */}
                <div className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </div>

                {/* ACTIVE TOGGLE */}
                <Form.Check
                  type="switch"
                  id="language-active"
                  label={form.is_active ? "Active" : "Inactive"}
                  checked={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: e.target.checked })
                  }
                  className="mb-3"
                />

                <SpkButton
                  Buttontype="submit"
                  Customclass="btn btn-primary"
                  Disabled={saving}
                >
                  {saving
                    ? editingId
                      ? "Updating..."
                      : "Saving..."
                    : editingId
                    ? "Update"
                    : "Save"}
                </SpkButton>
              </form>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT SIDE TABLE */}
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Languages List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered striped hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {languages.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      languages.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.code}</td>
                          <td>{item.name}</td>
                          <td>
                            {item.is_active ? (
                              <span className="badge bg-success">Active</span>
                            ) : (
                              <span className="badge bg-secondary">
                                Inactive
                              </span>
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={() => handleEdit(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(item)}
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

      <ToastContainer autoClose={2000} position="top-right" />
    </Fragment>
  );
}