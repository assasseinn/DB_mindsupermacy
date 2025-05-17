import { type ReactNode, Suspense } from "react";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div className="w-full flex justify-center items-center py-12 text-accent text-lg font-semibold">Loading...</div>}>
      {children}
    </Suspense>
  );
}; 