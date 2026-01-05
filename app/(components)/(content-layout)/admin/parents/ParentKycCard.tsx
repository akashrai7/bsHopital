"use client";

import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import KycOtpModal from "@/app/(components)/(content-layout)/admin/parents/KycOtpModal";
import KycHistoryTable from "@/app/(components)/(content-layout)/admin/parents/KycHistoryTable";
import { toast } from "react-toastify";

export default function ParentKycCard({ parent }: any) {
  const [showOtp, setShowOtp] = useState(false);
  const [requestId, setRequestId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const isLimitReached =
    parent?.kyc?.totalAttempts >= 3 &&
    parent?.kyc?.lastAttemptAt &&
    new Date(parent.kyc.lastAttemptAt).toDateString() ===
      new Date().toDateString();

  const isVerified = parent?.kyc?.status === "verified";

  const sendOtp = async () => {
    console.log("SEND OTP CLICKED");
    console.log("AADHAAR SENT:", parent.aadhaar);

    try {
      setLoading(true);

      const res = await fetch(
        `/api/admin/parents/${parent._id}/kyc/generate-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ aadhaar: parent.aadhaar })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to send OTP");
        return;
      }

      setRequestId(data.requestId);
      setShowOtp(true);
      toast.success("OTP sent successfully");
    } catch {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h5>Aadhaar KYC</h5>
          <p>Status: {parent?.kyc?.status || "not_started"}</p>
          <p>Attempts: {parent?.kyc?.totalAttempts || 0} / 3</p>

          <Button
            onClick={sendOtp}
            disabled={loading || isLimitReached || isVerified}
          >
            {loading ? "Sending..." : "Send OTP"}
          </Button>
        </Card.Body>
      </Card>

      {requestId && (
        <KycOtpModal
          parentId={parent._id}
          requestId={requestId}
          show={showOtp}
          onClose={() => setShowOtp(false)}
          onSuccess={() => window.location.reload()}
        />
      )}

      {parent?._id && (
        <Card className="mt-4">
          <Card.Body>
            <h5>KYC History</h5>
            <KycHistoryTable parentId={parent._id} />
          </Card.Body>
        </Card>
      )}
    </>
  );
}
