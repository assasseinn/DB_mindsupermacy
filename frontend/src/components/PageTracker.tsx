import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/utils/analytics';

interface PageTrackerProps {
  children: React.ReactNode;
}

export const PageTracker: React.FC<PageTrackerProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  return <>{children}</>;
};