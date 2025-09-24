import { RouterProvider } from "react-router-dom";
import { DEFAULT_THEME } from "./constants/default-theme";
import { Head } from "./internal-components/Head";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { router } from "./router";
import { HelmetProvider } from "react-helmet-async";
import { PageTracker } from "./components/PageTracker";

export const AppWrapper = () => {
  return (
    <HelmetProvider>
      <OuterErrorBoundary>
        <ThemeProvider defaultTheme={DEFAULT_THEME}>
          <PageTracker>
            <RouterProvider router={router} />
          </PageTracker>
          <Head />
        </ThemeProvider>
      </OuterErrorBoundary>
    </HelmetProvider>
  );
};
