import { lazy, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./user-routes";
import { SuspenseWrapper } from "./components/SuspenseWrapper";
import { AppLayout } from "./components/AppLayout";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SomethingWentWrongPage = lazy(
  () => import("./pages/SomethingWentWrongPage"),
);

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        ...userRoutes,
        {
          path: "*",
          element: (
            <SuspenseWrapper>
              <NotFoundPage />
            </SuspenseWrapper>
          ),
        },
      ],
      errorElement: (
        <SuspenseWrapper>
          <SomethingWentWrongPage />
        </SuspenseWrapper>
      ),
    },
  ]
);