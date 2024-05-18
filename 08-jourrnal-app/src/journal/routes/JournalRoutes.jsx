import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
import { JournalPaths } from "../paths";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path={JournalPaths.Home} element={<JournalPage />} />

      <Route path="/*" element={<Navigate to={JournalPaths.Home} />} />
    </Routes>
  );
};
