// "use client"

// import StickyHeadTable, { CustomizedTables, DataTabless, Deletetable, ExportCSV } from "@/shared/data/tables/tablesdata";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import Seo from "@/shared/layouts-components/seo/seo";
// import React, { Fragment } from "react";
// import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";

// import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
// import { layout1, layout10, layout11, layout2, layout3, layout4, layout5, layout6, layout7, layout8, layout9 } from "@/shared/data/prism-code/forms-prism";
// import ShowCode from "@/shared/layouts-components/showcode/showcode";

// interface DataTablesProps { }

// const DataTables: React.FC<DataTablesProps> = () => {

//     return (

//         <Fragment>

//             <Seo title="Data Tables" />

//             <Pageheader title="Tables" currentpage="Data Tables" activepage="Data Tables" />

//             {/* <!-- Start:: row-2 --> */}

//             <Row>
//                 <Col xl={4}>
//                     <ShowCode title="Vertical Forms" customCardClass="custom-card" customCardBodyClass="" reactCode={layout1}>
//                         <div className="mb-3">
//                             <Form.Label htmlFor="form-text" className=" fs-14 text-dark">Enter name</Form.Label>
//                             <Form.Control type="text" className="" id="form-text" placeholder="Full name" />
//                         </div>
//                             <div className="mb-3">
//                                 <Form.Label htmlFor="form-password" className="fs-14 text-dark">Enter Password</Form.Label>
//                                 <Form.Control type="password" className="" id="form-password" placeholder="password" />
//                             </div>
//                                         <Form.Check className="mb-3" type="checkbox" value="" id="invalidCheck" label="Accept Policy" required />
//                                         <SpkButton Buttonvariant='primary' Buttontype="submit">Submit</SpkButton>
//                     </ShowCode>
//                 </Col>
//                 <Col xl={8}>
//                     <Card className="custom-card">
//                         <Card.Header>
//                             <Card.Title> Export Table </Card.Title>
//                         </Card.Header>
//                         <Card.Body>
//                             <ExportCSV />
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             {/* <!-- End:: row-2 --> */}

    

//         </Fragment>
//     )
// };

// export default DataTables;

// /app/(your-path)/gender/page.tsx
"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type GenderItem = {
  _id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function GenderPage() {
  const [list, setList] = useState<GenderItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // form state (used for both add & edit)
  const [form, setForm] = useState({ name: "" });
  const [errors, setErrors] = useState<{ name?: string; auth?: string }>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  // fetch list
  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/genders", { method: "GET" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch genders");
        setList([]);
      } else {
        setList(Array.isArray(data.data) ? data.data : data.data.items || []);
      }
    } catch (err) {
      console.error("Fetch genders error:", err);
      toast.error("Server error while fetching genders");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  function validate(): boolean {
    const e: { name?: string } = {};
    if (!form.name || form.name.trim().length === 0) {
      e.name = "Name is required.";
    } else if (form.name.trim().length < 2) {
      e.name = "Name must be at least 2 characters.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setErrors({});
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = { name: form.name.trim() };
      const url = editingId
        ? `/api/settings/genders/${editingId}`
        : "/api/settings/genders";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data?.status) {
        // show field errors or message
        if (data.errors) setErrors(data.errors);
        toast.error(data.message || "Operation failed");
      } else {
        toast.success(editingId ? "Gender updated" : "Gender added");
        setForm({ name: "" });
        setEditingId(null);
        fetchList();
      }
    } catch (err) {
      console.error("Save gender error:", err);
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: GenderItem) {
    setForm({ name: item.name });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: GenderItem) {
    const ok = confirm(`Are you sure you want to delete "${item.name}"?`);
    if (!ok) return;
    try {
      const res = await fetch(`/api/settings/genders/${item._id}`, { method: "DELETE" });
      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        // if currently editing this item, clear form
        if (editingId === item._id) {
          setEditingId(null);
          setForm({ name: "" });
        }
        fetchList();
      }
    } catch (err) {
      console.error("Delete gender error:", err);
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ name: "" });
    setErrors({});
  }

  return (
    <Fragment>
      <Seo title="Manage Genders" />
      <Pageheader title="Settings" currentpage="Genders" activepage="Gender" />

      <Row>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>{editingId ? "Edit Gender" : "Add Gender"}</Card.Title>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Form.Label className="fs-14 text-dark">Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      type="text"
                      placeholder="Enter gender name (e.g., Male)"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </InputGroup>
                </div>

                <div className="d-flex gap-2">
                  <SpkButton Buttontype="submit" Customclass="btn btn-primary" Disabled={submitting}>
                    {submitting ? (editingId ? "Updating..." : "Saving...") : editingId ? "Update" : "Save"}
                  </SpkButton>

                  {editingId ? (
                    <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  ) : null}
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Gender List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover size="sm" className="mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="text-center">Loading...</td>
                      </tr>
                    ) : list.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center">No records found</td>
                      </tr>
                    ) : (
                      list.map((item, idx) => (
                        <tr key={item._id}>
                          <td>{idx + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(item)}>Edit</button>
                              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item)}>Delete</button>
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
