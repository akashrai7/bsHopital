"use client";

import React, { Fragment, useEffect, useState } from "react";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Row, Table, InputGroup } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type WeekRangeItem = {
  _id: string;
  title: string;
  start_week: number;
  end_week: number;
  start_day: number;
  end_day: number;
  createdAt?: string;
};

export default function WeekRangePage() {
  const [list, setList] = useState<WeekRangeItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // add + edit form
  const [form, setForm] = useState({
    title: "",
    start_week: "",
    end_week: "",
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    title?: string;
    start_week?: string;
    end_week?: string;
  }>({});

  // derived values (NOT editable)
  const startDay = Number(form.start_week || 0) * 7;
  const endDay = Number(form.end_week || 0) * 7;

  // fetch list
  async function fetchList() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings/week-range");
      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Failed to fetch week ranges");
        setList([]);
      } else {
        setList(Array.isArray(data.data) ? data.data : []);
      }
    } catch {
      toast.error("Server error while fetching week ranges");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  // validation
  function validate(): boolean {
    const e: any = {};

    if (!form.title.trim()) {
      e.title = "Title is required";
    }

    if (form.start_week === "") {
      e.start_week = "Start week is required";
    }

    if (form.end_week === "") {
      e.end_week = "End week is required";
    }

    if (
      form.start_week !== "" &&
      form.end_week !== "" &&
      Number(form.start_week) > Number(form.end_week)
    ) {
      e.end_week = "End week must be greater than or equal to start week";
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
      const payload = {
        title: form.title.trim(),
        start_week: Number(form.start_week),
        end_week: Number(form.end_week),
      };

      const url = editingId
        ? `/api/settings/week-range/${editingId}`
        : "/api/settings/week-range";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Operation failed");
      } else {
        toast.success(editingId ? "Week range updated" : "Week range added");
        setForm({ title: "", start_week: "", end_week: "" });
        setEditingId(null);
        fetchList();
      }
    } catch {
      toast.error("Server error while saving");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(item: WeekRangeItem) {
    setForm({
      title: item.title,
      start_week: String(item.start_week),
      end_week: String(item.end_week),
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(item: WeekRangeItem) {
    const ok = confirm(`Delete "${item.title}" ?`);
    if (!ok) return;

    try {
      const res = await fetch(
        `/api/settings/week-range/${item._id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (!data?.status) {
        toast.error(data?.message || "Delete failed");
      } else {
        toast.success("Deleted");
        if (editingId === item._id) {
          setEditingId(null);
          setForm({ title: "", start_week: "", end_week: "" });
        }
        fetchList();
      }
    } catch {
      toast.error("Server error during delete");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ title: "", start_week: "", end_week: "" });
    setErrors({});
  }

  return (
    <Fragment>
      <Seo title="Week Range" />
      <Pageheader
        title="Settings"
        currentpage="Week Range"
        activepage="Week Range"
      />

      <Row>
        {/* FORM */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {editingId ? "Edit Week Range" : "Add Week Range"}
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    placeholder="e.g. 1 to 3 Weeks"
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </div>

                {/* Weeks */}
                <Row>
                  <Col>
                    <Form.Label>Start Week</Form.Label>
                    <Form.Control
                      type="number"
                      min={0}
                      value={form.start_week}
                      onChange={(e) =>
                        setForm({ ...form, start_week: e.target.value })
                      }
                      isInvalid={!!errors.start_week}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.start_week}
                    </Form.Control.Feedback>
                  </Col>

                  <Col>
                    <Form.Label>End Week</Form.Label>
                    <Form.Control
                      type="number"
                      min={0}
                      value={form.end_week}
                      onChange={(e) =>
                        setForm({ ...form, end_week: e.target.value })
                      }
                      isInvalid={!!errors.end_week}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.end_week}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                {/* Days (auto) */}
                <Row className="mt-3">
                  <Col>
                    <Form.Label>Start Day</Form.Label>
                    <Form.Control value={startDay} disabled />
                  </Col>
                  <Col>
                    <Form.Label>End Day</Form.Label>
                    <Form.Control value={endDay} disabled />
                  </Col>
                </Row>

                <div className="d-flex gap-2 mt-4">
                  <SpkButton
                    Buttontype="submit"
                    Customclass="btn btn-primary"
                    Disabled={submitting}
                  >
                    {submitting
                      ? editingId
                        ? "Updating..."
                        : "Saving..."
                      : editingId
                      ? "Update"
                      : "Save"}
                  </SpkButton>

                  {editingId && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>

        {/* TABLE */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Week Range List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Weeks</th>
                      <th>Days</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : list.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      list.map((item, idx) => (
                        <tr key={item._id}>
                          <td>{idx + 1}</td>
                          <td>{item.title}</td>
                          <td>
                            {item.start_week} – {item.end_week}
                          </td>
                          <td>
                            {item.start_day} – {item.end_day}
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDelete(item)}
                              >
                                Delete
                              </button>
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
