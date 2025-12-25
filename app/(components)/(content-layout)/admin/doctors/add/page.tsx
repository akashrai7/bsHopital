// "use client";

// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Form } from "react-bootstrap";
// import { useRouter, useSearchParams } from "next/navigation";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
// import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
// import { toast } from "react-toastify";

// /* ---------------- TYPES ---------------- */

// type Option = { value: string; label: string };

// type DoctorForm = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   aadhaar: string;
//   password?: string;

//   medical_registration_number: string;
//   registration_council: string;
//   qualifications: string;
//   specialty?: string;
//   years_experience: string;

//   country: string;
//   state: string;
//   district: string;
//   city: string;

//   clinic_id: string;
//   license_document: string;
//   profile_photo: string;

//   service_fee: string;
//   bio: string;
//   is_active: boolean;
// };

// /* ---------------- AUTH HEADER ---------------- */

// function getAuthHeader(): HeadersInit {
//   const token =
//     typeof window !== "undefined"
//       ? localStorage.getItem("accessToken")
//       : null;
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

// /* ================= COMPONENT ================= */

// export default function DoctorAddEditPage() {
//   const router = useRouter();
//   const search = useSearchParams();
//   const editId = search.get("id");

//   const [saving, setSaving] = useState(false);
//   const [checking, setChecking] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   /* -------- Masters -------- */
//   const [countries, setCountries] = useState<Option[]>([]);
//   const [states, setStates] = useState<Option[]>([]);
//   const [districts, setDistricts] = useState<Option[]>([]);
//   const [specialties, setSpecialties] = useState<Option[]>([]);

//   /* -------- Form -------- */
//   const [form, setForm] = useState<DoctorForm>({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     aadhaar: "",
//     password: "",

//     medical_registration_number: "",
//     registration_council: "",
//     qualifications: "",
//     specialty: "",
//     years_experience: "",

//     country: "",
//     state: "",
//     district: "",
//     city: "",

//     clinic_id: "",
//     license_document: "",
//     profile_photo: "",

//     service_fee: "",
//     bio: "",
//     is_active: true,
//   });

//   /* ================= LOAD ================= */

//   useEffect(() => {
//     loadMasters();
//     if (editId) loadDoctor(editId);
//   }, [editId]);

//   async function loadMasters() {
//     const [c, s, d, sp] = await Promise.all([
//       fetch("/api/settings/countries"),
//       fetch("/api/settings/states"),
//       fetch("/api/settings/districts"),
//       fetch("/api/settings/specialties"),
//     ]);

//     setCountries((await c.json()).data.map((x: any) => ({ value: x._id, label: x.name })));
//     setStates((await s.json()).data.map((x: any) => ({ value: x._id, label: x.name })));
//     setDistricts((await d.json()).data.map((x: any) => ({ value: x._id, label: x.name })));
//     setSpecialties((await sp.json()).data.map((x: any) => ({ value: x.code, label: x.name })));
//   }

//   async function loadDoctor(id: string) {
//     const res = await fetch(`/api/admin/doctors/${id}`, {
//       headers: { ...getAuthHeader() },
//     });
//     const j = await res.json();
//     if (j.status) setForm(j.data);
//   }

//   /* ================= UPLOAD ================= */

//   async function upload(file: File) {
//     const fd = new FormData();
//     fd.append("file", file);
//     const res = await fetch("/api/upload/doctor", {
//       method: "POST",
//       body: fd,
//     });
//     const j = await res.json();
//     return j.data.url;
//   }

//   /* ================= VALIDATION ================= */

//   function validate(): boolean {
//     const e: Record<string, string> = {};

//     if (!form.first_name) e.first_name = "First name required";
//     if (!form.last_name) e.last_name = "Last name required";
//     if (!form.email) e.email = "Email required";
//     if (!form.phone) e.phone = "Phone required";
//     if (!form.aadhaar) e.aadhaar = "Aadhaar required";
//     if (!editId && !form.password) e.password = "Password required";

//    // if (!form.specialty) e.specialty = "Specialty required";
//     if (!form.medical_registration_number)
//       e.medical_registration_number = "Medical registration number required";
//     if (!form.registration_council)
//       e.registration_council = "Registration council required";
//     if (!form.qualifications) e.qualifications = "Qualifications required";
//     if (!form.license_document) e.license_document = "License document required";

//     setErrors(e);
//     if (Object.keys(e).length) {
//       toast.error(Object.values(e)[0]);
//       return false;
//     }
//     return true;
//   }

//   async function handleFileUpload(
//   e: React.ChangeEvent<any>,
//   field: "profile_photo" | "license_document"
// ) {
//   const input = e.target as HTMLInputElement;
//   const file = input.files?.[0];
//   if (!file) return;

//   const url = await upload(file);

//   setForm(prev => ({
//     ...prev,
//     [field]: url,
//   }));
// }

//   /* ================= SUBMIT ================= */

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!validate()) return;

//     setSaving(true);

//     const payload: any = { ...form };
//     if (editId && !payload.password) delete payload.password;

//     const res = await fetch(
//       editId ? `/api/admin/doctors/${editId}` : "/api/admin/doctors",
//       {
//         method: editId ? "PUT" : "POST",
//         credentials: "include", // 🔥 VERY IMPORTANT
//         headers: {
//           "Content-Type": "application/json",
//           ...getAuthHeader(),
//         },
//         body: JSON.stringify(payload),
        
//       }
//     );
//     console.log("ROLE =", payload.role);

//     const j = await res.json();
//     setSaving(false);

//     if (!j.status) {
//       if (j.errors) {
//         setErrors(j.errors);
//         toast.error(String(Object.values(j.errors)[0]));
//       } else {
//         toast.error(j.message || "Failed");
//       }
//       return;
//     }

//     toast.success(editId ? "Doctor updated" : "Doctor added");
//     router.push("/admin/doctors");
//   }

  

  

//   /* ================= UI ================= */

//   return (
//     <>
//       <Seo title="Doctor" />
//       <Pageheader title="Doctors" currentpage="Doctor Form" activepage="Doctors" />

//       <form onSubmit={handleSubmit}>
//         <Card className="custom-card">
//           <Card.Header>
//             <div className="card-title">
//               {editId ? "Edit Doctor" : "Add Doctor"}
//             </div>
//           </Card.Header>

//           <Card.Body>
//             <Row className="gy-3">

//               {/* BASIC */}
//               <Col xl={4}><Form.Control placeholder="Aadhaar *" value={form.aadhaar} onChange={e=>setForm({...form,aadhaar:e.target.value})}/></Col>
//               <Col xl={4}><Form.Control placeholder="Phone *" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></Col>
//               <Col xl={4}><Form.Control placeholder="Email *" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></Col>

//               <Col xl={6}><Form.Control placeholder="First Name *" value={form.first_name} onChange={e=>setForm({...form,first_name:e.target.value})}/></Col>
//               <Col xl={6}><Form.Control placeholder="Last Name *" value={form.last_name} onChange={e=>setForm({...form,last_name:e.target.value})}/></Col>

//               {!editId && (
//                 <Col xl={6}>
//                     <Form.Label>Password *</Form.Label>
//                   <Form.Control type="password" placeholder="Password *"
//                     value={form.password}
//                     onChange={e=>setForm({...form,password:e.target.value})}/>
//                 </Col>
//               )}

//  <Col xl={6}>
//   <Form.Label>Specialty *</Form.Label>

//   <SpkSelect
//     key={form.specialty}   // 🔴 VERY IMPORTANT
//     option={specialties}
//     defaultvalue={
//       specialties.find(s => s.value === form.specialty)
//         ? [specialties.find(s => s.value === form.specialty)!]
//         : []
//     }
//     {...({
//       onChange: (o: any) => {
//         const val = Array.isArray(o) ? o[0]?.value : o?.value;

//         setForm(prev => ({
//           ...prev,
//           specialty: val || "",
//         }));

//         // error clear
//         setErrors(prev => {
//           const e = { ...prev };
//           delete e.specialty;
//           return e;
//         });
//       },
//     } as any)}
//     classNameprefix="Select2"
//     menuplacement="auto"
//   />

//   {errors.specialty && (
//     <small className="text-danger">{errors.specialty}</small>
//   )}
// </Col>




//               {/* MEDICAL */}
//               <Col xl={4}><Form.Control placeholder="Medical Reg No *" value={form.medical_registration_number} onChange={e=>setForm({...form,medical_registration_number:e.target.value})}/></Col>
//               <Col xl={4}><Form.Control placeholder="Registration Council *" value={form.registration_council} onChange={e=>setForm({...form,registration_council:e.target.value})}/></Col>
//               <Col xl={4}><Form.Control placeholder="Qualifications *" value={form.qualifications} onChange={e=>setForm({...form,qualifications:e.target.value})}/></Col>

//               {/* FILES */}
//               <Col xl={6}>
//                   <Form.Control type="file" accept="image/*" onChange={e => handleFileUpload(e, "profile_photo")} />
//               </Col>

//               <Col xl={6}>
//                   <Form.Control type="file" accept=".pdf,.jpg,.png" onChange={e => handleFileUpload(e, "license_document")} />
//               </Col>

//               {/* Address */}
              
//               <Col xl={3}><SpkSelect option={countries}
//                 defaultvalue={countries.filter(c=>c.value===form.country)}
//                 {...({ onChange:(o:any)=>setForm({...form,country:o?.value}) } as any)} /></Col>

//               <Col xl={3}><SpkSelect option={states}
//                 defaultvalue={states.filter(s=>s.value===form.state)}
//                 {...({ onChange:(o:any)=>setForm({...form,state:o?.value}) } as any)} /></Col>

//               <Col xl={3}><SpkSelect option={districts}
//                 defaultvalue={districts.filter(d=>d.value===form.district)}
//                 {...({ onChange:(o:any)=>setForm({...form,district:o?.value}) } as any)} /></Col>

//               <Col xl={3}><Form.Control placeholder="City"
//                 value={form.city}
//                 onChange={e=>setForm({...form,city:e.target.value})} /></Col>

//               {/* Bio */}
//               <Col xl={12}>
//                 <Form.Control as="textarea" rows={3} placeholder="Bio (max 500 chars)"
//                   value={form.bio}
//                   onChange={e=>setForm({...form,bio:e.target.value})} />
//               </Col>

//               {/* Active */}
//               <Col xl={12}>
//                 <Form.Check type="switch" label="Active"
//                   checked={form.is_active}
//                   onChange={e=>setForm({...form,is_active:e.target.checked})} />
//               </Col>

//               <Col xl={12}>
//                 <SpkButton Buttontype="submit" Customclass="btn btn-primary" Disabled={saving || checking}>
//                   {saving ? "Saving..." : editId ? "Update Doctor" : "Save Doctor"}
//                 </SpkButton>
//               </Col>

//             </Row>
//           </Card.Body>
//         </Card>
//       </form>
//     </>
//   );
// }

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

type Option = { value: string; label: string; [k: string]: any };

export default function AdminAddEditDoctorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams?.get("id") || null;

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // dropdown data
  const [languages, setLanguages] = useState<Option[]>([]);
  const [specialty, setSpecialty] = useState<Option[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);

  // runtime uniqueness status
  const [emailStatus, setEmailStatus] = useState<"idle" | "checking" | "exists" | "ok">("idle");
  const [phoneStatus, setPhoneStatus] = useState<"idle" | "checking" | "exists" | "ok">("idle");
  const [aadhaarStatus, setAadhaarStatus] = useState<"idle" | "checking" | "exists" | "ok">("idle");

  // form state
  const [form, setForm] = useState<any>({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    aadhaar: "",
    password: "", // admin provides password when creating
    preferred_language: "",
    specialty: "",
    address: { line1: "", line2: "", city: "", pincode: "", country: "", state: "", district: "" },
    national_id: "",
    profile_photo: "", // url
    profile_photo_file: null as File | null,
    consent_whatsapp: false,
    terms_accepted: false,
    admin_notes: "",
    is_active: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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

  // fetch dropdown masters
  async function fetchMasters() {
    try {
      // languages
      const langRes = await fetch("/api/settings/languages");
      const langJson = await langRes.json();
      if (langJson?.status) {
        setLanguages((langJson.data || []).map((l: any) => ({ value: l._id, label: `${l.name} (${l.code})` })));
      }

      // specialty master
      const relRes = await fetch("/api/settings/specialties");
      const relJson = await relRes.json();
      if (relJson?.status) {
        setSpecialty((relJson.data || []).map((r: any) => ({ value: r._id, label: `${r.name} (${r.code || ""})` })));
      }

      // countries
      const cRes = await fetch("/api/settings/countries");
      const cJson = await cRes.json();
      if (cJson?.status) {
        setCountries(cJson.data || []);
      }
    } catch (err) {
      console.error("fetchMasters error", err);
      toast.error("Failed to load dropdown data");
    }
  }

  // fetch states (active only)
  async function fetchStatesForCountry(countryId?: string) {
    if (!countryId) {
      setStates([]);
      return;
    }
    try {
      const res = await fetch(`/api/settings/states?countryId=${countryId}&activeOnly=true`);
      const data = await res.json();
      if (data?.status) setStates(data.data || []);
      else setStates([]);
    } catch (err) {
      console.error("fetchStatesForCountry", err);
      setStates([]);
    }
  }

  // fetch districts for state
  async function fetchDistrictsForState(stateId?: string) {
    if (!stateId) {
      setDistricts([]);
      return;
    }
    try {
      const res = await fetch(`/api/settings/districts?stateId=${stateId}&activeOnly=true`);
      const data = await res.json();
      if (data?.status) setDistricts(data.data || []);
      else setDistricts([]);
    } catch (err) {
      console.error("fetchDistrictsForState", err);
      setDistricts([]);
    }
  }

  // load for edit
  async function loadForEdit(id: string) {
    setLoading(true);
    try {
      const headers: HeadersInit = {};
      const auth = getAuthHeader();
      if (auth.Authorization) (headers as Record<string, string>)["Authorization"] = auth.Authorization;

      const res = await fetch(`/api/admin/doctors/${id}`, { headers });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to load doctor");
        return;
      }
      const p = data.data;
      // normalize address if needed
      const address = p.address || {};
      setForm((prev: any) => ({
        ...prev,
        first_name: p.first_name || "",
        middle_name: p.middle_name || "",
        last_name: p.last_name || "",
        email: p.email || "",
        phone: p.phone || "",
        aadhaar: p.aadhaar || "",
        password: "", // keep empty for edit
        preferred_language: p.preferred_language?._id || p.preferred_language || "",
        specialty: p.specialty?._id || p.specialty || "",
        address: {
          line1: address.line1 || "",
          line2: address.line2 || "",
          city: address.city || "",
          pincode: address.pincode || "",
          country: address.country?._id || address.country || "",
          state: address.state?._id || address.state || "",
          district: address.district?._id || address.district || "",
        },
        national_id: p.national_id || "",
        profile_photo: p.profile_photo || "",
        consent_whatsapp: !!p.consent_whatsapp,
        terms_accepted: !!p.terms_accepted,
        admin_notes: p.admin_notes || "",
        is_active: typeof p.is_active === "boolean" ? p.is_active : true,
      }));

      // fetch the states and districts cascade if country/state present
      if (p.address?.country) {
        const countryId = typeof p.address.country === "object" ? p.address.country._id : p.address.country;
        await fetchStatesForCountry(countryId);
      }
      if (p.address?.state) {
        const stateId = typeof p.address.state === "object" ? p.address.state._id : p.address.state;
        await fetchDistrictsForState(stateId);
      }
    } catch (err) {
      console.error("loadForEdit", err);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMasters();
    if (editId) loadForEdit(editId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  // runtime uniqueness check
  async function checkUnique(type: "email" | "phone" | "aadhaar", value: string) {
    if (!value || value.trim() === "") return;
    if (type === "email") setEmailStatus("checking");
    if (type === "phone") setPhoneStatus("checking");
    if (type === "aadhaar") setAadhaarStatus("checking");
    try {
      const headers: HeadersInit = { "Content-Type": "application/json" };
      const auth = getAuthHeader();
      if (auth.Authorization) (headers as Record<string, string>)["Authorization"] = auth.Authorization;

      const res = await fetch("/api/admin/doctors/check-unique", {
        method: "POST",
        headers,
        body: JSON.stringify({ type, value }),
      });
      const data = await res.json();
      if (data?.data?.exists) {
        if (type === "email") setEmailStatus("exists");
        if (type === "phone") setPhoneStatus("exists");
        if (type === "aadhaar") setAadhaarStatus("exists");
      } else {
        if (type === "email") setEmailStatus("ok");
        if (type === "phone") setPhoneStatus("ok");
        if (type === "aadhaar") setAadhaarStatus("ok");
      }
    } catch (err) {
      console.error("checkUnique error", err);
      if (type === "email") setEmailStatus("idle");
      if (type === "phone") setPhoneStatus("idle");
      if (type === "aadhaar") setAadhaarStatus("idle");
    }
  }

  // validation
  function validateForm(): boolean {
    const e: Record<string, string> = {};
    const nameRegex = /^[A-Za-z\- ]{1,80}$/;
    if (!form.first_name || !nameRegex.test(form.first_name)) e.first_name = "First name required (1-80 letters/hyphen).";
    if (!form.last_name || !nameRegex.test(form.last_name)) e.last_name = "Last name required (1-80 letters/hyphen).";

    // email conditional recommended
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email format.";

    // phone basic check E.164-ish
    if (!form.phone || !/^\+?[0-9]{7,15}$/.test(form.phone)) e.phone = "Phone required in digits (E.164-ish).";

    // aadhaar
    if (form.aadhaar && !/^\d{12}$/.test(form.aadhaar)) e.aadhaar = "Aadhaar must be 12 digits.";

    // password only required when creating new (admin provides or set-password flow)
    if (!editId) {
      const pw = form.password || "";
      if (!pw || pw.length < 8 || !/[A-Z]/.test(pw) || !/[a-z]/.test(pw) || !/[0-9]/.test(pw)) {
        e.password = "Password must be min 8 chars, include uppercase, lowercase and digit.";
      }
    }

    // specialty required
    if (!form.specialty) e.specialty = "Specialty is required.";

    // pincode digits if provided
    if (form.address?.pincode && !/^[0-9]{4,10}$/.test(form.address.pincode)) e.pincode = "Invalid pincode.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // upload photo
  async function handlePhotoUpload(file?: File | null) {
    if (!file) return "";
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      toast.error("Invalid image type (jpg/png)");
      return "";
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Max size 5MB");
      return "";
    }

    const fd = new FormData();
    fd.append("file", file);

    try {
      const headers: HeadersInit = {};
      const auth = getAuthHeader();
      if (auth.Authorization) (headers as Record<string, string>)["Authorization"] = auth.Authorization;

      const res = await fetch("/api/upload/doctor-photo", {
        method: "POST",
        body: fd,
        // DO NOT set Content-Type for FormData; browser will set boundary
        headers,
      });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Upload failed");
        return "";
      }
      return data.data?.url || "";
    } catch (err) {
      console.error("photo upload", err);
      toast.error("Upload failed");
      return "";
    }
  }

  // submit
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!validateForm()) {
      toast.error("Fix validation errors");
      return;
    }

    setSaving(true);

    try {
      // if profile_photo is a File object in form.profile_photo_file, upload first
      let profilePhotoUrl = form.profile_photo;
      if ((form as any).profile_photo_file instanceof File) {
        const uploaded = await handlePhotoUpload((form as any).profile_photo_file);
        if (uploaded) profilePhotoUrl = uploaded;
        else {
          setSaving(false);
          return;
        }
      }

      const payload: any = {
        first_name: form.first_name,
        middle_name: form.middle_name,
        last_name: form.last_name,
        email: form.email || undefined,
        phone: form.phone,
        aadhaar: form.aadhaar || undefined,
        password: form.password || undefined,
        preferred_language: form.preferred_language || undefined,
        specialty: form.specialty,
        address: {
          line1: form.address.line1,
          line2: form.address.line2,
          city: form.address.city,
          pincode: form.address.pincode,
          country: form.address.country || undefined,
          state: form.address.state || undefined,
          district: form.address.district || undefined,
        },
        national_id: form.national_id || undefined,
        profile_photo: profilePhotoUrl || undefined,
        consent_whatsapp: !!form.consent_whatsapp,
        terms_accepted: !!form.terms_accepted,
        admin_notes: form.admin_notes || undefined,
        is_active: typeof form.is_active === "boolean" ? form.is_active : true,
      };

      let url = "/api/admin/doctors";
      let method: "POST" | "PUT" = "POST";
      if (editId) {
        url = `/api/admin/doctors/${editId}`;
        method = "PUT";
      }

      const headers: HeadersInit = { "Content-Type": "application/json" };
      const auth = getAuthHeader();
      if (auth.Authorization) (headers as Record<string, string>)["Authorization"] = auth.Authorization;

      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Operation failed");
        // show server validation errors if present
        if (data?.errors && typeof data.errors === "object") {
          setErrors((prev) => ({ ...prev, ...data.errors }));
        }
        setSaving(false);
        return;
      }

      toast.success(editId ? "Doctor updated" : "Doctor created");
      router.push("/admin/doctors");
    } catch (err) {
      console.error("submit error", err);
      toast.error("Server error");
    } finally {
      setSaving(false);
    }
  }

  // handlers for country/state/district changes
  function handleCountryChange(countryId: string) {
    setForm((prev: any) => ({ ...prev, address: { ...prev.address, country: countryId, state: "", district: "" } }));
    setStates([]);
    setDistricts([]);
    fetchStatesForCountry(countryId);
  }

  function handleStateChange(stateId: string) {
    setForm((prev: any) => ({ ...prev, address: { ...prev.address, state: stateId, district: "" } }));
    setDistricts([]);
    fetchDistrictsForState(stateId);
  }

  // file input change
  function onPhotoFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setForm((prev: any) => ({ ...prev, profile_photo_file: file, profile_photo: file ? "" : prev.profile_photo }));
  }

  return (
    <Fragment>
      <Seo title={editId ? "Edit Doctor" : "Add Doctor"} />
      <Pageheader title="Doctors" currentpage={editId ? "Edit Doctor" : "Add Doctor"} activepage="Doctors" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>{editId ? "Edit Doctor" : "Add Doctor"}</Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <Row className="gy-3">
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

                  {/* email / phone / aadhaar */}
                  <Col xl={4}>
                    <Form.Label>Email</Form.Label>
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
                    <Form.Label>Aadhaar</Form.Label>
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

                  {/* specialty (fixed) */}

<Col xl={6}>
  <Form.Label>Specialties *</Form.Label>

  {/* quick TS bypass: treat SpkSelect props as any so onChange allowed */}
  <SpkSelect
    {...({
      option: specialty,
      defaultvalue: specialty.find((r) => r.value === form.specialty)
        ? [specialty.find((r) => r.value === form.specialty)]
        : [],
      key: `rel-${form.specialty || "new"}`,
      onChange: (opt: any) => setForm({ ...form, specialty: opt?.value || "" }),
      placeholder: "Select specialties",
      classNameprefix: "Select2",
      menuplacement: "auto",
    } as any)}
  />

  {errors.specialty && <div className="text-danger small mt-1">{errors.specialty}</div>}
</Col>

                  {/* Preferred Language (fixed) */}
<Col xl={6}>
  <Form.Label>Preferred Language</Form.Label>
  <SpkSelect
    {...({
      option: languages,
      defaultvalue: languages.find((r) => r.value === form.preferred_language)
        ? [languages.find((r) => r.value === form.preferred_language)]
        : [],
      key: `rel-${form.preferred_language || "new"}`,
      onChange: (opt: any) => setForm({ ...form, preferred_language: opt?.value || "" }),
      placeholder: "Select languages",
      classNameprefix: "Select2",
      menuplacement: "auto",
    } as any)}
  />
</Col>
                  {/* address fields */}
                  <Col xl={12}>
                    <Form.Label>Address</Form.Label>
                  </Col>

                  <Col xl={6}>
                    <Form.Label>Line 1</Form.Label>
                    <Form.Control
                      value={form.address.line1}
                      onChange={(e) => setForm({ ...form, address: { ...form.address, line1: e.target.value } })}
                    />
                  </Col>

                  <Col xl={6}>
                    <Form.Label>Line 2</Form.Label>
                    <Form.Control
                      value={form.address.line2}
                      onChange={(e) => setForm({ ...form, address: { ...form.address, line2: e.target.value } })}
                    />
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                      value={form.address.country || ""}
                      onChange={(e) => handleCountryChange(e.target.value)}
                    >
                      <option value="">Select Country</option>
                      {countries.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col xl={4}>
                    <Form.Label>State</Form.Label>
                    <Form.Select
                      value={form.address.state || ""}
                      onChange={(e) => handleStateChange(e.target.value)}
                      disabled={!form.address.country}
                    >
                      <option value="">{form.address.country ? "Select State" : "Select Country first"}</option>
                      {states.map((s) => (
                        <option key={s._id} value={s._id}>
                          {s.name} ({s.code})
                        </option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col xl={4}>
                    <Form.Label>District</Form.Label>
                    <Form.Select
                      value={form.address.district || ""}
                      onChange={(e) => setForm({ ...form, address: { ...form.address, district: e.target.value } })}
                      disabled={!form.address.state}
                    >
                      <option value="">{form.address.state ? "Select District" : "Select State first"}</option>
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
                      onChange={(e) => setForm({ ...form, address: { ...form.address, city: e.target.value } })}
                    />
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      value={form.address.pincode}
                      onChange={(e) => setForm({ ...form, address: { ...form.address, pincode: e.target.value } })}
                      isInvalid={!!errors.pincode}
                    />
                    <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
                  </Col>

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
                      {saving ? (editId ? "Updating..." : "Saving...") : (editId ? "Update Doctor" : "Save Doctor")}
                    </SpkButton>
                    <button type="button" className="btn btn-light ms-2" onClick={() => router.push("/admin/doctors")}>
                      Cancel
                    </button>
                  </Col>
                </Row>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}