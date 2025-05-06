import React from "react";
import CoursePage from "./Course";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function CourseProtected() {
  return (
    <ProtectedRoute requirePayment>
      <CoursePage />
    </ProtectedRoute>
  );
}
