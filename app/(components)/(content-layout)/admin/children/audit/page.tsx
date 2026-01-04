"use client";

import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { toast } from "react-toastify";

interface AuditLog {
  _id: string;
  action: "CREATE" | "UPDATE" | "DELETE";
  changed_by_role: string;
  changes: Record<string, { old: any; new: any }>;
  createdAt: string;
}

// function getAuthHeader() {
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


export default function ChildAuditTimeline({ childId }: { childId: string }) {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLogs();
  }, [childId]);

  async function loadLogs() {
    try {
      const res = await fetch(
        `/api/admin/children/${childId}/audit`,
        { headers: { ...getAuthHeader() } }
      );
      const json = await res.json();
      if (!json?.status) throw new Error(json.message);
      setLogs(json.data.data);
    } catch (e: any) {
      toast.error(e.message || "Failed to load audit history");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading audit history…</div>;
  if (logs.length === 0) return <div className="text-muted">No audit history</div>;

  return (
    <Card className="custom-card mt-4">
      <Card.Header>
        <Card.Title>Audit History</Card.Title>
      </Card.Header>

      <Card.Body>
        <ul className="timeline list-unstyled">
          {logs.map(log => (
            <li key={log._id} className="mb-4">
              <div className="d-flex justify-content-between">
                <strong>
                  <Badge bg="info" className="me-2">
                    {log.action}
                  </Badge>
                  {log.changed_by_role}
                </strong>
                <small className="text-muted">
                  {new Date(log.createdAt).toLocaleString()}
                </small>
              </div>

              <div className="mt-2 ps-3">
                {!log.changes || Object.keys(log.changes).length === 0 ? (
                  <em>No field changes</em>
                ) : (
                  <ul className="mb-0">
                    {Object.entries(log.changes).map(([field, val]) => (
                      <li key={field}>
                        <strong>{field}</strong>:{" "}
                        <span className="text-danger">
                          {String(val.old ?? "—")}
                        </span>{" "}
                        →{" "}
                        <span className="text-success">
                          {String(val.new ?? "—")}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
