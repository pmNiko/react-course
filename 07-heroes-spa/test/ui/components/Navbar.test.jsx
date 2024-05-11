import { AuthContext } from "@/auth";
import { Navbar } from "@/ui/components";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

// Estrategia para mockear librerias
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Testing on <Navbar />", () => {
  const valueContext = {
    logged: true,
    user: { id: "ABC-123", name: "Jhon" },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("should to show user name", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={valueContext}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(valueContext.user.name)).toBeDefined();
    expect(screen.getAllByText("Jhon")).toHaveLength(1);
  });

  test("should called logout and navigate when click to button", () => {
    render(
      <AuthContext.Provider value={valueContext}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(valueContext.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
