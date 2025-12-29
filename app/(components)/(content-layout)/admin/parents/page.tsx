// "use client";

// import React, { Fragment, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import { Card, Col, Row, Table } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";

// export default function ParentsListPage() {
//   const router = useRouter();
//   const [parents, setParents] = useState<any[]>([]);

//   async function loadParents() {
//     try {
//       const res = await fetch("/api/admin/parents");
//       const data = await res.json();
//       if (data.status) {
//         setParents(data.data);
//       }
//     } catch {
//       toast.error("Failed to load parents");
//     }
//   }

//   useEffect(() => {
//     loadParents();
//   }, []);

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this parent?")) return;

//     const res = await fetch(`/api/admin/parents/${id}`, { method: "DELETE" });
//     const data = await res.json();

//     if (data.status) {
//       toast.success("Deleted");
//       loadParents();
//     } else {
//       toast.error(data.message);
//     }
//   }

//   return (
//     <Fragment>
//       <Seo title="Parents List" />
//       <Pageheader title="Parents" currentpage="Parents List" activepage="parents" />

//       <Row>
//         <Col xl={12}>
//           <Card className="custom-card">
//             <Card.Header>
//               <Card.Title>Parents List</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <div className="table-responsive">
//                 <Table bordered hover size="sm">
//                   <thead>
//                     <tr>
//                       <th>#</th>
//                       <th>Parent UID</th>
//                       <th>Name</th>
//                       <th>Phone</th>
//                       <th>Email</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {parents.length === 0 ? (
//                       <tr>
//                         <td colSpan={6} className="text-center">No records</td>
//                       </tr>
//                     ) : (
//                       parents.map((p, i) => (
//                         <tr key={p._id}>
//                           <td>{i + 1}</td>
//                           <td>{p.parent_uid}</td>
//                           <td>{p.first_name} {p.last_name}</td>
//                           <td>{p.phone}</td>
//                           <td>{p.email || "-"}</td>
//                           <td>
//                             <button
//                               className="btn btn-sm btn-primary me-2"
//                               onClick={() =>
//                                 router.push(`/admin/parents/add?id=${p._id}`)
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

import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

/* ================= helpers ================= */

function getAuthHeader(): HeadersInit {
  try {
    const t = localStorage.getItem("accessToken");
    return t ? { Authorization: `Bearer ${t}` } : {};
  } catch {
    return {};
  }
}
type UserRole = "super_admin" | "admin" | "viewer";
const userRole: UserRole = "admin";
const PAGE_SIZE = 10;

export default function ParentsListPage() {
  const router = useRouter();

  const [parents, setParents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* search + pagination */
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* ================= load ================= */

  async function loadParents() {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/parents", {
        headers: getAuthHeader(),
      });
      const data = await res.json();
      if (data?.status) {
        setParents(data.data || []);
      } else {
        toast.error(data?.message || "Failed to load parents");
      }
    } catch {
      toast.error("Failed to load parents");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadParents();
  }, []);

  /* ================= delete ================= */

  async function handleDelete(p: any) {
    if (!confirm(`Delete parent ${p.first_name} ${p.last_name}?`)) return;

    try {
      const res = await fetch(`/api/admin/parents/${p._id}`, {
        method: "DELETE",
        headers: getAuthHeader(),
      });
      const data = await res.json();
      if (data?.status) {
        toast.success("Parent deleted");
        loadParents();
      } else {
        toast.error(data?.message || "Delete failed");
      }
    } catch {
      toast.error("Delete failed");
    }
  }

  /* ================= search + pagination ================= */

  const filtered = useMemo(() => {
    if (!search.trim()) return parents;
    const q = search.toLowerCase();
    return parents.filter((p) =>
      [
        p.parent_uid,
        p.first_name,
        p.last_name,
        p.phone,
        p.email,
        p.aadhaar,
      ]
        .filter(Boolean)
        .some((v: string) => v.toLowerCase().includes(q))
    );
  }, [parents, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    setPage(1); // reset page on search
  }, [search]);

  /* ================= render ================= */

  return (
    <Fragment>
      <Seo title="Parents List" />
      <Pageheader title="Parents" currentpage="Parents List" activepage="parents" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Parents List</Card.Title>
              
             

             

               {(userRole === "admin" || userRole === "super_admin") && (
                <Button
                  size="sm"
                  onClick={() => router.push("/admin/parents/add")}
                >
                  + Add Child
                </Button>
              )}
            </Card.Header>

            <Card.Body>
              <Row className="mb-3 g-2">
                <Col md={4}>
                   <Form.Control
                  style={{ maxWidth: 260 }}
                  placeholder="Search name / phone / email"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
                </Col>
              </Row>
              <div className="table-responsive">
                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Parent UID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Aadhaar</th>
                      <th style={{ width: 220 }}>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : paginated.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No records
                        </td>
                      </tr>
                    ) : (
                      paginated.map((p, i) => (
                        <tr key={p._id}>
                          <td>{(page - 1) * PAGE_SIZE + i + 1}</td>
                          <td>{p.parent_uid}</td>
                          <td>
                            {p.first_name} {p.last_name}
                          </td>
                          <td>{p.phone}</td>
                          <td>{p.email || "-"}</td>
                          <td>{p.aadhaar || "-"}</td>
                          <td>
                            {/* EDIT */}
                            <Button
                              size="sm"
                              variant="primary"
                              className="me-1"
                              onClick={() =>
                                router.push(`/admin/parents/add?id=${p._id}`)
                              }
                            >
                              Edit
                            </Button>

                            {/* AUDIT */}
                            <Button
                              size="sm"
                              variant="info"
                              className="me-1"
                              onClick={() =>
                                router.push(`/admin/parents/add?id=${p._id}#audit`)
                              }
                            >
                              👁 Log
                            </Button>

                            {/* DELETE */}
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => handleDelete(p)}
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

              {/* pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-end gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="light"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Prev
                  </Button>

                  <span className="align-self-center">
                    Page {page} / {totalPages}
                  </span>

                  <Button
                    size="sm"
                    variant="light"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </Button>
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
