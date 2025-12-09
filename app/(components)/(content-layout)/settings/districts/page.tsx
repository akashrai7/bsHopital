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
  code: string;
  name: string;
  is_active: boolean;
};

type DistrictItem = {
  _id: string;
  country: string | CountryItem;
  state: string | StateItem;
  code: string;
  name: string;
  is_active: boolean;
  createdAt?: string;
};

export default function DistrictsPage() {
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [states, setStates] = useState<StateItem[]>([]);
  const [districts, setDistricts] = useState<DistrictItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    countryId: "",
    stateId: "",
    code: "",
    name: "",
    is_active: true,
  });

  const [errors, setErrors] = useState<{
    countryId?: string;
    stateId?: string;
    code?: string;
    name?: string;
  }>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  // 🔹 Fetch countries
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
      list = list.filter((c) => c.is_active !== false);
      setCountries(list);
    } catch (err) {
      console.error("fetchCountries error:", err);
      toast.error("Server error while fetching countries");
    }
  }

  // 🔹 Fetch states for selected country (active only)
  async function fetchStatesForCountry(countryId: string) {
    if (!countryId) {
      setStates([]);
      return;
    }
    try {
      const res = await fetch(
        `/api/settings/states?countryId=${countryId}&activeOnly=true`
      );
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch states");
        setStates([]);
      } else {
        const list: StateItem[] = Array.isArray(data.data)
          ? data.data
          : data.data?.items || [];
        setStates(list);
      }
    } catch (err) {
      console.error("fetchStatesForCountry error:", err);
      toast.error("Server error while fetching states");
    }
  }

  // 🔹 Fetch districts list
  async function fetchDistricts() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/districts", { method: "GET" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch districts");
        setDistricts([]);
      } else {
        setDistricts(
          Array.isArray(data.data) ? data.data : data.data?.items || []
        );
      }
    } catch (err) {
      console.error("fetchDistricts error:", err);
      toast.error("Server error while fetching districts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountries();
    fetchDistricts();
  }, []);

  // 🔹 Validation
  function validate(): boolean {
    const e: typeof errors = {};
    const { countryId, stateId, code, name } = form;

    if (!countryId) {
      e.countryId = "Country is required.";
    }
    if (!stateId) {
      e.stateId = "State is required.";
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
        stateId: form.stateId,
        code: form.code.trim().toUpperCase(),
        name: form.name.trim(),
        is_active: form.is_active,
      };

      const url = editingId
        ? `/api/settings/districts/${editingId}`
        : "/api/settings/districts";
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
        toast.success(editingId ? "District updated" : "District added");
        setForm({
          countryId: "",
          stateId: "",
          code: "",
          name: "",
          is_active: true,
        });
        setEditingId(null);
        setStates([]);
        fetchDistricts();
      }
    } catch (err) {
      console.error("handleSubmit district error:", err);
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleCountryChange(id: string) {
    setForm((prev) => ({ ...prev, countryId: id, stateId: "" }));
    fetchStatesForCountry(id);
  }

  function handleEdit(item: DistrictItem) {
    const countryId =
      typeof item.country === "string"
        ? item.country
        : (item.country as CountryItem)?._id;
    const stateId =
      typeof item.state === "string"
        ? item.state
        : (item.state as StateItem)?._id;

    setForm({
      countryId: countryId || "",
      stateId: stateId || "",
      code: item.code,
      name: item.name,
      is_active: item.is_active,
    });
    setEditingId(item._id);

    if (countryId) {
      fetchStatesForCountry(countryId);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: DistrictItem) {
    const ok = confirm(
      `Are you sure you want to delete district "${item.name}"?`
    );
    if (!ok) return;

    try {
      const res = await fetch(`/api/settings/districts/${item._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({
            countryId: "",
            stateId: "",
            code: "",
            name: "",
            is_active: true,
          });
          setStates([]);
        }
        fetchDistricts();
      }
    } catch (err) {
      console.error("handleDelete district error:", err);
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({
      countryId: "",
      stateId: "",
      code: "",
      name: "",
      is_active: true,
    });
    setErrors({});
    setStates([]);
  }

  function getCountryName(item: DistrictItem) {
    if (!item.country) return "-";
    if (typeof item.country === "string") {
      const found = countries.find((c) => c._id === item.country);
      return found ? found.name : item.country;
    }
    return (item.country as CountryItem).name || "-";
  }

  function getStateName(item: DistrictItem) {
    if (!item.state) return "-";
    if (typeof item.state === "string") {
      const found = states.find((s) => s._id === item.state);
      return found ? found.name : item.state;
    }
    return (item.state as StateItem).name || "-";
  }

  return (
    <Fragment>
      <Seo title="District Master" />
      <Pageheader
        title="Settings"
        currentpage="District Master"
        activepage="Districts"
      />

      <Row>
        {/* LEFT: FORM */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit District" : "Add District"}
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
                      handleCountryChange(e.target.value)
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

                {/* State */}
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">State</Form.Label>
                  <Form.Select
                    value={form.stateId}
                    onChange={(e) =>
                      setForm({ ...form, stateId: e.target.value })
                    }
                    isInvalid={!!errors.stateId}
                    disabled={!form.countryId}
                  >
                    <option value="">
                      {form.countryId
                        ? "Select State"
                        : "Select Country first"}
                    </option>
                    {states.map((s) => (
                      <option key={s._id} value={s._id}>
                        {s.name} ({s.code})
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.stateId}
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
                      placeholder="Enter district code"
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
                      placeholder="Enter district name"
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
                    id="district-active-switch"
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
              <Card.Title>District List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover size="sm" className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Country</th>
                      <th>State</th>
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
                        <td colSpan={8} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : districts.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      districts.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{getCountryName(item)}</td>
                          <td>{getStateName(item)}</td>
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