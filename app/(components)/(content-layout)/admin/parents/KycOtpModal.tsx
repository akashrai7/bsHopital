"use client";

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

type Props = {
  parentId: string;
  requestId: number;
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function KycOtpModal({
  parentId,
  requestId,
  show,
  onClose,
  onSuccess
}: Props) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error("Enter valid 6 digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `/api/admin/parents/${parentId}/kyc/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            requestId,
            otp
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "OTP verification failed");
        return;
      }

      toast.success("KYC Verified Successfully");
      onSuccess();
      onClose();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Aadhaar OTP Verification</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control
            type="text"
            value={otp}
            maxLength={6}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 6 digit OTP"
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={verifyOtp} disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
