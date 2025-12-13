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
                {/* <SpkButton Buttonvariant="light" Customclass="btn btn-sm me-2" onClick={() => fetchList(Math.max(1, page - 1), q)}>Prev</SpkButton>
                <SpkButton Buttonvariant="light" Customclass="btn btn-sm" onClick={() => fetchList(page + 1, q)}>Next</SpkButton> */}
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}