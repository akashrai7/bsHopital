"use client";

import { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";

type Props = {
  parentId: string;
};

export default function KycHistoryTable({ parentId }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/parents/${parentId}/kyc/history`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [parentId]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!data.length) {
    return <p className="text-muted">No KYC history found.</p>;
  }

  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Level</th>
          <th>Status</th>
          <th>Provider</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{new Date(row.createdAt).toLocaleString()}</td>
            <td>{row.level}</td>
            <td>
              <span
                className={`badge ${
                  row.status === "verified"
                    ? "bg-success"
                    : row.status === "failed"
                    ? "bg-danger"
                    : "bg-warning text-dark"
                }`}
              >
                {row.status}
              </span>
            </td>
            <td>{row.provider}</td>
            <td>{row.errorMessage || row.responseRaw?.message || "-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
