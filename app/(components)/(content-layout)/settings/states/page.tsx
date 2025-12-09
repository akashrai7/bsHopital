"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CountryItem = {
  _id: string;
  code: string;
  name: string;
  is_active?: boolean;
};

type StateItem = {
  _id: string;
  country: string | CountryItem;
  code: string;
  name: string;
  is_active: boolean;
  createdAt?: string;
};

export default function StatesPage() {
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [states, setStates] = useState<StateItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    countryId: "",
    code: "",
    name: "",
    is_active: true,
  });

  const [errors, setErrors] = useState<{
    countryId?: string;
    code?: string;
    name?: string;
  }>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  // 🔹 Fetch countries (for dropdown)
  async function fetchCountries() {
    try {
      const res = await fetch("/api/settings/countries", { method: "GET" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch countries");
        return;
      }
      let list: CountryItem[] = Array.isArray(data.data)
        ? data.data
        : data.data?.items || [];

      // Sirf active countries dropdown mein dikhाएँ (is_active === false ko hide)
      list = list.filter((c) => c.is_active !== false);
      setCountries(list);
    } catch (err) {
      console.error("fetchCountries error:", err);
      toast.error("Server error while fetching countries");
    }
  }

  // 🔹 Fetch states list
  async function fetchStates() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/states", { method: "GET" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch states");
        setStates([]);
      } else {
        setStates(Array.isArray(data.data) ? data.data : data.data?.items || []);
      }
    } catch (err) {
      console.error("fetchStates error:", err);
      toast.error("Server error while fetching states");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountries();
    fetchStates();
  }, []);

  // 🔹 Validation
  function validate(): boolean {
    const e: typeof errors = {};
    const { countryId, code, name } = form;

    if (!countryId) {
      e.countryId = "Country is required.";
    }
    if (!code.trim()) {
      e.code = "Code is required.";
    } else if (!/^[A-Za-z0-9_-]{1,10}$/.test(code.trim())) {
      e.code = "Code must be 1–10 chars (letters/numbers/-/_).";
    }
    if (!name.trim()) {
      e.name = "Name is required.";
    } else if (name.trim().length < 2) {
      e.name = "Name must be at least 2 characters.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // 🔹 Submit (Add / Update)
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setErrors({});
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = {
        countryId: form.countryId,
        code: form.code.trim().toUpperCase(),
        name: form.name.trim(),
        is_active: form.is_active,
      };

      const url = editingId
        ? `/api/settings/states/${editingId}`
        : "/api/settings/states";
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
        toast.success(editingId ? "State updated" : "State added");
        setForm({ countryId: "", code: "", name: "", is_active: true });
        setEditingId(null);
        fetchStates();
      }
    } catch (err) {
      console.error("handleSubmit state error:", err);
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: StateItem) {
    setForm({
      countryId:
        typeof item.country === "string" ? item.country : item.country?._id,
      code: item.code,
      name: item.name,
      is_active: item.is_active,
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: StateItem) {
    const ok = confirm(
      `Are you sure you want to delete state "${item.name}"?`
    );
    if (!ok) return;

    try {
      const res = await fetch(`/api/settings/states/${item._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({ countryId: "", code: "", name: "", is_active: true });
        }
        fetchStates();
      }
    } catch (err) {
      console.error("handleDelete state error:", err);
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ countryId: "", code: "", name: "", is_active: true });
    setErrors({});
  }

  function getCountryName(item: StateItem) {
    if (!item.country) return "-";
    if (typeof item.country === "string") {
      const found = countries.find((c) => c._id === item.country);
      return found ? found.name : item.country;
    }
    return (item.country as CountryItem).name || "-";
  }

  return (
    <Fragment>
      <Seo title="State Master" />
      <Pageheader
        title="Settings"
        currentpage="State Master"
        activepage="States"
      />

      <Row>
        {/* LEFT: FORM */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit State" : "Add State"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                {/* Country */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">
                    Country
                  </Form.Label>
                  <Form.Select
                    value={form.countryId}
                    onChange={(e) =>
                      setForm({ ...form, countryId: e.target.value })
                    }
                    isInvalid={!!errors.countryId}
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.countryId}
                  </Form.Control.Feedback>
                </div>

                {/* Code */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Code</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={form.code}
                      onChange={(e) =>
                        setForm({ ...form, code: e.target.value })
                      }
                      placeholder="Enter state code (e.g., RJ)"
                      isInvalid={!!errors.code}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.code}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                {/* Name */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Enter state name (e.g., Rajasthan)"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </InputGroup>
                </div>

                {/* Active Toggle */}
                <div className="mb-3">
                  <Form.Check
                    type="switch"
                    id="state-active-switch"
                    label={form.is_active ? "Active" : "Inactive"}
                    checked={form.is_active}
                    onChange={(e) =>
                      setForm({ ...form, is_active: e.target.checked })
                    }
                  />
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

                  {editingId && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT: TABLE */}
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>State List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover size="sm" className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Country</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={7} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : states.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      states.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{getCountryName(item)}</td>
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
                            {item.createdAt
                              ? new Date(item.createdAt).toLocaleString()
                              : "-"}
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
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