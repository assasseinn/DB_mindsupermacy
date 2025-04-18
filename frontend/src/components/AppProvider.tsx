import type { ReactNode } from "react";
import { DEFAULT_THEME } from "../constants/default-theme";

interface Props {
  children: ReactNode;
}

/**
 * A provider wrapping the whole app.
 *
 * You can add multiple providers here by nesting them,
 * and they will all be applied to the app.
 */
export const AppProvider = ({ children }: Props) => {
  // Make sure the body has the dark class for dark theme
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add(DEFAULT_THEME);
  }
  
  return <>{children}</>;
};