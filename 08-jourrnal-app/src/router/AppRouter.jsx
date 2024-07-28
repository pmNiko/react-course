import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { AuthRoutes } from '@/auth/routes';
import { useCheckAuth } from '@/hooks';
import { JournalRoutes } from '@/journal/routes/JournalRoutes';
import { CheckingAuth } from '@/ui/components';
import { RootPaths } from '@/paths';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') return <CheckingAuth />;

  return (
    <Router>
      <Routes>
        {status === 'authenticated' ? (
          <Route path={RootPaths.JOURNAL + '*'} element={<JournalRoutes />} />
        ) : (
          <Route path={RootPaths.AUTH + '/*'} element={<AuthRoutes />} />
        )}

        <Route
          path={'/*'}
          element={<Navigate to={RootPaths.AUTH + '/login'} />}
        />
      </Routes>
    </Router>
  );
};
