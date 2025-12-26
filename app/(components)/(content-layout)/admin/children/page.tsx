// "use client";

// import React, { useEffect, useState } from "react";
// import { Card, Row, Col, Table, Form, Button } from "react-bootstrap";
// import { useRouter } from "next/navigation";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import { toast } from "react-toastify";

// function getAuthHeader() {
//   const t = typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
//   return t ? { Authorization: `Bearer ${t}` } : {};
// }

// export default function ChildrenListPage() {
//   const router = useRouter();

//   const [rows, setRows] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);
//   const [total, setTotal] = useState(0);

//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("created_at");
//   const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

//   const totalPages = Math.ceil(total / limit);

//   useEffect(() => {
//     fetchChildren();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page, search, sortBy, sortDir]);

//   async function fetchChildren() {
//     setLoading(true);
//     try {
//       const qs = new URLSearchParams({
//         page: String(page),
//         limit: String(limit),
//         search,
//         sortBy,
//         sortDir,
//       });

//       const res = await fetch(`/api/admin/children?${qs.toString()}`, {
//         headers: { ...getAuthHeader() },
//       });

//       const json = await res.json();

//       if (!json?.status) {
//         toast.error("Failed to load children");
//         return;
//       }

//       // ✅ CORRECT MAPPING (your issue fixed here)
//       setRows(json.data.data || []);
//       setTotal(json.data.total || 0);
//     } catch (e) {
//       console.error(e);
//       toast.error("Server error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this child?")) return;

//     try {
//       const res = await fetch(`/api/admin/children/${id}`, {
//         method: "DELETE",
//         headers: { ...getAuthHeader() },
//       });
//       const json = await res.json();

//       if (!json?.status) {
//         toast.error(json.message || "Delete failed");
//         return;
//       }

//       toast.success("Child deleted");
//       fetchChildren();
//     } catch (e) {
//       toast.error("Server error");
//     }
//   }

//   function toggleSort(field: string) {
//     if (sortBy === field) {
//       setSortDir(sortDir === "asc" ? "desc" : "asc");
//     } else {
//       setSortBy(field);
//       setSortDir("asc");
//     }
//   }

//   return (
//     <>
//       <Seo title="Children" />
//       <Pageheader title="Children" currentpage="Children" activepage="Children" />

//       <Row>
//         <Col xl={12}>
//           <Card className="custom-card">
//             <Card.Header className="d-flex justify-content-between">
//               <div className="card-title">Children List</div>
//               <Button onClick={() => router.push("/admin/children/add")}>
//                 + Add Child
//               </Button>
//             </Card.Header>

//             <Card.Body>
//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Control
//                     placeholder="Search name / ID / phone"
//                     value={search}
//                     onChange={(e) => {
//                       setPage(1);
//                       setSearch(e.target.value);
//                     }}
//                   />
//                 </Col>
//               </Row>

//               <Table bordered hover responsive>
//                 <thead>
//                   <tr>
//                     <th onClick={() => toggleSort("child_id")}>Child ID</th>
//                     <th onClick={() => toggleSort("full_name")}>Name</th>
//                     <th>DOB</th>
//                     <th>Gender</th>
//                     <th>children</th>
//                     <th>Contact</th>
//                     <th width={140}>Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {loading && (
//                     <tr>
//                       <td colSpan={7} className="text-center">
//                         Loading...
//                       </td>
//                     </tr>
//                   )}

//                   {!loading && rows.length === 0 && (
//                     <tr>
//                       <td colSpan={7} className="text-center">
//                         No records found
//                       </td>
//                     </tr>
//                   )}

//                   {rows.map((r) => (
//                     <tr key={r._id}>
//                       <td>{r.child_id}</td>
//                       <td>{r.full_name}</td>
//                       <td>{r.dob?.slice(0, 10)}</td>
//                       <td>{r.gender_code}</td>
//                       <td>
//                         {Array.isArray(r.parent_ids)
//                           ? r.parent_ids.map((p: any) => p.first_name).join(", ")
//                           : "-"}
//                       </td>
//                       <td>{r.primary_contact || "-"}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="warning"
//                           className="me-2"
//                           onClick={() =>
//                             router.push(`/admin/children/add?id=${r._id}`)
//                           }
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="danger"
//                           onClick={() => handleDelete(r._id)}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="d-flex justify-content-end gap-2">
//                   <Button
//                     size="sm"
//                     disabled={page === 1}
//                     onClick={() => setPage(page - 1)}
//                   >
//                     Prev
//                   </Button>
//                   <span className="pt-1">
//                     Page {page} / {totalPages}
//                   </span>
//                   <Button
//                     size="sm"
//                     disabled={page === totalPages}
//                     onClick={() => setPage(page + 1)}
//                   >
//                     Next
//                   </Button>
//                 </div>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// }

"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function ChildrenListPage() {
  const router = useRouter();
  const [children, setChildren] = useState<any[]>([]);

  async function loadChildren() {
    try {
      const res = await fetch("/api/admin/children");
      const data = await res.json();
      if (data.status) {
        setChildren(data.data);
      }
    } catch {
      toast.error("Failed to load children");
    }
  }

  useEffect(() => {
    loadChildren();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this parent?")) return;

    const res = await fetch(`/api/admin/children/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (data.status) {
      toast.success("Deleted");
      loadChildren();
    } else {
      toast.error(data.message);
    }
  }

  return (
    <Fragment>
      <Seo title="Childrens List" />
      <Pageheader title="Childrens" currentpage="Childrens List" activepage="Childrens" />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Childrens List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Child UID</th>
                      <th>Name</th>
                      <th>Parent Name</th>
                      <th>Gender</th>
                      <th>Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {children.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">No records</td>
                      </tr>
                    ) : (
                      children.map((r, i) => (
                        <tr key={r._id}>
                          <td>{i + 1}</td>
                          <td>{r.child_id}</td>
                          <td>{r.full_name}</td>
                          <td>
                         {Array.isArray(r.parent_ids)
                           ? r.parent_ids.map((p: any) => p.first_name).join(", ")
                           : "-"}
                       </td>
                          <td>{r.gender_code}</td>
                          <td>{r.primary_contact}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() =>
                                router.push(`/admin/children/add?id=${r._id}`)
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(r._id)}
                            >
                              Delete
                            </button>
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


