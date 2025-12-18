// "use client";

// import React, { useEffect, useState } from "react";
// import Seo from "@/shared/layouts-components/seo/seo";
// import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
// import { Card, Col, Row, Table, Spinner } from "react-bootstrap";
// import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// function getAuthHeader() {
//   try {
//     const t =
//       typeof window !== "undefined"
//         ? localStorage.getItem("accessToken") || ""
//         : "";
//     return t ? { Authorization: `Bearer ${t}` } : {};
//   } catch {
//     return {};
//   }
// }

// export default function ChildrenViewPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [rows, setRows] = useState<any[]>([]);

//   useEffect(() => {
//     fetchChildren();
//   }, []);

//   async function fetchChildren() {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/children", {
//          headers: { "Content-Type": "application/json" },
//          ...(getAuthHeader() as any),
//       });

//       const data = await res.json();

//       if (!data?.status) {
//         toast.error(data?.message || "Failed to load children");
//         return;
//       }

//       setRows(data.data.data || []);
//     } catch (err) {
//       console.error("fetchChildren error", err);
//       toast.error("Server error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <Seo title="Children" />
//       <Pageheader
//         title="Children"
//         currentpage="Children List"
//         activepage="Children"
//       />

//       <Row>
//         <Col xl={12}>
//           <Card className="custom-card">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <div className="card-title">Children List</div>

//               <button
//                 className="btn btn-primary"
//                 onClick={() => router.push("/admin/children/add")}
//               >
//                 + Add Child
//               </button>
//             </Card.Header>

//             <Card.Body>
//               {loading ? (
//                 <div className="text-center py-5">
//                   <Spinner animation="border" />
//                 </div>
//               ) : (
//                 <Table bordered hover responsive>
//                   <thead className="table-light">
//                     <tr>
//                       <th>#</th>
//                       <th>Child ID</th>
//                       <th>Full Name</th>
//                       <th>DOB</th>
//                       <th>Gender</th>
//                       <th>Parent(s)</th>
//                       <th>Primary Contact</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {rows.length === 0 ? (
//                       <tr>
//                         <td colSpan={8} className="text-center text-muted">
//                           No records found
//                         </td>
//                       </tr>
//                     ) : (
//                       rows.map((r, i) => (
//                         <tr key={r._id}>
//                           <td>{i + 1}</td>
//                           <td>{r.child_id}</td>
//                           <td>{r.full_name}</td>
//                           <td>
//                             {r.dob
//                               ? new Date(r.dob).toLocaleDateString()
//                               : "-"}
//                           </td>
//                           <td>{r.gender_code || "-"}</td>
//                           <td>
//                             {(r.parent_ids || [])
//                               .map(
//                                 (p: any) =>
//                                   `${p.first_name} ${p.last_name}`
//                               )
//                               .join(", ") || "-"}
//                           </td>
//                           <td>{r.primary_contact || "-"}</td>

//                           <td>
//                            <button
//                               className="btn btn-sm btn-primary me-2"
//                               onClick={() =>
//                                 router.push(`/admin/children/add?id=${r._id}`)
//                               }
//                             >
//                               Edit
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </Table>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function getAuthHeader() {
  try {
    const t =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken") || ""
        : "";
    return t ? { Authorization: `Bearer ${t}` } : {};
  } catch {
    return {};
  }
}

export default function ChildrenListPage() {
  const router = useRouter();

  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // search + pagination
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  // sorting
  const [sortBy, setSortBy] = useState("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    fetchChildren();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sortBy, sortDir]);

  async function fetchChildren() {
    setLoading(true);
    try {
      const qs = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        search,
        sortBy,
        sortDir,
      });

      const res = await fetch(`/api/admin/children?${qs.toString()}`, {
        headers: {
          "Content-Type": "application/json",
          ...(getAuthHeader() as any),
        },
      });

      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Failed to load children");
        return;
      }

      setRows(data.data.data || []);
      setTotal(data.data.total || 0);
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  }

  function toggleSort(col: string) {
    if (sortBy === col) {
      setSortDir((p) => (p === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(col);
      setSortDir("asc");
    }
    setPage(1);
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this child?")) return;

    try {
      const res = await fetch(`/api/admin/children/${id}`, {
        method: "DELETE",
        headers: {
          ...(getAuthHeader() as any),
        },
      });

      const data = await res.json();
      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
        return;
      }

      toast.success("Child deleted");
      fetchChildren();
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  }

  return (
    <>
      <Seo title="Children" />
      <Pageheader
        title="Children"
        currentpage="Children List"
        activepage="Children"
      />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Children List</div>
            </Card.Header>

            <Card.Body>
              {/* Search */}
              <Row className="mb-3">
                <Col xl={4}>
                  <Form.Control
                    placeholder="Search by name / ID / phone"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setPage(1);
                        fetchChildren();
                      }
                    }}
                  />
                </Col>

                <Col xl={2}>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                      setPage(1);
                      fetchChildren();
                    }}
                  >
                    Search
                  </button>
                </Col>

                <Col xl={2}>
                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={() => {
                      setSearch("");
                      setPage(1);
                      fetchChildren();
                    }}
                  >
                    Reset
                  </button>
                </Col>

                <Col xl={4} className="text-end">
                  <button
                    className="btn btn-success"
                    onClick={() => router.push("/admin/children/add")}
                  >
                    + Add Child
                  </button>
                </Col>
              </Row>

              {/* Table */}
              <div className="table-responsive">
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th onClick={() => toggleSort("child_id")}>
                        Child ID
                      </th>
                      <th onClick={() => toggleSort("full_name")}>
                        Name
                      </th>
                      <th>Parents</th>
                      <th onClick={() => toggleSort("primary_contact")}>
                        Contact
                      </th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading && (
                      <tr>
                        <td colSpan={5} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    )}

                    {!loading && rows.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center">
                          No records found
                        </td>
                      </tr>
                    )}

                    {!loading &&
                      rows.map((r) => (
                        <tr key={r._id}>
                          <td>{r.child_id}</td>
                          <td>{r.full_name}</td>
                          <td>
                            {(r.parent_ids || [])
                              .map(
                                (p: any) =>
                                  `${p.first_name} ${p.last_name}`
                              )
                              .join(", ")}
                          </td>
                          <td>{r.primary_contact || "-"}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() =>
                                router.push(
                                  `/admin/children/add?id=${r._id}`
                                )
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
                      ))}
                  </tbody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  Page {page} of {totalPages} (Total: {total})
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={page <= 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Prev
                  </button>

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={page >= totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}