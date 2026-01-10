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
};

type BrandItem = {
  _id: string;
  vaccine_id: { _id: string; name: string; code: string; };
  brand_name: string;
  manufacturer_id: { _id: string; name: string };
  dosage_form_id: { _id: string; name: string };
  storage_condition_id: { _id: string; code: string;  condition: string; };
  vial_type: string;
  is_active: boolean;
  createdAt?: string;
};

export default function VaccineBrandPage() {
  const [list, setList] = useState<BrandItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // dropdown masters
  const [vaccines, setVaccine] = useState<OptionItem[]>([]);
  const [manufacturers, setManufacturers] = useState<OptionItem[]>([]);
  const [doseTypes, setDoseTypes] = useState<OptionItem[]>([]);
  const [storages, setStorages] = useState<OptionItem[]>([]);

  // form (add + edit)
  const [form, setForm] = useState({
    vaccine_id: "",
    brand_name: "",
    manufacturer_id: "",
    antigen_composition: "",
    dosage_form_id: "",
    vial_type: "",
    storage_condition_id: "",
    is_active: true,
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});

  // search + pagination
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  /* ---------------- FETCH MASTERS ---------------- */
function extractList(res: any): any[] {
  if (!res?.status) return [];
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data?.items)) return res.data.items;
  return [];
}
  async function fetchMasters() {
  try {
    const [v, m, d, s] = await Promise.all([
      fetch("/api/settings/vaccines").then(r => r.json()),
      fetch("/api/settings/vaccine-manufacturers").then(r => r.json()),
      fetch("/api/settings/dose-types").then(r => r.json()),
      fetch("/api/settings/vaccine-storage-conditions").then(r => r.json()),
    ]);

    setVaccine(extractList(v));
    setManufacturers(extractList(m));
    setDoseTypes(extractList(d));
    setStorages(extractList(s));
    // setManufacturers(m?.data || []);
    //   setDoseTypes(d?.data || []);
    //   setStorages(s?.data || []);

console.log("Manufacturers:", m);
console.log("DoseTypes:", d);
console.log("Storages:", s);

  } catch (err) {
    console.error("fetchMasters error", err);
  }
}

  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/vaccine-brands");
      const data = await res.json();
      setList(data?.status ? data.data : []);
    } catch {
      toast.error("Failed to fetch vaccine brands");
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
    if (!form.vaccine_id.trim()) e.vaccine_id = "Vaccines required";
    if (!form.brand_name.trim()) e.brand_name = "Brand name required";
    if (!form.manufacturer_id) e.manufacturer_id = "Manufacturer required";
    if (!form.dosage_form_id) e.dosage_form_id = "Dosage form required";
    if (!form.vial_type.trim()) e.vial_type = "Vial type required";
    if (!form.storage_condition_id)
      e.storage_condition_id = "Storage required";

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
        ? `/api/settings/vaccine-brands/${editingId}`
        : "/api/settings/vaccine-brands";

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
        toast.success(editingId ? "Brand updated" : "Brand added");
        setForm({
          vaccine_id: "",
          brand_name: "",
          manufacturer_id: "",
          antigen_composition: "",
          dosage_form_id: "",
          vial_type: "",
          storage_condition_id: "",
          is_active: true,
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

  function handleEdit(item: BrandItem) {
    setForm({
      vaccine_id: item.vaccine_id._id,
      brand_name: item.brand_name,
      manufacturer_id: item.manufacturer_id._id,
      antigen_composition: "",
      dosage_form_id: item.dosage_form_id._id,
      vial_type: item.vial_type,
      storage_condition_id: item.storage_condition_id._id,
      is_active: item.is_active,
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: BrandItem) {
    if (!confirm(`Delete ${item.brand_name}?`)) return;
    await fetch(`/api/settings/vaccine-brands/${item._id}`, {
      method: "DELETE",
    });
    toast.success("Deleted");
    fetchList();
  }

  /* ---------------- SEARCH + PAGINATION ---------------- */

  const filtered = useMemo(() => {
    return list.filter(
      (b) =>
        b.brand_name.toLowerCase().includes(search.toLowerCase()) 
        // || b.vaccine_id.toLowerCase().includes(search.toLowerCase())
    );
  }, [list, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  /* ---------------- UI ---------------- */

  return (
    <Fragment>
      <Seo title="Vaccine Brand Settings" />
      <Pageheader
        title="Settings"
        currentpage="Vaccine Brands"
        activepage="Vaccine Brands"
      />

      <Row>
        {/* FORM */}
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit Vaccine Brand" : "Add Vaccine Brand"}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <Form.Label>Vaccine *</Form.Label>
                <Form.Select
                  className="mb-2"
                  value={form.vaccine_id}
                  onChange={(e) =>
                    setForm({ ...form, vaccine_id: e.target.value })
                  }
                  isInvalid={!!errors.vaccine_id}
                >
                  <option value="">Select Vaccine</option>
                  {vaccines.map((v) => (
                    <option key={v._id} value={v._id}>
                      {v.name}
                    </option>
                  ))}
                </Form.Select>

                  <Form.Label>Brand Name *</Form.Label>
                <Form.Control
                  className="mb-2"
                  placeholder="Brand Name"
                  value={form.brand_name}
                  onChange={(e) =>
                    setForm({ ...form, brand_name: e.target.value })
                  }
                  isInvalid={!!errors.brand_name}
                />

                  <Form.Label>Manufacturer *</Form.Label>
                <Form.Select
                  className="mb-2"
                  value={form.manufacturer_id}
                  onChange={(e) =>
                    setForm({ ...form, manufacturer_id: e.target.value })
                  }
                  isInvalid={!!errors.manufacturer_id}
                >
                  <option value="">Select Manufacturer</option>
                  {manufacturers.map((m) => (
                    <option key={m._id} value={m._id}>
                      {m.name}
                    </option>
                  ))}
                </Form.Select>
                  <Form.Label>Antigen Composition (optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-2"
                  placeholder="Antigen Composition (optional)"
                  value={form.antigen_composition}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      antigen_composition: e.target.value,
                    })
                  }
                />
                 <Form.Label>Dosage Form</Form.Label>
                <Form.Select
                  className="mb-2"
                  value={form.dosage_form_id}
                  onChange={(e) =>
                    setForm({ ...form, dosage_form_id: e.target.value })
                  }
                  isInvalid={!!errors.dosage_form_id}
                >
                  <option value="">Select Dosage Form</option>
                  {doseTypes.map((d) => (
                    <option key={d._id} value={d._id}>
                      {d.name}
                    </option>
                  ))}
                </Form.Select>
                  <Form.Label>Vial Type</Form.Label>
                <Form.Select
                  className="mb-2"
                  value={form.vial_type}
                  onChange={(e) =>
                    setForm({ ...form, vial_type: e.target.value })
                  }
                  isInvalid={!!errors.vial_type}
                >
                  <option value="">Select Vial Type</option>
                  <option value="Single">Single</option>
                  <option value="Multi-dose">Multi-dose</option>
                </Form.Select>

                <Form.Label>Storage Condition</Form.Label>
                <Form.Select
  value={form.storage_condition_id}
  onChange={(e) =>
    setForm({ ...form, storage_condition_id: e.target.value })
  }
  isInvalid={!!errors.storage_condition_id}
>
  <option value="">Select Storage Condition</option>
  {storages.map((s) => (
    <option key={s._id} value={s._id}>
      {s.condition}  ({s.code})   {/* ✅ CORRECT FIELD */}
    </option>
  ))}
</Form.Select>

                <Form.Check
                  type="switch"
                  label="Active"
                  checked={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: e.target.checked })
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
              <Card.Title>Vaccine Brand List</Card.Title>
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
                    <th>Brand</th>
                    <th>Vaccine</th>
                    <th>Manufacturer</th>
                    <th>Dosage</th>
                    <th>Vial</th>
                    <th>Status</th>
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
                  ) : paginated.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center">
                        No records found
                      </td>
                    </tr>
                  ) : (
                    paginated.map((b, i) => (
                      <tr key={b._id}>
                        <td>{(page - 1) * perPage + i + 1}</td>
                        <td>
                          {b.brand_name}
                        </td>
                        <td>
                            {b.vaccine_id.name}
                        </td>
                        <td>{b.manufacturer_id.name}</td>
                        <td>{b.dosage_form_id.name}</td>
                        <td>{b.vial_type}</td>
                        <td>{b.is_active ? "Active" : "Inactive"}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-1"
                            onClick={() => handleEdit(b)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(b)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>

              {/* PAGINATION */}
              <div className="d-flex justify-content-end gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm ${
                      page === i + 1
                        ? "btn-primary"
                        : "btn-outline-primary"
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
