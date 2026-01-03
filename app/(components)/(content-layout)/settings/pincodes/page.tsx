"use client";

import { useEffect, useState } from "react";
import { Card, Col, Form, Row, Table, Button } from "react-bootstrap";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";

export default function PincodeListPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);

  async function loadData(p = page) {
    setLoading(true);

    const res = await fetch(
      `/api/settings/pincodes?search=${encodeURIComponent(search)}&page=${p}&limit=${limit}`,
      { credentials: "include" }
    );

    const j = await res.json();

    if (j?.status) {
      setRows(j.data || []);
      setPage(j.pagination.page);
      setTotal(j.pagination.total);
      setPages(j.pagination.pages);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData(1);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Seo title="Pincode Master" />
      <Pageheader title="Pincode Master" currentpage="List" activepage="pincodes" />

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Pincode List</Card.Title>

              <Form.Control
                style={{ width: 300 }}
                placeholder="Search pincode / office / region"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setPage(1);
                    loadData(1);
                  }
                }}
              />
            </Card.Header>

            <Card.Body>
              {loading && <div className="text-muted mb-2">Loading…</div>}

              <Table bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Pincode</th>
                    <th>Office</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Circle</th>
                    <th>Region</th>
                    <th>Delivery</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((r) => (
                    <tr key={r._id}>
                      <td className="fw-semibold">{r.pincode}</td>
                      <td>{r.officename || "-"}</td>
                      <td>{r.district?.name || "-"}</td>
                      <td>{r.state?.name || "-"}</td>
                      <td>{r.country?.name || "-"}</td>
                      <td>{r.circlename || "-"}</td>
                      <td>{r.regionname || "-"}</td>
                      <td>
                        <span
                          className={`badge bg-${
                            r.delivery === "Delivery"
                              ? "success"
                              : "secondary"
                          }`}
                        >
                          {r.delivery || "-"}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {!rows.length && !loading && (
                    <tr>
                      <td colSpan={8} className="text-center text-muted">
                        No records found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              {/* ===== PAGINATION ===== */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="text-muted">
                  Showing page <strong>{page}</strong> of{" "}
                  <strong>{pages}</strong> ({total} records)
                </div>

                <div className="btn-group">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    disabled={page <= 1}
                    onClick={() => loadData(page - 1)}
                  >
                    ⬅ Prev
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-secondary"
                    disabled={page >= pages}
                    onClick={() => loadData(page + 1)}
                  >
                    Next ➡
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
