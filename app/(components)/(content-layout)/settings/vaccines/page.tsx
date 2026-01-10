"use client";

import React, { Fragment, useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type OptionItem = {
  _id: string;
  name: string;
  title?: string;
};

type VaccineItem = {
  _id: string;
  name: string;
  vaccine_code: string;
  week_range_id: { _id: string; title: string };
  dose_type_id: { _id: string; name: string };
  vaccine_site_id: { _id: string; name: string };
  pathogen_type: string;
  disease_description: string;
  is_mandatory: boolean;
  status: string;
  createdAt?: string;
};

export default function VaccinePage() {
  const [list, setList] = useState<VaccineItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // dropdown masters
  const [weekRanges, setWeekRanges] = useState<OptionItem[]>([]);
  const [doseTypes, setDoseTypes] = useState<OptionItem[]>([]);
  const [sites, setSites] = useState<OptionItem[]>([]);

  // form (add + edit)
  const [form, setForm] = useState({
    week_range_id: "",
    name: "",
    vaccine_code: "",
    dose_type_id: "",
    vaccine_site_id: "",
    pathogen_type: "",
    disease_description: "",
    is_mandatory: false,
    status: "active",
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});

  // search + pagination
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  /* ---------------- FETCH MASTERS ---------------- */

  async function fetchMasters() {
    try {
      const [wr, dt, vs] = await Promise.all([
        fetch("/api/settings/week-range").then(r => r.json()),
        fetch("/api/settings/dose-types").then(r => r.json()),
        fetch("/api/settings/vaccine-sites").then(r => r.json()),
      ]);

      setWeekRanges(wr?.data || []);
      setDoseTypes(dt?.data || []);
      setSites(vs?.data || []);
    } catch {
      toast.error("Failed to load dropdown masters");
    }
  }

  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/vaccines");
      const data = await res.json();
      setList(data?.status ? data.data : []);
    } catch {
      toast.error("Failed to fetch vaccines");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMasters();
    fetchList();
  }, []);

  /* ---------------- VALIDATION ---------------- */

  function validate() {
    const e: any = {};
    if (!form.week_range_id) e.week_range_id = "Age is required";
    if (!form.name.trim()) e.name = "Vaccine name required";
    if (!form.vaccine_code.trim()) e.vaccine_code = "Vaccine code required";
    if (!form.dose_type_id) e.dose_type_id = "Dose code required";
    if (!form.vaccine_site_id) e.vaccine_site_id = "Site required";
    if (!form.pathogen_type) e.pathogen_type = "Pathogen type required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /* ---------------- SUBMIT ---------------- */

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const url = editingId
        ? `/api/settings/vaccines/${editingId}`
        : "/api/settings/vaccines";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Operation failed");
      } else {
        toast.success(editingId ? "Vaccine updated" : "Vaccine added");
        setForm({
          week_range_id: "",
          name: "",
          vaccine_code: "",
          dose_type_id: "",
          vaccine_site_id: "",
          pathogen_type: "",
          disease_description: "",
          is_mandatory: false,
          status: "active",
        });
        setEditingId(null);
        fetchList();
      }
    } catch {
      toast.error("Server error");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: VaccineItem) {
    setForm({
      week_range_id: item.week_range_id._id,
      name: item.name,
      vaccine_code: item.vaccine_code,
      dose_type_id: item.dose_type_id._id,
      vaccine_site_id: item.vaccine_site_id._id,
      pathogen_type: item.pathogen_type,
      disease_description: item.disease_description,
      is_mandatory: item.is_mandatory,
      status: item.status,
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: VaccineItem) {
    if (!confirm(`Delete ${item.name}?`)) return;
    await fetch(`/api/settings/vaccines/${item._id}`, { method: "DELETE" });
    toast.success("Deleted");
    fetchList();
  }

  /* ---------------- SEARCH + PAGINATION ---------------- */

  const filtered = useMemo(() => {
    return list.filter(
      (v) =>
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.vaccine_code.toLowerCase().includes(search.toLowerCase())
    );
  }, [list, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  /* ---------------- UI ---------------- */

  return (
    <Fragment>
      <Seo title="Vaccine Settings" />
      <Pageheader title="Settings" currentpage="Vaccines" activepage="Vaccines" />

      <Row>
        {/* FORM */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>{editingId ? "Edit Vaccine" : "Add Vaccine"}</Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <Form.Select
                  className="mb-2"
                  value={form.week_range_id}
                  onChange={(e) =>
                    setForm({ ...form, week_range_id: e.target.value })
                  }
                  isInvalid={!!errors.week_range_id}
                >
                  <option value="">Select Age (Week Range)</option>
                  {weekRanges.map((w) => (
                    <option key={w._id} value={w._id}>
                      {w.title}
                    </option>
                  ))}
                </Form.Select>

                <Form.Control
                  className="mb-2"
                  placeholder="Vaccine Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  isInvalid={!!errors.name}
                />

                <Form.Control
                  className="mb-2"
                  placeholder="Vaccine Code"
                  value={form.vaccine_code}
                  onChange={(e) =>
                    setForm({ ...form, vaccine_code: e.target.value })
                  }
                  isInvalid={!!errors.vaccine_code}
                />

                <Form.Select
                  className="mb-2"
                  value={form.dose_type_id}
                  onChange={(e) =>
                    setForm({ ...form, dose_type_id: e.target.value })
                  }
                  isInvalid={!!errors.dose_type_id}
                >
                  <option value="">Select Dose Code</option>
                  {doseTypes.map((d) => (
                    <option key={d._id} value={d._id}>
                      {d.name}
                    </option>
                  ))}
                </Form.Select>

                <Form.Select
                  className="mb-2"
                  value={form.pathogen_type}
                  onChange={(e) =>
                    setForm({ ...form, pathogen_type: e.target.value })
                  }
                  isInvalid={!!errors.pathogen_type}
                >
                  <option value="">Select pathogen type</option>
                  <option value="Virus">Virus</option>
                  <option value="Bacteria">Bacteria</option>
                </Form.Select>

                   <Form.Control
                      as="textarea"
                      rows={2}
                      className="mb-2"
                      placeholder="Disease description"
                      value={form.disease_description}
                      onChange={(e) =>
                      setForm({ ...form, disease_description: e.target.value })
                      }
                  />

                <Form.Select
                  className="mb-3"
                  value={form.vaccine_site_id}
                  onChange={(e) =>
                    setForm({ ...form, vaccine_site_id: e.target.value })
                  }
                  isInvalid={!!errors.vaccine_site_id}
                >
                  <option value="">Select Vaccine Site</option>
                  {sites.map((s) => (
                    <option key={s._id} value={s._id}>
                      {s.name}
                    </option>
                  ))}
                </Form.Select>

                <Form.Check
                  type="switch"
                  label="Mandatory Vaccine"
                  checked={form.is_mandatory}
                  onChange={(e) =>
                    setForm({ ...form, is_mandatory: e.target.checked })
                  }
                />

                <Form.Check
                  type="switch"
                  label="Active Status"
                  checked={form.status === "active"}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.checked ? "active" : "inactive",
                    })
                  }
                  className="mb-3"
                />

                <SpkButton Buttontype="submit" Disabled={submitting}>
                  {editingId ? "Update" : "Save"}
                </SpkButton>
              </form>
            </Card.Body>
          </Card>
        </Col>

        {/* TABLE */}
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Vaccine List</Card.Title>
              <Form.Control
                size="sm"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Card.Header>
            <Card.Body>
              <Table bordered size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Vaccine</th>
                    <th>Age</th>
                    <th>Dose</th>
                    <th>Site</th>
                    <th>Pathogen</th>
                    <th>Description</th>
                    <th>Mandatory</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((v, i) => (
                    <tr key={v._id}>
                      <td>{(page - 1) * perPage + i + 1}</td>
                      <td>({v.vaccine_code}) {v.name}</td>
                      <td>{v.week_range_id.title}</td>
                      <td>{v.dose_type_id.name}</td>
                      <td>{v.vaccine_site_id.name}</td>
                      <td>{v.pathogen_type}</td>
                      <td>{v.disease_description}</td>
                      <td>{v.is_mandatory ? "Yes" : "No"}</td>
                      <td>{v.status}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary me-1"
                          onClick={() => handleEdit(v)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(v)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* PAGINATION */}
              <div className="d-flex justify-content-end gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm ${
                      page === i + 1 ? "btn-primary" : "btn-outline-primary"
                    }`}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
