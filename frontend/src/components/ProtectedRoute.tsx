import React from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePayment?: boolean;
}

export function ProtectedRoute({ children, requirePayment = false }: ProtectedRouteProps) {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<any>(null);
  const [hasPaid, setHasPaid] = React.useState(false);

  React.useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      if (!data.session?.user) {
        setLoading(false);
        return;
      }
      if (requirePayment) {
        supabase
          .from("payments")
          .select("id")
          .eq("user_email", data.session.user.email)
          .eq("status", "success")
          .then(({ data: paymentRows }) => {
            setHasPaid(!!(paymentRows && paymentRows.length > 0));
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
    return () => {};
  }, [requirePayment]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (requirePayment && !hasPaid) return <Navigate to="/payment" replace />;
  return <>{children}</>;
}
