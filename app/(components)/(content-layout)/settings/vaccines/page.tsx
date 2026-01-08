"use client";

import React, { Fragment, useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ================= TYPES ================= */

type Option = {
  _id: string;
  name?: string;
  title?: string;
  code?: string;
};

type VaccineItem = {
  _id: string;
  name: string;
  week_range_id: Option;
  dose_type_id: Option;
  vaccine_site_id: Option;
  createdAt?: string;
};

/* ================= COMPONENT ================= */

export default function VaccineSettingsPage() {
  const [list, setList] = useState<VaccineItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // masters
  const [weekRanges, setWeekRanges] = useState<Option[]>([]);
  const [doseTypes, setDoseTypes] = useState<Option[]>([]);
  const [vaccineSites, setVaccineSites] = useState<Option[]>([]);

  // form (add + edit)
  const [form, setForm] = useState({
    week_range_id: "",
    name: "",
    dose_type_id: "",
    vaccine_site_id: "",
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});

  // search + pagination
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  /* ================= FETCH ================= */

  async function fetchMasters() {
    try {
      const [wr, dt, vs] = await Promise.all([
        fetch("/api/settings/week-range").then(r => r.json()),
        fetch("/api/settings/dose-types").then(r => r.json()),
        fetch("/api/settings/vaccine-sites").then(r => r.json()),
      ]);

      setWeekRanges(wr?.data || []);
      setDoseTypes(dt?.data || []);
      setVaccineSites(vs?.data || []);
    } catch {
      toast.error("Failed to load dropdown masters");
    }
  }

  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/vaccines");
      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch vaccines");
        setList([]);
      } else {
        setList(Array.isArray(data.data) ? data.data : []);
      }
    } catch {
      toast.error("Server error while fetching vaccines");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMasters();
    fetchList();
  }, []);

  /* ================= VALIDATION ================= */

  function validate(): boolean {
    const e: any = {};

    if (!form.week_range_id) e.week_range_id = "Age (week range) is required";
    if (!form.name.trim()) e.name = "Vaccine name is required";
    if (!form.dose_type_id) e.dose_type_id = "Dose code is required";
    if (!form.vaccine_site_id) e.vaccine_site_id = "Note is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /* ================= SUBMIT ================= */

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setErrors({});
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = {
        week_range_id: form.week_range_id,
        name: form.name.trim(),
        dose_type_id: form.dose_type_id,
        vaccine_site_id: form.vaccine_site_id,
      };

      const url = editingId
        ? `/api/settings/vaccines/${editingId}`
        : "/api/settings/vaccines";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Operation failed");
      } else {
        toast.success(editingId ? "Vaccine updated" : "Vaccine added");
        setForm({
          week_range_id: "",
          name: "",
          dose_type_id: "",
          vaccine_site_id: "",
        });
        setEditingId(null);
        fetchList();
      }
    } catch {
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  /* ================= ACTIONS ================= */

  function handleEdit(item: VaccineItem) {
    setForm({
      week_range_id: item.week_range_id?._id || "",
      name: item.name,
      dose_type_id: item.dose_type_id?._id || "",
      vaccine_site_id: item.vaccine_site_id?._id || "",
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: VaccineItem) {
    const ok = confirm(`Delete "${item.name}"?`);
    if (!ok) return;

    try {
      const res = await fetch(
        `/api/settings/vaccines/${item._id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({
            week_range_id: "",
            name: "",
            dose_type_id: "",
            vaccine_site_id: "",
          });
        }
        fetchList();
      }
    } catch {
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({
      week_range_id: "",
      name: "",
      dose_type_id: "",
      vaccine_site_id: "",
    });
    setErrors({});
  }

  /* ================= SEARCH + PAGINATION ================= */

  const filteredList = useMemo(() => {
    if (!search.trim()) return list;

    return list.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.week_range_id?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.dose_type_id?.code?.toLowerCase().includes(search.toLowerCase()) ||
      item.vaccine_site_id?.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [list, search]);

  const totalPages = Math.ceil(filteredList.length / pageSize);

  const paginatedList = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredList.slice(start, start + pageSize);
  }, [filteredList, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  /* ================= RENDER ================= */

  return (
    <Fragment>
      <Seo title="Vaccine Settings" />
      <Pageheader title="Settings" currentpage="Vaccines" activepage="Vaccines" />

      <Row>
        {/* FORM */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>{editingId ? "Edit Vaccine" : "Add Vaccine"}</Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                {/* Age */}
                <div className="mb-3">
                  <Form.Label>Age (Week Range)</Form.Label>
                  <Form.Select
                    value={form.week_range_id}
                    onChange={(e) =>
                      setForm({ ...form, week_range_id: e.target.value })
                    }
                    isInvalid={!!errors.week_range_id}
                  >
                    <option value="">Select age</option>
                    {weekRanges.map(w => (
                      <option key={w._id} value={w._id}>
                        {w.title}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.week_range_id}
                  </Form.Control.Feedback>
                </div>

                {/* Name */}
                <div className="mb-3">
                  <Form.Label>Vaccine Name</Form.Label>
                  <Form.Control
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

                {/* Dose */}
                <div className="mb-3">
                  <Form.Label>Dose Code</Form.Label>
                  <Form.Select
                    value={form.dose_type_id}
                    onChange={(e) =>
                      setForm({ ...form, dose_type_id: e.target.value })
                    }
                    isInvalid={!!errors.dose_type_id}
                  >
                    <option value="">Select dose</option>
                    {doseTypes.map(d => (
                      <option key={d._id} value={d._id}>
                        {d.code || d.name}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.dose_type_id}
                  </Form.Control.Feedback>
                </div>

                {/* Site */}
                <div className="mb-3">
                  <Form.Label>Note (Vaccine Site)</Form.Label>
                  <Form.Select
                    value={form.vaccine_site_id}
                    onChange={(e) =>
                      setForm({ ...form, vaccine_site_id: e.target.value })
                    }
                    isInvalid={!!errors.vaccine_site_id}
                  >
                    <option value="">Select site</option>
                    {vaccineSites.map(v => (
                      <option key={v._id} value={v._id}>
                        {v.name}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.vaccine_site_id}
                  </Form.Control.Feedback>
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

        {/* TABLE */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="d-flex justify-content-between">
              <Card.Title>Vaccine List</Card.Title>
              <Form.Control
                style={{ maxWidth: 200 }}
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Dose</th>
                      <th>Site</th>
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
                    ) : paginatedList.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      paginatedList.map((item, idx) => (
                        <tr key={item._id}>
                          <td>{(page - 1) * pageSize + idx + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.week_range_id?.title}</td>
                          <td>{item.dose_type_id?.code}</td>
                          <td>{item.vaccine_site_id?.name}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-outline-primary"
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
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    className="btn btn-sm btn-light"
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                  >
                    Prev
                  </button>
                  <span className="align-self-center">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    className="btn btn-sm btn-light"
                    disabled={page === totalPages}
                    onClick={() => setPage(p => p + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
