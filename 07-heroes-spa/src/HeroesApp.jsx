import { AppRouter } from "@/router";
import { AuthProvider } from "./auth";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
