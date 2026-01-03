// "use client";

// import React, { Fragment, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import { Card, Col, Row, Table } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";

// export default function DoctorsListPage() {
//   const router = useRouter();
//   const [doctors, setDoctors] = useState<any[]>([]);

//   async function loadDoctors() {
//     try {
//       const res = await fetch("/api/admin/doctors");
//       const data = await res.json();
//       if (data.status) {
//         setDoctors(data.data);
//       }
//     } catch {
//       toast.error("Failed to load doctors");
//     }
//   }

//   useEffect(() => {
//     loadDoctors();
//   }, []);

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this doctor?")) return;

//     const res = await fetch(`/api/admin/doctors/${id}`, { method: "DELETE" });
//     const data = await res.json();

//     if (data.status) {
//       toast.success("Deleted");
//       loadDoctors();
//     } else {
//       toast.error(data.message);
//     }
//   }

//   return (
//     <Fragment>
//       <Seo title="Doctors List" />
//       <Pageheader title="Doctors" currentpage="Doctors List" activepage="doctors" />

//       <Row>
//         <Col xl={12}>
//           <Card className="custom-card">
//             <Card.Header>
//               <Card.Title>Doctors List</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <div className="table-responsive">
//                 <Table bordered hover size="sm">
//                   <thead>
//                     <tr>
//                       <th>#</th>
//                       <th>Doctor UID</th>
//                       <th>Name</th>
//                       <th>Phone</th>
//                       <th>Email</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {doctors.length === 0 ? (
//                       <tr>
//                         <td colSpan={6} className="text-center">No records</td>
//                       </tr>
//                     ) : (
//                       doctors.map((p, i) => (
//                         <tr key={p._id}>
//                           <td>{i + 1}</td>
//                           <td>{p.doctor_uid}</td>
//                           <td>{p.first_name} {p.last_name}</td>
//                           <td>{p.phone}</td>
//                           <td>{p.email || "-"}</td>
//                           <td>
//                             <button
//                               className="btn btn-sm btn-primary me-2"
//                               onClick={() =>
//                                 router.push(`/admin/doctors/add?id=${p._id}`)
//                               }
//                             >
//                               Edit
//                             </button>

//                             <button
//                               className="btn btn-sm btn-danger"
//                               onClick={() => handleDelete(p._id)}
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </Table>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <ToastContainer position="top-right" autoClose={2000} />
//     </Fragment>
//   );
// }

"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

/* ================= AUTH ================= */
function getAuthHeader(): Record<string, string> {
  try {
    if (typeof window === "undefined") return {};
    const token = localStorage.getItem("accessToken") || "";
    return token ? { Authorization: `Bearer ${token}` } : {};
  } catch {
    return {};
  }
}

export default function DoctorsListPage() {
  const router = useRouter();

  /* ================= STATE ================= */
  const [rows, setRows] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  /* ================= FETCH ================= */
  async function loadDoctors(p = page) {
    try {
      setLoading(true);

      const query = new URLSearchParams({
        page: String(p),
        limit: String(limit),
        search,
      });

      const res = await fetch(`/api/admin/doctors?${query}`, {
        headers: getAuthHeader(),
      });

      const json = await res.json();
      if (!json?.status) throw new Error(json.message);

      setRows(json.data.data || []);
      setPage(json.data.pagination.page);
      setTotal(json.data.pagination.total);
      setPages(json.data.pagination.pages);
    } catch (e: any) {
      toast.error(e.message || "Failed to load doctors");
    } finally {
      setLoading(false);
    }
  }

  /* ================= EFFECTS ================= */

  // initial + page change
  useEffect(() => {
    loadDoctors(page);
    // eslint-disable-next-line
  }, [page]);

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      setPage(1);
      loadDoctors(1);
    }, 500);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [search]);

  /* ================= DELETE ================= */
  async function handleDelete(id: string) {
    if (!confirm("Delete this doctor?")) return;

    try {
      const res = await fetch(`/api/admin/doctors/${id}`, {
        method: "DELETE",
        headers: getAuthHeader(),
      });

      const data = await res.json();
      if (!data.status) throw new Error(data.message);

      toast.success("Doctor deleted");
      loadDoctors(page);
    } catch (e: any) {
      toast.error(e.message || "Delete failed");
    }
  }

  /* ================= UI ================= */
  return (
    <Fragment>
      <Seo title="Doctors List" />
      <Pageheader title="Doctors" currentpage="List" activepage="doctors" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Doctors List</Card.Title>

              <div className="d-flex gap-2">
                <Form.Control
                  style={{ width: 260 }}
                  placeholder="Search name / phone / email / UID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <Button
                  size="sm"
                  onClick={() => router.push("/admin/doctors/add")}
                >
                  + Add Doctor
                </Button>
                
              </div>
            </Card.Header>

            <Card.Body>
              <div className="table-responsive">
                <Table bordered hover size="sm" className="align-middle">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Doctor UID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : rows.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center text-muted">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      rows.map((d, i) => (
                        <tr key={d._id}>
                          <td>{(page - 1) * limit + i + 1}</td>
                          <td className="fw-semibold">{d.doctor_uid}</td>
                          <td>
                            {d.first_name} {d.last_name}
                          </td>
                          <td>{d.phone}</td>
                          <td>{d.email || "-"}</td>
                          <td className="text-center">
                            <Button
                              size="sm"
                              variant="outline-primary"
                              className="me-1"
                              onClick={() =>
                                router.push(`/admin/doctors/add?id=${d._id}`)
                              }
                            >
                              Edit
                            </Button>

                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={() => handleDelete(d._id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>

              {/* PAGINATION */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="text-muted small">
                  Page <strong>{page}</strong> of{" "}
                  <strong>{pages}</strong> ({total} records)
                </div>

                <div className="btn-group">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    disabled={page <= 1 || loading}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    ⬅ Prev
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-secondary"
                    disabled={page >= pages || loading}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next ➡
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
