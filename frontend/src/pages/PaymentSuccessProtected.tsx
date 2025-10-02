import React from "react";
import PaymentSuccess from "./PaymentSuccess";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function PaymentSuccessProtected() {
  return (
    <ProtectedRoute>
      <PaymentSuccess />
    </ProtectedRoute>
  );
}

