import { Outlet } from 'react-router-dom';
import { PageTracker } from './PageTracker';

export const AppLayout: React.FC = () => {
  return (
    <PageTracker>
      <Outlet />
    </PageTracker>
  );
};