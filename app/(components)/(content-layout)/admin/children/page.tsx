// "use client";

// import React, { Fragment, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import { Card, Col, Row, Table } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";

//  function ChildrenListPage() {
//   const router = useRouter();
//   const [children, setChildren] = useState<any[]>([]);

//   async function loadChildren() {
//     try {
//       const res = await fetch("/api/admin/children");
//       const data = await res.json();
//       if (data.status) {
//         setChildren(data.data);
//       }
//     } catch {
//       toast.error("Failed to load children");
//     }
//   }

//   useEffect(() => {
//     loadChildren();
//   }, []);

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this parent?")) return;

//     const res = await fetch(`/api/admin/children/${id}`, { method: "DELETE" });
//     const data = await res.json();

//     if (data.status) {
//       toast.success("Deleted");
//       loadChildren();
//     } else {
//       toast.error(data.message);
//     }
//   }


//   return (
//     <Fragment>
//       <Seo title="Childrens List" />
//       <Pageheader title="Children" currentpage="Childrens List" activepage="Children" />

//       <Row>
//         <Col xl={12}>
//           <Card className="custom-card">
//             <Card.Header>
//               <Card.Title>Childrens List</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <div className="table-responsive">
//                 <Table bordered hover size="sm">
//                   <thead>
//                     <tr>
//                       <th>#</th>
//                       <th>Child UID</th>
//                       <th>Name</th>
//                       <th>Parent Name</th>
//                       <th>Gender</th>
//                       <th>Contact</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {children.length === 0 ? (
//                       <tr>
//                         <td colSpan={6} className="text-center">No records</td>
//                       </tr>
//                     ) : (
//                       children.map((r, i) => (
//                         <tr key={r._id}>
//                           <td>{i + 1}</td>
//                           <td>{r.child_id}</td>
//                           <td>{r.full_name}</td>
//                           <td>
//                          {Array.isArray(r.parent_ids)
//                            ? r.parent_ids.map((p: any) => p.first_name).join(", ")
//                            : "-"}
//                        </td>
//                           <td>{r.gender_code}</td>
//                           <td>{r.primary_contact}</td>
//                           <td>
//                             <button
//                               className="btn btn-sm btn-primary me-2"
//                               onClick={() =>
//                                 router.push(`/admin/children/add?id=${r._id}`)
//                               }
//                             >
//                               Edit
//                             </button>

//                             <button
//                               className="btn btn-sm btn-danger"
//                               onClick={() => handleDelete(r._id)}
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


// export default ChildrenListPage;

"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

/* ================= TYPES ================= */

interface Parent {
  _id: string;
  first_name: string;
}

interface Child {
  _id: string;
  child_id: string;
  full_name: string;
  gender_code: "M" | "F" | "O";
  primary_contact?: string;
  dob: string;
  hospital_name: string;
  parent_ids: Parent[];
}

type UserRole = "super_admin" | "admin" | "viewer";

/* ================= AUTH ================= */

// function getAuthHeader() {
//   if (typeof window === "undefined") return {};
//   const token = localStorage.getItem("accessToken");
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

 function getAuthHeader(): Record<string, string> {
    try {
      if (typeof window === "undefined") return {};
      const token = localStorage.getItem("accessToken") || "";
      const headers: HeadersInit = { "Content-Type": "application/json" };
    
      return token ? { Authorization: `Bearer ${token}` } : { };
    } catch {
      return {};
    }
  }

/* ================= COMPONENT ================= */

export default function ChildrenListPage() {
  const router = useRouter();

  /* ---- STATE ---- */
  const [children, setChildren] = useState<Child[]>([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // 🔐 replace later with real auth/session
  const userRole: UserRole = "admin";

  /* ---- FETCH ---- */
  async function loadChildren(resetPage = false) {
    try {
      setLoading(true);

      const query = new URLSearchParams({
        search,
        gender,
        page: String(resetPage ? 1 : page),
        limit: "10",
      });

      const res = await fetch(`/api/admin/children?${query}`, {
        headers: {
          ...getAuthHeader(),
        },
      });

      const json = await res.json();
      if (!json?.status) throw new Error(json.message);

      setChildren(json.data.data);
      setTotalPages(json.data.totalPages);
    } catch (e: any) {
      toast.error(e.message || "Failed to load children");
    } finally {
      setLoading(false);
    }
  }

  /* ---- EFFECTS ---- */

  // page / gender change
  useEffect(() => {
    loadChildren();
  }, [page, gender]);

  // debounced search
  useEffect(() => {
    const t = setTimeout(() => {
      setPage(1);
      loadChildren(true);
    }, 500);

    return () => clearTimeout(t);
  }, [search]);

  /* ---- DELETE ---- */
  async function handleDelete(id: string) {
    if (!confirm("Delete this child?")) return;

    try {
      const res = await fetch(`/api/admin/children/${id}`, {
        method: "DELETE",
        headers: {
          ...getAuthHeader(),
        },
      });

      const json = await res.json();
      if (!json?.status) throw new Error(json.message);

      toast.success("Child deleted");
      loadChildren();
    } catch (e: any) {
      toast.error(e.message || "Delete failed");
    }
  }

  /* ================= UI ================= */

  return (
    <Fragment>
      <Seo title="Children List" />
      <Pageheader
        title="Childs List"
        currentpage="Children"
        activepage="Children"
      />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Children List</Card.Title>

              {(userRole === "admin" || userRole === "super_admin") && (
                <Button
                  size="sm"
                  onClick={() => router.push("/admin/children/add")}
                >
                  + Add Child
                </Button>
              )}
            </Card.Header>

            <Card.Body>
              {/* 🔍 FILTER BAR */}
              <Row className="mb-3 g-2">
                <Col md={4}>
                  <Form.Control
                    placeholder="Search by name / child id"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>

                {/* <Col md={3}>
                  <Form.Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">All Genders</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </Form.Select>
                </Col> */}
              </Row>

              {/* 📋 TABLE */}
              <div className="table-responsive">
                <Table bordered hover size="sm" className="align-middle">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Child UID</th>
                      <th>Name</th>
                      <th>Parent name</th>
                      <th>Gender</th>
                      <th>Contact</th>
                      <th>DOB</th>
                      <th>Hospital name</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={7} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : children.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center text-muted">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      children.map((c, i) => (
                        <tr key={c._id}>
                          <td>{(page - 1) * 10 + i + 1}</td>
                          <td>{c.child_id}</td>
                          <td>{c.full_name}</td>
                          <td>
                            {c.parent_ids
                              ?.map((p) => p.first_name)
                              .join(", ") || "-"}
                          </td>
                          <td>{c.gender_code}</td>
                          <td>{c.primary_contact || "-"}</td>
                          <td>{c.dob}</td>
                          <td>{c.hospital_name}</td>
                          <td className="text-center">
                            <Button
                              size="sm"
                              variant="outline-primary"
                              className="me-1"
                              onClick={() =>
                                router.push(
                                  `/admin/children/add?id=${c._id}`
                                )
                              }
                            >
                              Edit
                            </Button>

                            {(userRole === "admin" ||
                              userRole === "super_admin") && (
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={() => handleDelete(c._id)}
                              >
                                Delete
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>

              {/* 📄 PAGINATION */}
              <div className="d-flex justify-content-end gap-2 mt-3">
                <Button
                  size="sm"
                  disabled={page === 1 || loading}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Prev
                </Button>

                <span className="px-2 small">
                  Page {page} of {totalPages}
                </span>

                <Button
                  size="sm"
                  disabled={page === totalPages || loading}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
