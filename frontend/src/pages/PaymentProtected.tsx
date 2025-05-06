import React from "react";
import PaymentPage from "./Payment";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function PaymentProtected() {
  return (
    <ProtectedRoute>
      <PaymentPage />
    </ProtectedRoute>
  );
}
