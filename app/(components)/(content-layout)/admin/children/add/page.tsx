// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import { Card, Col, Row, Form, InputGroup } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
// import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";

// type Option = { value: string; label: string };

// function getAuthHeader() {
//   if (typeof window === "undefined") return {};
//   const token = localStorage.getItem("accessToken");
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

// export default function ChildAddEditPage() {
//   const router = useRouter();
//   const search = useSearchParams();
//   const editId = search?.get("id");

//   const [saving, setSaving] = useState(false);
//   const [lookupAadhaar, setLookupAadhaar] = useState("");
//   const [parentFound, setParentFound] = useState<any>(null);

//    // parent lookup
//    const [aadhaar, setAadhaar] = useState("");

//   const [genders, setGenders] = useState<Option[]>([]);
//   const [bloods, setBloods] = useState<Option[]>([]);

//   const [form, setForm] = useState<any>({
//     full_name: "",
//     dob: "",
//     gender_code: "",
//     blood_group_code: "",
//     birth_weight_kg: "",
//     birth_length_cm: "",
//     place_of_birth: "",
//     hospital_name: "",
//     birth_registration_id: "",
//     parent_ids: [],
//     primary_contact: "",
//     preferred_clinic_id: "",
//     notes: "",
//     consent_data_sharing: false,
//     photo_file: null,
//   });

//   useEffect(() => {
//     loadMasters();
//     if (editId) loadForEdit(editId);
//   }, [editId]);

//   async function loadMasters() {
//     const g = await fetch("/api/settings/genders");
//     const gj = await g.json();
//     if (gj?.status) {
//       setGenders(gj.data.map((x: any) => ({ value: x.code, label: x.name })));
//     }

//     const b = await fetch("/api/settings/blood-groups");
//     const bj = await b.json();
//     if (bj?.status) {
//       setBloods(bj.data.map((x: any) => ({ value: x.code, label: x.name })));
//     }
//   }

//   async function handleLookupParent() {
//     if (!/^\d{12}$/.test(lookupAadhaar)) {
//       toast.error("Valid 12 digit Aadhaar required");
//       return;
//     }

//     const res = await fetch("/api/admin/children/check-by-aadhaar", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ aadhaar: lookupAadhaar }),
//     });

//     const data = await res.json();
//     if (!data?.status) {
//       toast.error("Lookup failed");
//       return;
//     }

//     if (!data.data.found) {
//       toast.info("Parent not found. Redirecting...");
//       router.push("/admin/parents/add");
//       return;
//     }

//     const p = data.data.parent;
//     setParentFound(p);
//     setForm((f: any) => ({
//       ...f,
//       parent_ids: [p._id],
//       primary_contact: p.phone,
//     }));
//   }
//  async function loadForEdit(id: string) {
//     try {
//       const r = await fetch(`/api/admin/children/${id}`,
//          { headers: { "Content-Type": "application/json" }, });
//       const j = await r.json();
//       if (!j?.status) return toast.error("Failed to load child");

//       const c = j.data;
//       setParentFound(c.parent_ids?.[0] || null);

//       setForm({
//         ...form,
//         ...c,
//         dob: c.dob?.split("T")[0],
//         parent_ids: c.parent_ids?.map((p: any) => p._id || p) || [],
//       });
//     } catch {
//       toast.error("Load error");
//     }
//   }
//  /* =========================
//      PHOTO UPLOAD
//   ========================== */
//   async function uploadPhoto(file: File) {
//     const fd = new FormData();
//     fd.append("file", file);

//     const r = await fetch("/api/upload/child-photo", {
//       method: "POST",
//       body: fd,
//       headers: { "Content-Type": "application/json" },
//     });
//     const j = await r.json();
//     if (!j?.status) throw new Error("Upload failed");
//     return j.data.url;
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     if (!form.full_name) return toast.error("Child full name required");
//     if (!form.dob) return toast.error("DOB required");
//     if (!form.gender_code) return toast.error("Gender required");
//     if (!form.parent_ids.length) return toast.error("Parent required");

//     setSaving(true);
// try{
//     let photo = form.photo;

//     let photoUrl = "";
//     if (form.photo_file) {
//       const fd = new FormData();
//       fd.append("file", form.photo_file);

//       const up = await fetch("/api/upload/child-photo", {
//         method: "POST",
//         body: fd,
//         headers: { "Content-Type": "application/json" },
//       });

//       const uj = await up.json();
//       if (!uj?.status) {
//         toast.error("Photo upload failed");
//         setSaving(false);
//         return;
//       }
//       photoUrl = uj.data.url;
//     }

//     const payload = {
//       ...form,
//       photo: photoUrl || undefined,
//     };

//     const res = await fetch("/api/admin/children", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const out = await res.json();
//     if (!out?.status) {
//       toast.error(out.message || "Save failed");
//       setSaving(false);
//       return;
//     }
//     toast.success(editId ? "Child updated" : "Child saved successfully");
//   ////  router.push("/admin/children");

//       if (!editId) {
//         setForm({ ...form });
//         setParentFound(null);
//         setAadhaar("");
//       } else {
//         router.push("/admin/children");
//       }
//       } catch (e: any) {
//       toast.error(e.message || "Save failed");
//     } finally {
//       setSaving(false);
//     }
//   }

//   return (
//     <>
//       <Seo title="Add Child" />
//       <Pageheader title="Children" currentpage="Add Child" activepage="Add" />

//       <form onSubmit={handleSubmit}>
//         <Card className="custom-card">
//           <Card.Body>
//             <Row className="gy-3">
//               <Col xl={12}>
//                 <Form.Label>Parent Aadhaar</Form.Label>
//                 <InputGroup>
//                   <Form.Control value={lookupAadhaar} onChange={(e) => setLookupAadhaar(e.target.value)} />
//                   <button type="button" className="btn btn-outline-primary" onClick={handleLookupParent}>
//                     Lookup
//                   </button>
//                 </InputGroup>
//                 {parentFound && (
//                   <div className="mt-2 text-success">
//                     Found: {parentFound.first_name} {parentFound.last_name} ({parentFound.phone})
//                   </div>
//                 )}
//               </Col>

//               <Col xl={6}>
//                 <Form.Label>Full Name *</Form.Label>
//                 <Form.Control value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
//               </Col>

//               <Col xl={3}>
//                 <Form.Label>DOB *</Form.Label>
//                 <Form.Control type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
//               </Col>

//               <Col xl={3}>
//                 <Form.Label>Gender *</Form.Label>
//                 <Form.Select value={form.gender_code} onChange={(e) => setForm({ ...form, gender_code: e.target.value })}>
//                   <option value="">Select</option>
//                   {genders.map((g) => (
//                     <option key={g.value} value={g.value}>{g.label}</option>
//                   ))}
//                 </Form.Select>
//               </Col>
 

//               <Col xl={3}>
//                 <Form.Label>Blood Group</Form.Label>
//                 <Form.Select value={form.blood_group_code} onChange={(e) => setForm({ ...form, blood_group_code: e.target.value })}>
//                   <option value="">Select</option>
//                   {bloods.map((b) => (
//                     <option key={b.value} value={b.value}>{b.label}</option>
//                   ))}
//                 </Form.Select>
//               </Col>

//               <Col xl={3}>
//                 <Form.Label>Birth Weight (kg)</Form.Label>
//                 <Form.Control type="number" step="0.1" value={form.birth_weight_kg}
//                   onChange={e => setForm({ ...form, birth_weight_kg: e.target.value })} />
//               </Col>

//               <Col xl={3}>
//                 <Form.Label>Birth Length (cm)</Form.Label>
//                 <Form.Control type="number" value={form.birth_length_cm}
//                   onChange={e => setForm({ ...form, birth_length_cm: e.target.value })} />
//               </Col>

//               <Col xl={3}>
//                 <Form.Label>Place of Birth</Form.Label>
//                 <Form.Control value={form.place_of_birth}
//                   onChange={e => setForm({ ...form, place_of_birth: e.target.value })} />
//               </Col>

//               <Col xl={3}>
//                 <Form.Label>Hospital Name</Form.Label>
//                 <Form.Control value={form.hospital_name}
//                   onChange={e => setForm({ ...form, hospital_name: e.target.value })} />
//               </Col>

//               <Col xl={12}>
//                 <Form.Label>Notes</Form.Label>
//                 <Form.Control as="textarea" rows={3}
//                   value={form.notes}
//                   onChange={e => setForm({ ...form, notes: e.target.value })} />
//               </Col>
//               <Col xl={12}>
//                 <button type="submit" className="btn btn-primary" disabled={saving}>
//                   {saving ? "Saving..." : "Save Child"}
//                 </button>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//       </form>
//     </>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import ChildAuditTimeline from "@/app/(components)/(content-layout)/admin/children/audit/page";


/* ================= TYPES ================= */

type Option = { value: string; label: string };

interface ParentLite {
  _id: string;
  first_name: string;
  last_name: string;
  phone: string;
}

interface ChildForm {
  full_name: string;
  dob: string;
  gender_code: string;
  blood_group_code?: string;
  birth_weight_kg?: string | number;
  birth_length_cm?: string | number;
  place_of_birth?: string;
  hospital_name?: string;
  birth_registration_id?: string;
  parent_ids: string[];
  primary_contact?: string;
  preferred_clinic_id?: string;
  notes?: string;
  consent_data_sharing: boolean;
  photo_file?: File | null;
}

/* ================= AUTH ================= */
// helper to include admin token if available - TS-safe
  function getAuthHeader(): Record<string, string> {
    try {
      if (typeof window === "undefined") return {};
      const t = localStorage.getItem("accessToken") || "";
      const headers: HeadersInit = { "Content-Type": "application/json" };
    
      return t ? { Authorization: `Bearer ${t}` } : { };
    } catch {
      return {};
    }
  }

// function getAuthHeader() {
//   if (typeof window === "undefined") return {};
//   const token = localStorage.getItem("accessToken");
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

/* ================= COMPONENT ================= */

export default function ChildAddEditPage() {
  const router = useRouter();
  const search = useSearchParams();
  const editId = search.get("id");

  const [saving, setSaving] = useState(false);
  const [lookupAadhaar, setLookupAadhaar] = useState("");
  const [parentFound, setParentFound] = useState<ParentLite | null>(null);

  const [genders, setGenders] = useState<Option[]>([]);
  const [bloods, setBloods] = useState<Option[]>([]);

  const [form, setForm] = useState<ChildForm>({
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
    primary_contact: "",
    preferred_clinic_id: "",
    notes: "",
    consent_data_sharing: false,
    photo_file: null,
  });

  /* ================= LOAD MASTERS ================= */

  useEffect(() => {
    loadMasters();
    if (editId) loadForEdit(editId);
  }, [editId]);

  async function loadMasters() {
    const g = await fetch("/api/settings/genders");
    const gj = await g.json();
    if (gj?.status) {
      setGenders(gj.data.map((x: any) => ({ value: x.code, label: x.name })));
    }

    const b = await fetch("/api/settings/blood-groups");
    const bj = await b.json();
    if (bj?.status) {
      setBloods(bj.data.map((x: any) => ({ value: x.code, label: x.name })));
    }
  }

  /* ================= PARENT LOOKUP ================= */

  async function handleLookupParent() {
    if (!/^\d{4}-\d{4}-\d{4}$/.test(lookupAadhaar)) {
      toast.error("Aadhaar format: xxxx-xxxx-xxxx");
      return;
    }

    const res = await fetch("/api/admin/children/check-by-aadhaar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify({ aadhaar: lookupAadhaar }),
    });

    const data = await res.json();
    if (!data?.status) {
      toast.error("Lookup failed");
      return;
    }

    if (!data.data.found) {
      toast.info("Parent not found. Redirecting...");
      router.push("/admin/parents/add");
      return;
    }

    const p = data.data.parent;
    setParentFound(p);
    setForm(prev => ({
      ...prev,
      parent_ids: [p._id],
      primary_contact: p.phone,
    }));
  }

  /* ================= LOAD FOR EDIT ================= */

  async function loadForEdit(id: string) {
    try {
      const r = await fetch(`/api/admin/children/${id}`, {
        headers: { ...getAuthHeader() },
      });
      const j = await r.json();
      if (!j?.status) return toast.error("Failed to load child");

      const c = j.data;
      setParentFound(c.parent_ids?.[0] || null);

      setForm(prev => ({
        ...prev,
        ...c,
        dob: c.dob?.split("T")[0],
        parent_ids: c.parent_ids?.map((p: any) => p._id || p) || [],
      }));
    } catch {
      toast.error("Load error");
    }
  }

  /* ================= SUBMIT ================= */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.full_name || !form.dob || !form.gender_code)
      return toast.error("Required fields missing");

    if (!form.parent_ids.length)
      return toast.error("Parent required");

    setSaving(true);
    try {
      let photoUrl = "";

      if (form.photo_file) {
        const fd = new FormData();
        fd.append("file", form.photo_file);

        const up = await fetch("/api/upload/child-photo", {
          method: "POST",
          body: fd,
        });

        const uj = await up.json();
        if (!uj?.status) throw new Error("Photo upload failed");
        photoUrl = uj.data.url;
      }

      const payload = {
        ...form,
        photo: photoUrl || undefined,
      };

      const url = editId
        ? `/api/admin/children/${editId}`
        : "/api/admin/children";

      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
        body: JSON.stringify(payload),
      });

      const out = await res.json();
      if (!out?.status) throw new Error(out.message || "Save failed");

      toast.success(editId ? "Child updated" : "Child created");
      router.push("/admin/children");
    } catch (e: any) {
      toast.error(e.message || "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Seo title="Add Child" />
      <Pageheader title="Children" currentpage="Add Child" activepage="children" />

      <form onSubmit={handleSubmit}>
        <Card className="custom-card">
          <Card.Body>
            <Row className="gy-3">
              <Col xl={12}>
                <Form.Label>Parent Aadhaar</Form.Label>
                <InputGroup>
                  <Form.Control value={lookupAadhaar} onChange={(e) => setLookupAadhaar(e.target.value)} />
                  <button type="button" className="btn btn-outline-primary" onClick={handleLookupParent}>
                    Lookup
                  </button>
                </InputGroup>
                {parentFound && (
                  <div className="mt-2 text-success">
                    Found: {parentFound.first_name} {parentFound.last_name} ({parentFound.phone})
                  </div>
                )}
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
                <Form.Select value={form.gender_code} onChange={(e) => setForm({ ...form, gender_code: e.target.value })}>
                  <option value="">Select</option>
                  {genders.map((g) => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </Form.Select>
              </Col>
 

              <Col xl={3}>
                <Form.Label>Blood Group</Form.Label>
                <Form.Select value={form.blood_group_code} onChange={(e) => setForm({ ...form, blood_group_code: e.target.value })}>
                  <option value="">Select</option>
                  {bloods.map((b) => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </Form.Select>
              </Col>

              <Col xl={3}>
                <Form.Label>Birth Weight (kg)</Form.Label>
                <Form.Control type="number" step="0.1" value={form.birth_weight_kg}
                  onChange={e => setForm({ ...form, birth_weight_kg: e.target.value })} />
              </Col>

              <Col xl={3}>
                <Form.Label>Birth Length (cm)</Form.Label>
                <Form.Control type="number" value={form.birth_length_cm}
                  onChange={e => setForm({ ...form, birth_length_cm: e.target.value })} />
              </Col>

              <Col xl={3}>
                <Form.Label>Place of Birth</Form.Label>
                <Form.Control value={form.place_of_birth}
                  onChange={e => setForm({ ...form, place_of_birth: e.target.value })} />
              </Col>

              <Col xl={3}>
                <Form.Label>Hospital Name</Form.Label>
                <Form.Control value={form.hospital_name}
                  onChange={e => setForm({ ...form, hospital_name: e.target.value })} />
              </Col>

              <Col xl={12}>
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3}
                  value={form.notes}
                  onChange={e => setForm({ ...form, notes: e.target.value })} />
              </Col>
              <Col xl={12}>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving ? "Saving..." : "Save Child"}
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </form>

      {editId && (
          <ChildAuditTimeline childId={editId} />
        )}
    </>
  );
}

