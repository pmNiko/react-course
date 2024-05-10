import { AuthContext } from "@/auth";
import { AppRouter } from "@/router";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes } from "react-router-dom";

describe("Testin on <AppRouter/>", () => {
  test("should to show Login Page if is not logged", () => {
    const valueContext = { logged: false };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={valueContext}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login")).toHaveLength(2);
  });

  test("should show Marvel Page if is logged", () => {
    const valueContext = {
      logged: true,
      user: { id: "ABC-123", name: "Jhon" },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={valueContext}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Marvel Comics"
    );
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
