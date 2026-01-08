// "use client";

// import { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { toast } from "react-toastify";

// type Props = {
//   parentId: string;
//   requestId: number;
//   show: boolean;
//   onClose: () => void;
//   onSuccess: () => void;
// };

// export default function KycOtpModal({
//   parentId,
//   requestId,
//   show,
//   onClose,
//   onSuccess
// }: Props) {
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const verifyOtp = async () => {
//   if (otp.length !== 6) {
//     toast.error("Enter valid 6 digit OTP");
//     return;
//   }

//   try {
//     setLoading(true);

//     const res = await fetch(
//       `/api/admin/parents/${parentId}/kyc/verify-otp`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ requestId, otp })
//       }
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       // 🔥 IMPORTANT UX FIX
//       toast.error(data.message || "OTP expired or invalid");

//       setOtp("");                 // clear OTP
//       setLoading(false);          // stop loader

//       // OPTIONAL: auto-close on timeout
//       if (
//         data.message &&
//         data.message.toLowerCase().includes("timed")
//       ) {
//         toast.info("Please request a new OTP");
//       }

//       return;
//     }

//     toast.success("Aadhaar KYC Verified");
//     onSuccess();
//     onClose();
//   } catch (err) {
//     toast.error("Something went wrong while verifying OTP");
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <Modal show={show} onHide={onClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Aadhaar OTP Verification</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Form.Group>
//           <Form.Label>Enter OTP</Form.Label>
//           <Form.Control
//             type="text"
//             value={otp}
//             maxLength={6}
//             onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
//             placeholder="Enter 6 digit OTP"
//           />
//         </Form.Group>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={verifyOtp} disabled={loading}>
//           {loading ? "Verifying..." : "Verify OTP"}
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function KycOtpModal({
  parentId,
  requestId,
  show,
  onClose,
  onSuccess
}: any) {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);


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
          body: JSON.stringify({ requestId, otp })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "OTP invalid or expired");
        setOtp("");
        return;
      }

      toast.success("Aadhaar KYC Verified");

      onClose();
      router.refresh();   // 🔥 THIS IS THE KEY FIX

    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }

const [secondsLeft, setSecondsLeft] = useState(60);

useEffect(() => {
  if (!show) return;

  setSecondsLeft(45);

  const interval = setInterval(() => {
    setSecondsLeft((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [show]);


  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Verify OTP</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input
          className="form-control"
          value={otp}
          maxLength={6}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, ""))
          }
          placeholder="Enter OTP"
        />
        <p className="text-muted mt-2">
            OTP expires in <strong>{secondsLeft}s</strong>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={verifyOtp}
          disabled={loading || secondsLeft === 0}
        >
          {loading
            ? "Verifying..."
            : secondsLeft === 0
            ? "OTP Expired"
            : "Verify OTP"}
        </Button>
        <Button
  variant="link"
  disabled={secondsLeft > 0}
  onClick={() => {
    onClose(); // close modal
    toast.info("Please click Send OTP again");
  }}
>
  Resend OTP
</Button>      
      </Modal.Footer>
    </Modal>
  );
}
