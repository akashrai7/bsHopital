"use client";

import React, { useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams, useRouter } from "next/navigation";

type Option = { value: string; label: string };

function getAuthHeader() {
  try {
    const t = typeof window !== "undefined" ? (localStorage.getItem("accessToken") || "") : "";
    return t ? { Authorization: `Bearer ${t}` } : {};
  } catch {
    return {};
  }
}

export default function ChildAddEditPage() {
  const search = useSearchParams();
  const editId = search?.get("id") || null;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // parent lookup
  const [lookupAadhaar, setLookupAadhaar] = useState("");
  const [parentFound, setParentFound] = useState<any>(null);

  // masters
  const [genders, setGenders] = useState<Option[]>([]);
  const [bloods, setBloods] = useState<Option[]>([]);
  const [parentsOptions, setParentsOptions] = useState<Option[]>([]);

  // form
  const [form, setForm] = useState<any>({
    full_name: "",
    dob: "",
    gender_code: "",
    blood_group_code: "",
    birth_weight_kg: "",
    birth_length_cm: "",
    place_of_birth: "",
    hospital_name: "",
    birth_registration_id: "",
    parent_ids: [],
    photo: "",
    primary_contact: "",
    preferred_clinic_id: "",
    notes: "",
    consent_data_sharing: false,
  });

  useEffect(() => {
    // load masters and parents list
    fetchMasters();
    if (editId) loadForEdit(editId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  async function fetchMasters() {
    try {
      const g = await fetch("/api/settings/genders");
      const gj = await g.json();
      if (gj?.status) setGenders((gj.data || []).map((x: any) => ({ value: x.code, label: `${x.name} (${x.code})` })));

      const b = await fetch("/api/settings/blood-groups");
      const bj = await b.json();
      if (bj?.status) setBloods((bj.data || []).map((x: any) => ({ value: x.code, label: `${x.name} (${x.code})` })));

      // parents for selection
      const p = await fetch("/api/admin/parents?page=1&limit=200", { headers: { ...(getAuthHeader() as any) } });
      const pj = await p.json();
      if (pj?.status) {
        setParentsOptions((pj.data.data || []).map((r: any) => ({ value: r._id, label: `${r.first_name} ${r.last_name} (${r.parent_uid})` })));
      }
    } catch (err) {
      console.error("fetchMasters", err);
    }
  }

  async function loadForEdit(id: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/children/${id}`, { headers: { ...(getAuthHeader() as any) } });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to load child");
        return;
      }
      const c = data.data;
      setForm({
        full_name: c.full_name || "",
        dob: c.dob ? c.dob.split("T")[0] : "",
        gender_code: c.gender_code || "",
        blood_group_code: c.blood_group_code || "",
        birth_weight_kg: c.birth_weight_kg || "",
        birth_length_cm: c.birth_length_cm || "",
        place_of_birth: c.place_of_birth || "",
        hospital_name: c.hospital_name || "",
        birth_registration_id: c.birth_registration_id || "",
        parent_ids: (c.parent_ids || []).map((p: any) => (typeof p === "object" ? p._id : p)),
        photo: c.photo || "",
        primary_contact: c.primary_contact || "",
        preferred_clinic_id: c.preferred_clinic_id || "",
        notes: c.notes || "",
        consent_data_sharing: !!c.consent_data_sharing,
      });
    } catch (err) {
      console.error("loadForEdit", err);
      toast.error("Failed to load child");
    } finally {
      setLoading(false);
    }
  }

  async function handleLookupParent() {
    const v = (lookupAadhaar || "").toString().trim();
    if (!/^\d{12}$/.test(v)) {
      toast.error("Enter valid 12-digit Aadhaar");
      return;
    }
    try {
      const res = await fetch("/api/parents/check-by-aadhaar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aadhaar: v }),
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error("Lookup failed");
        return;
      }
      if (!data.data?.found) {
        toast.info("Parent not found. Redirecting to Add Parent page.");
        router.push("/admin/parents/add");
        return;
      }
      const p = data.data.parent;
      setParentFound(p);
      // prefill primary contact and default parent_ids
      setForm((prev: any) => ({
        ...prev,
        primary_contact: p.phone || prev.primary_contact,
        parent_ids: [p._id],
      }));
      toast.success("Parent found and prefilling contact/parent selection.");
    } catch (err) {
      console.error("lookup parent", err);
      toast.error("Lookup error");
    }
  }

  // photo upload handler — uses your existing upload endpoint for parent-photo or create /api/upload/child-photo
  async function handlePhotoFile(file?: File | null) {
    if (!file) return "";
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/upload/child-photo", {
        method: "POST",
        body: fd,
        headers: { ...(getAuthHeader() as any) }, // if required
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error("Upload failed");
        return "";
      }
      return data.data.url;
    } catch (err) {
      console.error("photo upload", err);
      toast.error("Upload failed");
      return "";
    }
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    // basic client validation
    if (!form.full_name || form.full_name.length > 100) {
      toast.error("Enter valid full name (1-100 chars)");
      return;
    }
    if (!form.dob) {
      toast.error("Enter DOB");
      return;
    }
    if (!form.gender_code) {
      toast.error("Select gender");
      return;
    }
    if (!form.parent_ids || form.parent_ids.length === 0) {
      toast.error("At least one parent required");
      return;
    }

    setSaving(true);
    try {
      // if photo file present in form.profile_photo_file, upload first
      let photoUrl = form.photo;
      if ((form as any).photo_file instanceof File) {
        const up = await handlePhotoFile((form as any).photo_file);
        if (up) photoUrl = up;
        else { setSaving(false); return; }
      }

      const payload: any = {
        full_name: form.full_name,
        dob: form.dob,
        gender_code: form.gender_code,
        blood_group_code: form.blood_group_code || undefined,
        birth_weight_kg: form.birth_weight_kg || undefined,
        birth_length_cm: form.birth_length_cm || undefined,
        place_of_birth: form.place_of_birth || undefined,
        hospital_name: form.hospital_name || undefined,
        birth_registration_id: form.birth_registration_id || undefined,
        parent_ids: form.parent_ids,
        photo: photoUrl || undefined,
        primary_contact: form.primary_contact || undefined,
        preferred_clinic_id: form.preferred_clinic_id || undefined,
        notes: form.notes || undefined,
        consent_data_sharing: !!form.consent_data_sharing,
      };

      const url = editId ? `/api/admin/children/${editId}` : `/api/admin/children`;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(getAuthHeader() as any),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Operation failed");
        return;
      }
      toast.success(editId ? "Child updated" : "Child created");
      router.push("/admin/children");
    } catch (err) {
      console.error("submit child", err);
      toast.error("Server error");
    } finally {
      setSaving(false);
    }
  }

  // file change
  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setForm((prev: any) => ({ ...prev, photo_file: f, photo: f ? "" : prev.photo }));
  }

  return (
    <>
      <Seo title={editId ? "Edit Child" : "Add Child"} />
      <Pageheader title="Children" currentpage={editId ? "Edit Child" : "Add Child"} activepage="Children" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">{editId ? "Edit Child" : "Add Child"}</div>
            </Card.Header>
            <Card.Body>
              <Row className="gy-3">
                {/* Parent lookup */}
                <Col xl={12}>
                  <Form.Label>Parent Aadhaar (lookup)</Form.Label>
                  <InputGroup>
                    <Form.Control value={lookupAadhaar} onChange={(e) => setLookupAadhaar(e.target.value)} placeholder="Enter parent's Aadhaar (12 digits)" />
                    <button type="button" className="btn btn-outline-primary" onClick={handleLookupParent}>Lookup</button>
                  </InputGroup>
                  {parentFound && <div className="mt-2"><strong>Found:</strong> {parentFound.first_name} {parentFound.last_name} — {parentFound.phone}</div>}
                </Col>

                <Col xl={6}>
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                </Col>

                <Col xl={3}>
                  <Form.Label>DOB *</Form.Label>
                  <Form.Control type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
                </Col>

                <Col xl={3}>
                  <Form.Label>Gender *</Form.Label>
                  <SpkSelect
                    option={genders}
                    defaultvalue={genders.find((g) => g.value === form.gender_code) ? [genders.find((g) => g.value === form.gender_code)] : []}
                    onChange={(opt: any) => setForm({ ...form, gender_code: opt?.value || "" })}
                    classNameprefix="Select2"
                    menuplacement="auto"
                  />
                </Col>

                <Col xl={3}>
                  <Form.Label>Blood Group</Form.Label>
                  <SpkSelect
                    option={bloods}
                    defaultvalue={bloods.find((b) => b.value === form.blood_group_code) ? [bloods.find((b) => b.value === form.blood_group_code)] : []}
                    onChange={(opt: any) => setForm({ ...form, blood_group_code: opt?.value || "" })}
                    classNameprefix="Select2"
                    menuplacement="auto"
                  />
                </Col>

                <Col xl={3}>
                  <Form.Label>Birth Weight (kg)</Form.Label>
                  <Form.Control type="number" step="0.1" value={form.birth_weight_kg} onChange={(e) => setForm({ ...form, birth_weight_kg: e.target.value })} />
                </Col>

                <Col xl={3}>
                  <Form.Label>Birth Length (cm)</Form.Label>
                  <Form.Control type="number" value={form.birth_length_cm} onChange={(e) => setForm({ ...form, birth_length_cm: e.target.value })} />
                </Col>

                <Col xl={3}>
                  <Form.Label>Place of Birth</Form.Label>
                  <Form.Control value={form.place_of_birth} onChange={(e) => setForm({ ...form, place_of_birth: e.target.value })} />
                </Col>

                <Col xl={3}>
                  <Form.Label>Hospital Name</Form.Label>
                  <Form.Control value={form.hospital_name} onChange={(e) => setForm({ ...form, hospital_name: e.target.value })} />
                </Col>

                <Col xl={4}>
                  <Form.Label>Parent(s) *</Form.Label>
                  <SpkSelect
                    option={parentsOptions}
                    defaultvalue={(parentsOptions.filter((p) => form.parent_ids.includes(p.value)) as any) || []}
                    onChange={(opt: any) => {
                      // SpkSelect may return single or array depending on config; normalize to array of ids
                      const vals = Array.isArray(opt) ? opt.map((x) => x.value) : (opt ? [opt.value] : []);
                      setForm({ ...form, parent_ids: vals });
                    }}
                    classNameprefix="Select2"
                    menuplacement="auto"
                  />
                </Col>

                <Col xl={4}>
                  <Form.Label>Primary Contact</Form.Label>
                  <Form.Control value={form.primary_contact} onChange={(e) => setForm({ ...form, primary_contact: e.target.value })} />
                </Col>

                <Col xl={4}>
                  <Form.Label>Preferred Clinic ID</Form.Label>
                  <Form.Control value={form.preferred_clinic_id} onChange={(e) => setForm({ ...form, preferred_clinic_id: e.target.value })} />
                </Col>

                <Col xl={6}>
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={onPhotoChange} />
                  {form.photo && <div className="mt-2"><img src={form.photo} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6 }} alt="child" /></div>}
                </Col>

                <Col xl={6}>
                  <Form.Label>Birth Registration ID</Form.Label>
                  <Form.Control value={form.birth_registration_id} onChange={(e) => setForm({ ...form, birth_registration_id: e.target.value })} />
                </Col>

                <Col xl={12}>
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                </Col>

                <Col xl={12} className="mt-3">
                  <SpkButton Buttontype="submit" Customclass="btn btn-primary" Disabled={saving || loading} onClick={() => handleSubmit()}>
                    {saving ? (editId ? "Updating..." : "Saving...") : (editId ? "Update Child" : "Save Child")}
                  </SpkButton>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
नोट: मैंने SpkSelect के साथ defaultvalue/onChange pattern रखा — अगर आपके SpkSelect typing में onChange नहीं है तो वही as any वर्कअराउंड लगा लें जैसा हमने पहले किया था.

7) Frontend List page — /app/admin/children/page.tsx
(Same pattern as parents list; basic prev/next pagination, edit/delete)

tsx
Copy code
"use client";

import React, { useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table, Form, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

function getAuthHeader() {
  try {
    const t = typeof window !== "undefined" ? (localStorage.getItem("accessToken") || "") : "";
    return t ? { Authorization: `Bearer ${t}` } : {};
  } catch { return {}; }
}

export default function AdminChildrenListPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchList(p = 1, search = "") {
    setLoading(true);
    try {
      const qs = new URLSearchParams();
      qs.set("page", String(p));
      qs.set("limit", String(limit));
      if (search) qs.set("search", search);
      const res = await fetch(`/api/admin/children?${qs.toString()}`, { headers: { ...(getAuthHeader() as any) } });
      const data = await res.json();
      if (!data?.status) { toast.error(data?.message || "Failed to fetch"); setRows([]); setTotal(0); return; }
      setRows(data.data.data || []);
      setTotal(data.data.total || 0);
      setPage(data.data.page || p);
    } catch (err) {
      console.error("fetch children", err);
      toast.error("Server error");
    } finally { setLoading(false); }
  }

  useEffect(() => { fetchList(1, ""); }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete child?")) return;
    try {
      const res = await fetch(`/api/admin/children/${id}`, { method: "DELETE", headers: { ...(getAuthHeader() as any) } });
      const data = await res.json();
      if (!data?.status) { toast.error(data?.message || "Delete failed"); return; }
      toast.success("Deleted");
      fetchList(page, q);
    } catch (err) { console.error(err); toast.error("Server error"); }
  }

  return (
    <>
      <Seo title="Children - List" />
      <Pageheader title="Children" currentpage="Children" activepage="Children" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div><Card.Title>Children</Card.Title><small className="text-muted">Total: {total}</small></div>
              <div className="d-flex gap-2">
                <InputGroup>
                  <Form.Control placeholder="Search by name/child id/contact" value={q} onChange={(e) => setQ(e.target.value)} />
                  <button className="btn btn-outline-secondary" onClick={() => fetchList(1, q)}>Search</button>
                </InputGroup>
                <Link href="/admin/children/add"><a><SpkButton Buttonvariant="primary" Customclass="btn">Add Child</SpkButton></a></Link>
              </div>
            </Card.Header>

            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead>
                    <tr><th>Child ID</th><th>Name</th><th>DOB</th><th>Gender</th><th>Parents</th><th>Contact</th><th className="text-end">Actions</th></tr>
                  </thead>
                  <tbody>
                    {loading ? <tr><td colSpan={7} className="text-center py-4">Loading...</td></tr> :
                      rows.length === 0 ? <tr><td colSpan={7} className="text-center py-4">No children</td></tr> :
                      rows.map((r) => (
                        <tr key={r._id}>
                          <td>{r.child_id}</td>
                          <td>{r.full_name}</td>
                          <td>{r.dob ? new Date(r.dob).toLocaleDateString() : "-"}</td>
                          <td>{r.gender_code}</td>
                          <td>{(r.parent_ids || []).map((p: any) => p.first_name + " " + (p.last_name||"")).join(", ")}</td>
                          <td>{r.primary_contact || "-"}</td>
                          <td className="text-end">
                            <Link href={`/admin/children/add?id=${r._id}`}><a className="btn btn-sm btn-outline-primary me-2">Edit</a></Link>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(r._id)}>Delete</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </div>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-between">
              <div><small className="text-muted">Showing {rows.length} of {total}</small></div>
              <div>
                <SpkButton Buttonvariant="light" Customclass="btn btn-sm me-2" onClick={() => fetchList(Math.max(1, page - 1), q)}>Prev</SpkButton>
                <SpkButton Buttonvariant="light" Customclass="btn btn-sm" onClick={() => fetchList(page + 1, q)}>Next</SpkButton>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}