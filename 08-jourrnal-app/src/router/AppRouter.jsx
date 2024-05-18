import { AuthRoutes } from "@/auth/routes";
import { JournalRoutes } from "@/journal/routes/JournalRoutes";
import { RootPaths } from "@/paths";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Login y registro */}
        <Route path={RootPaths.AUTH + "/*"} element={<AuthRoutes />} />

        {/* Journal App */}
        <Route path={RootPaths.JOURNAL + "*"} element={<JournalRoutes />} />
      </Routes>
    </Router>
  );
};
