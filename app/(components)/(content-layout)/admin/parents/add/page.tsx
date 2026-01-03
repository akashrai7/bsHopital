"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Option = { value: string; label: string };

export default function AdminAddEditParentPage() {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams?.get("id");

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  /* ================= MASTER DATA ================= */
  const [languages, setLanguages] = useState<Option[]>([]);
  const [relationships, setRelationships] = useState<Option[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);

  /* ================= UNIQUE STATUS ================= */
  const [emailStatus, setEmailStatus] = useState<"idle" | "checking" | "exists" | "ok">("idle");
  const [phoneStatus, setPhoneStatus] = useState<"idle" | "checking" | "exists" | "ok">("idle");
  const [aadhaarStatus, setAadhaarStatus] = useState<"idle" | "checking" | "exists" | "ok">("idle");

  /* ================= FORM ================= */
  const [form, setForm] = useState<any>({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    aadhaar: "",
    password: "",
    preferred_language: "",
    relationship_to_child: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      pincode: "",
      country: "",
      state: "",
      district: "",
    },
    national_id: "",
    profile_photo: "",
    profile_photo_file: null as File | null,
    consent_whatsapp: false,
    terms_accepted: false,
    admin_notes: "",
    is_active: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPincodeLocked, setIsPincodeLocked] = useState(false);
  /* ================= HELPERS ================= */

  function getAuthHeader(): Record<string, string> {
    try {
      const t = localStorage.getItem("accessToken");
      return t ? { Authorization: `Bearer ${t}` } : {};
    } catch {
      return {};
    }
  }

  /* ================= FETCH MASTERS ================= */

  async function fetchMasters() {
    try {
      const [l, r, c] = await Promise.all([
        fetch("/api/settings/languages"),
        fetch("/api/settings/relationship-types"),
        fetch("/api/settings/countries"),
      ]);

      const lang = await l.json();
      const rel = await r.json();
      const cou = await c.json();

      if (lang?.status)
        setLanguages(lang.data.map((x: any) => ({ value: x._id, label: `${x.name} (${x.code})` })));

      if (rel?.status)
        setRelationships(rel.data.map((x: any) => ({ value: x._id, label: x.name })));

      if (cou?.status) setCountries(cou.data || []);
    } catch {
      toast.error("Failed to load dropdowns");
    }
  }

  async function fetchStates(countryId?: string) {
    if (!countryId) return setStates([]);
    const r = await fetch(`/api/settings/states?countryId=${countryId}&activeOnly=true`);
    const j = await r.json();
    setStates(j?.status ? j.data : []);
  }

  async function fetchDistricts(stateId?: string) {
    if (!stateId) return setDistricts([]);
    const r = await fetch(`/api/settings/districts?stateId=${stateId}&activeOnly=true`);
    const j = await r.json();
    setDistricts(j?.status ? j.data : []);
  }

async function handlePincodeLookup(pincode: string) {
  if (!/^\d{6}$/.test(pincode)) return;

  const res = await fetch(`/api/settings/pincode-lookup?pincode=${pincode}`);
  const j = await res.json();

  if (!j.status) {
    toast.info("Pincode not found, please contact admin");
    setIsPincodeLocked(false);
    return;
  }

  const d = j.data;

  const countryId = d.country?._id?.toString() || "";
  const stateId =
    typeof d.state === "string"
      ? d.state
      : d.state?._id?.toString() || "";
  const districtId =
    typeof d.district === "string"
      ? d.district
      : d.district?._id?.toString() || "";

  // preload dropdowns
  if (countryId) await fetchStates(countryId);
  if (stateId) await fetchDistricts(stateId);

  setForm((prev: any) => ({
    ...prev,
    address: {
      ...prev.address,
      pincode,
      country: countryId,
      state: stateId,
      district: districtId,
    //  city: d.circlename || "",
    },
  }));

  setIsPincodeLocked(true);
  toast.success("Address auto-filled from pincode");
}


  // file input change
  function onPhotoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setForm((prev: any) => ({ ...prev, profile_photo_file: file, profile_photo: file ? "" : prev.profile_photo }));
  }
  /* ================= EDIT LOAD ================= */

  async function loadForEdit(id: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/parents/${id}`, { headers: getAuthHeader() });
      const j = await res.json();
      if (!j?.status) throw new Error();

      const p = j.data;
      const a = p.address || {};

      setForm({
        ...form,
        ...p,
        phone: String(p.phone || ""),
        preferred_language: p.preferred_language?._id || "",
        relationship_to_child: p.relationship_to_child?._id || "",
        password: "",
        address: {
          line1: a.line1 || "",
          line2: a.line2 || "",
          city: a.city || "",
          pincode: a.pincode || "",
          country: a.country?._id || "",
          state: a.state?._id || "",
          district: a.district?._id || "",
        },
      });

      if (a.country) await fetchStates(a.country._id || a.country);
      if (a.state) await fetchDistricts(a.state._id || a.state);
      if (a.pincode && String(a.pincode).length === 6) {
  handlePincodeLookup(String(a.pincode));
}

    } catch {
      toast.error("Failed to load parent");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMasters();
    if (editId) {
    loadForEdit(editId);
    fetchAuditLogs(editId); // 👈 ADD THIS

   
  }


    // eslint-disable-next-line
  }, [editId]);

  /* ================= UNIQUE CHECK ================= */

  async function checkUnique(type: "email" | "phone" | "aadhaar", value: string) {
    if (!value) return;
    try {
      const res = await fetch("/api/parents/check-unique", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeader() },
        body: JSON.stringify({ type, value, excludeId: editId || undefined }),
      });
      const j = await res.json();
      const exists = j?.data?.exists;

      if (type === "email") setEmailStatus(exists ? "exists" : "ok");
      if (type === "phone") setPhoneStatus(exists ? "exists" : "ok");
      if (type === "aadhaar") setAadhaarStatus(exists ? "exists" : "ok");
    } catch {
      setEmailStatus("idle");
      setPhoneStatus("idle");
      setAadhaarStatus("idle");
    }
  }

  /* ================= VALIDATION ================= */

  function validateForm() {
    const e: Record<string, string> = {};
    const name = /^[A-Za-z\- ]{1,80}$/;

    if (!form.first_name || !name.test(form.first_name)) e.first_name = "Invalid first name";
    if (!form.last_name || !name.test(form.last_name)) e.last_name = "Invalid last name";

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone || !/^[0-9]{7,15}$/.test(form.phone)) e.phone = "Invalid phone";
    if (form.aadhaar && !/^\d{12}$/.test(form.aadhaar)) e.aadhaar = "Invalid Aadhaar";

    if (!editId && (!form.password || form.password.length < 8))
      e.password = "Password must be at least 8 characters";

    if (!form.relationship_to_child) e.relationship_to_child = "Relationship required";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /* ================= SUBMIT ================= */
/*
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return toast.error("Fix validation errors");

    setSaving(true);
    try {
      const payload: any = {
        ...form,
        phone: form.phone.replace(/\D/g, ""),
        ...(form.password ? { password: form.password } : {}),
      };

      delete payload.profile_photo_file;

      const res = await fetch(
        editId ? `/api/admin/parents/${editId}` : "/api/admin/create-parent",
        {
          method: editId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json", ...getAuthHeader() },
          body: JSON.stringify(payload),
        }
      );

      const j = await res.json();
      if (!j?.status) throw new Error();

      toast.success(editId ? "Parent updated" : "Parent created");
      router.push("/admin/parents");
    } catch {
      toast.error("Save failed");
    } finally {
      setSaving(false);
    }
  }
*/

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  if (!validateForm()) return toast.error("Fix validation errors");

  setSaving(true);
  try {
    const fd = new FormData();

    // simple fields
    fd.append("first_name", form.first_name);
    fd.append("middle_name", form.middle_name);
    fd.append("last_name", form.last_name);
    fd.append("email", form.email);
    fd.append("phone", form.phone.replace(/\D/g, ""));
    fd.append("aadhaar", form.aadhaar || "");
    fd.append("preferred_language", form.preferred_language || "");
    fd.append("relationship_to_child", form.relationship_to_child || "");
    fd.append("national_id", form.national_id || "");
    fd.append("admin_notes", form.admin_notes || "");
    fd.append("is_active", String(form.is_active));
    fd.append("consent_whatsapp", String(form.consent_whatsapp));
    fd.append("terms_accepted", String(form.terms_accepted));

    if (form.password) {
      fd.append("password", form.password);
    }

    // address
    fd.append("address[line1]", form.address.line1 || "");
    fd.append("address[line2]", form.address.line2 || "");
    fd.append("address[country]", form.address.country || "");
    fd.append("address[state]", form.address.state || "");
    fd.append("address[district]", form.address.district || "");
    fd.append("address[city]", form.address.city || "");
    fd.append("address[pincode]", form.address.pincode || "");

    // ✅ FILE (MOST IMPORTANT)
    if (form.profile_photo_file) {
      fd.append("profile_photo", form.profile_photo_file);
    }

    const res = await fetch(
      editId ? `/api/admin/parents/${editId}` : "/api/admin/create-parent",
      {
        method: editId ? "PUT" : "POST",
        headers: {
          ...getAuthHeader(), // ❌ Content-Type mat do
        },
        body: fd,
      }
    );

    const j = await res.json();
    if (!j?.status) throw new Error();

    toast.success(editId ? "Parent updated" : "Parent created");
    router.push("/admin/parents");
  } catch (err) {
    toast.error("Save failed");
  } finally {
    setSaving(false);
  }
}

  // log function
const [auditLogs, setAuditLogs] = useState<any[]>([]);
const [auditLoading, setAuditLoading] = useState(false);
async function fetchAuditLogs(parentId: string) {
  setAuditLoading(true);
  try {
    const res = await fetch(
      `/api/admin/parents/${parentId}/audit`,
      { headers: getAuthHeader() }
    );
    const data = await res.json();
    if (data?.status) {
      setAuditLogs(data.data || []);
    }
  } catch (err) {
    console.error("fetchAuditLogs error", err);
  } finally {
    setAuditLoading(false);
  }
}

function renderValue(value: any) {
  if (value === null || value === undefined) return "-";

  if (typeof value === "object") {
    // address object case
    if (value.line1 || value.pincode) {
      return [
        value.line1,
        value.line2,
        value.city,
        value.district?.name || value.district,
        value.state?.name || value.state,
        value.country?.name || value.country,
        value.pincode,
      ]
        .filter(Boolean)
        .join(", ");
    }

    // generic object fallback
    return JSON.stringify(value);
  }

  return String(value);
}


  return (
    <Fragment>
      <Seo title={editId ? "Edit Parent" : "Add Parent"} />
      <Pageheader title="Parents" currentpage={editId ? "Edit Parent" : "Add Parent"} activepage="add" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>{editId ? "Edit Parent" : "Add Parent"}</Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <Row className="gy-3">


                  {/* email / phone / aadhaar */}
                  <Col xl={4}>
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setEmailStatus("idle"); }}
                      onBlur={(e) => checkUnique("email", e.target.value)}
                      isInvalid={!!errors.email || emailStatus === "exists"}
                    />
                    {emailStatus === "checking" && <small className="text-warning">Checking email...</small>}
                    {emailStatus === "exists" && <small className="text-danger">Email already registered</small>}
                    {emailStatus === "ok" && <small className="text-success">Email available</small>}
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); setPhoneStatus("idle"); }}
                      onBlur={(e) => checkUnique("phone", e.target.value)}
                      isInvalid={!!errors.phone || phoneStatus === "exists"}
                    />
                    {phoneStatus === "checking" && <small className="text-warning">Checking phone...</small>}
                    {phoneStatus === "exists" && <small className="text-danger">Phone already registered</small>}
                    {phoneStatus === "ok" && <small className="text-success">Phone available</small>}
                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Aadhaar *</Form.Label>
                    <Form.Control
                      value={form.aadhaar}
                      onChange={(e) => { setForm({ ...form, aadhaar: e.target.value }); setAadhaarStatus("idle"); }}
                      onBlur={(e) => checkUnique("aadhaar", e.target.value)}
                      isInvalid={!!errors.aadhaar || aadhaarStatus === "exists"}
                      maxLength={12}
                    />
                    {aadhaarStatus === "checking" && <small className="text-warning">Checking Aadhaar...</small>}
                    {aadhaarStatus === "exists" && <small className="text-danger">Aadhaar already registered</small>}
                    {aadhaarStatus === "ok" && <small className="text-success">Aadhaar available</small>}
                    <Form.Control.Feedback type="invalid">{errors.aadhaar}</Form.Control.Feedback>
                  </Col>

                  {/* names */}
                  <Col xl={4}>
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control
                      value={form.first_name}
                      onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                      isInvalid={!!errors.first_name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      value={form.middle_name}
                      onChange={(e) => setForm({ ...form, middle_name: e.target.value })}
                    />
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control
                      value={form.last_name}
                      onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                      isInvalid={!!errors.last_name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
                  </Col>

                  {/* password (admin only on create) */}
                  {!editId && (
                    <Col xl={6}>
                      <Form.Label>Password *</Form.Label>
                      <Form.Control
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        isInvalid={!!errors.password}
                        placeholder="Min 8 chars, include uppercase, lowercase, digit"
                      />
                      <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Col>
                  )}

                  {/* Relationship (fixed) */}

<Col xl={6}>
  <Form.Label>Relationship *</Form.Label>

  {/* quick TS bypass: treat SpkSelect props as any so onChange allowed */}
  <SpkSelect
  {...({
    option: relationships,
    value: relationships.find(r => r.value === form.relationship_to_child) || null,
    onChange: (opt: any) =>
      setForm((prev: any) => ({ ...prev, relationship_to_child: opt?.value || "" })),
    placeholder: "Select relationship",
    classNameprefix: "Select2",
  } as any)}
/>

  {errors.relationship_to_child && <div className="text-danger small mt-1">{errors.relationship_to_child}</div>}
</Col>

                  {/* Preferred Language (fixed) */}
<Col xl={6}>
  <Form.Label>Preferred Language</Form.Label>
  <SpkSelect
  {...({
    option: languages,
    value: languages.find(l => l.value === form.preferred_language) || null,
    onChange: (opt: any) =>
      setForm((prev: any) => ({ ...prev, preferred_language: opt?.value || "" })),
    placeholder: "Select language",
  } as any)}
/>
</Col>
            
{/* ================= ADDRESS ================= */}
<Col xl={12}>
  <Form.Label className="fw-semibold">Address</Form.Label>
</Col>

<Col xl={6}>
  <Form.Label>Address Line 1</Form.Label>
  <Form.Control
    value={form.address.line1}
    onChange={(e) =>
      setForm({
        ...form,
        address: { ...form.address, line1: e.target.value },
      })
    }
  />
</Col>

<Col xl={6}>
  <Form.Label>Address Line 2</Form.Label>
  <Form.Control
    value={form.address.line2}
    onChange={(e) =>
      setForm({
        ...form,
        address: { ...form.address, line2: e.target.value },
      })
    }
  />
</Col>

<Col xl={4}>
  <Form.Label>Pincode</Form.Label>
  <Form.Control
    value={form.address.pincode}
    maxLength={6}
    onChange={(e) => {
  const val = e.target.value.replace(/\D/g, "");

  setForm((prev: any) => ({
    ...prev,
    address: { ...prev.address, pincode: val },
  }));

  // 👇 CLEAR CASE
  if (val.length < 6) {
    setForm((prev: any) => ({
      ...prev,
      address: {
        ...prev.address,
        pincode: val,
        country: "",
        state: "",
        district: "",
        city: "",
      },
    }));
    setStates([]);
    setDistricts([]);
    return;
  }

  // 👇 LOOKUP CASE
  handlePincodeLookup(val);
}
  }
    isInvalid={!!errors.pincode}
    placeholder="Enter 6 digit pincode"
  />
  <Form.Control.Feedback type="invalid">
    {errors.pincode}
  </Form.Control.Feedback>
</Col>

<Col xl={4}>
  <Form.Label>Country</Form.Label>
  <Form.Select
    value={form.address.country || ""}
    disabled={isPincodeLocked || form.address.country || !form.address.country}
    onChange={(e) => {
      const countryId = e.target.value;
      setForm({
        ...form,
        address: {
          ...form.address,
          country: countryId,
          state: "",
          district: "",
        },
      });
      setStates([]);
      setDistricts([]);
      if (countryId) fetchStates(countryId);
    }}
  >
    <option value="">Select Country</option>
    {countries.map((c) => (
      <option key={c._id} value={c._id}>
        {c.name} ({c.code})
      </option>
    ))}
  </Form.Select>
</Col>
{/* disabled={!form.address.country} */}
<Col xl={4}>
  <Form.Label>State</Form.Label>
  <Form.Select
    value={form.address.state || ""}
    disabled={isPincodeLocked || form.address.state || !form.address.state }
    onChange={(e) => {
      const stateId = e.target.value;

      setForm((prev:any) => ({
        ...prev,
        address: {
          ...prev.address,
          state: stateId,
          district: "",
        },
      }));

      setDistricts([]);
      if (stateId) fetchDistricts(stateId);
    }}
  >
    <option value="">
      {form.address.country ? "Select State" : "Select Country first"}
    </option>

    {states.map((s) => (
      <option key={s._id} value={String(s._id)}>
        {s.name} ({s.code})
      </option>
    ))}
  </Form.Select>
</Col>


<Col xl={4}>
  <Form.Label>District</Form.Label>
  <Form.Select
    value={form.address.district || ""}
    disabled={form.address.state || !form.address.district || form.address.district || isPincodeLocked} 
    onChange={(e) =>
      setForm({
        ...form,
        address: { ...form.address, district: e.target.value },
      })
    }
  >
    <option value="">
      {form.address.state ? "Select District" : "Select State first"}
    </option> 
    {districts.map((d) => (
      <option key={d._id} value={d._id}>
        {d.name} ({d.code})
      </option>
    ))}
  </Form.Select>
</Col>
<Col xl={4}>
  <Form.Label>City</Form.Label>
  <Form.Control
  value={form.address.city}
  onChange={(e) =>
    setForm({
      ...form,
      address: { ...form.address, city: e.target.value },
    })
  }
  placeholder="City / Area"
/>
</Col>


{/* ================= END ADDRESS ================= */}

                  {/* national id */}
                  <Col xl={6}>
                    <Form.Label>Gov. ID (national_id)</Form.Label>
                    <Form.Control
                      value={form.national_id}
                      onChange={(e) => setForm({ ...form, national_id: e.target.value })}
                    />
                  </Col>

                  {/* profile photo */}
                  <Col xl={6}>
                    <Form.Label>Profile Photo</Form.Label>
                    <InputGroup>
                      <Form.Control type="file" accept="image/*" onChange={onPhotoFileChange} />
                    </InputGroup>
                    {form.profile_photo && !form.profile_photo_file && (
                      <div className="mt-2">
                        <img src={form.profile_photo} alt="photo" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6 }} />
                      </div>
                    )}
                    {form.profile_photo_file && (
                      <div className="mt-2">
                        <small className="text-muted">Ready to upload: { (form.profile_photo_file as File).name }</small>
                      </div>
                    )}
                  </Col>

                  {/* consent & terms */}
                  <Col xl={6} className="mt-2">
                    <Form.Check
                      type="checkbox"
                      id="consent_whatsapp"
                      label="I consent to receive WhatsApp reminders and messages."
                      checked={!!form.consent_whatsapp}
                      onChange={(e) => setForm({ ...form, consent_whatsapp: e.target.checked })}
                    />
                  </Col>

                  <Col xl={6} className="mt-2">
                    <Form.Check
                      type="checkbox"
                      id="terms_accept"
                      label="I accept Terms & Privacy"
                      checked={!!form.terms_accepted}
                      onChange={(e) => setForm({ ...form, terms_accepted: e.target.checked })}
                    />
                  </Col>

                  {/* admin notes */}
                  <Col xl={12}>
                    <Form.Label>Admin Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={form.admin_notes}
                      onChange={(e) => setForm({ ...form, admin_notes: e.target.value })}
                    />
                  </Col>

                  {/* active toggle */}
                  <Col xl={12}>
                    <Form.Check
                      type="switch"
                      id="is_active"
                      label={form.is_active ? "Active" : "Inactive"}
                      checked={!!form.is_active}
                      onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                    />
                  </Col>

                  <Col xl={12} className="mt-3">
                    <SpkButton
                      Buttontype="submit"
                      Customclass="btn btn-primary"
                      Disabled={saving || loading}
                    >
                      {saving ? (editId ? "Updating..." : "Saving...") : (editId ? "Update Parent" : "Save Parent")}
                    </SpkButton>
                    <button type="button" className="btn btn-light ms-2" onClick={() => router.push("/admin/parents")}>
                      Cancel
                    </button>
                  </Col>
                </Row>
              </form>

              
            </Card.Body>
          </Card>
        </Col>
      </Row>
{/* <Row>
<Col>
<Card className="mt-4">
  <Card.Header>
    <Card.Title>Audit History</Card.Title>
  </Card.Header>
  {/* <Card.Body>
    {auditLoading && <div className="text-muted">Loading audit history…</div>}

    {!auditLoading && auditLogs.length === 0 && (
      <div className="text-muted">No history available.</div>
    )}

    {auditLogs.map((log: any) => (
      <div key={log._id} className="mb-3">
          <div className="fw-semibold">
          {log.action}
          <small className="text-muted ms-2">
            {new Date(log.createdAt).toLocaleString()}
          </small>
        </div>

        {Object.keys(log.changes || {}).length > 0 && (
          <ul className="mt-2">
            {Object.entries(log.changes).map(([field, val]: any) => (
              <li key={field}>
                <strong>{field}</strong> :
                <span className="text-muted ms-1">
                  {String(val.old ?? "-")} → {String(val.new ?? "-")}
                </span>
              </li>
            ))}
          </ul>
          
        )}
      </div>

      
    ))}

    
  </Card.Body> */}
 {/*</Fragment><Card.Body>
    <div className="audit-timeline">
  {auditLogs.map(log => (
    <div key={log._id} className="audit-item d-flex mb-3">
      
    
      <div className="me-3">
        <span
          className={`audit-dot bg-${
            log.action === "CREATE"
              ? "success"
              : log.action === "DELETE"
              ? "danger"
              : "primary"
          }`}
        />
      </div>

      
      <div>
        <div className="fw-semibold">
          {log.action}
          <small className="text-muted ms-2">
            {new Date(log.createdAt).toLocaleString()}
          </small>
        </div>

        <ul className="small mt-1">
          {Object.entries(log.changes).map(([field, val]: any) => (
          <li key={field}>
            <strong>{field}</strong> :
             {field === "address" ? (
              <div className="small text-muted">
                <div>Old: {renderValue(val.old)}</div>
                <div>New: {renderValue(val.new)}</div>
              </div>
            ) : (
          <span>
            <span className="text-danger ms-1">{val.old?.label ?? val.old}</span>
              {" → "}
              <span className="text-success">{val.new?.label ?? val.new}</span>
          </span>
          )}
          </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

  </Card.Body>
</Card>
</Col>
</Row> */}
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}