import { SearchPage } from "@/heroes/pages";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

// Estrategia para mockear librerias
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Testing on <SearchPage/>", () => {
  const queryString = "Batman";

  test.skip("should show correctly with default values", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("should show Batman heroe and input with value from query string", () => {
    render(
      <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("textbox").value).toBe(queryString);
  });

  test("should show Batman on <HeroCard/> cause of the value from query string", () => {
    render(
      <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toBe(
      queryString
    );

    expect(screen.getByRole("img").src).toContain("/dc-batman.jpg");
    expect(screen.getByLabelText("search-title").style).toHaveProperty(
      "display",
      "none"
    );
  });

  test("should show an error when hero not found", () => {
    const queryStringNotFound = "asdkl-123";
    render(
      <MemoryRouter initialEntries={[`/search?q=${queryStringNotFound}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText("error-notification");
    expect(alert.style).toHaveProperty("display", "");
    expect(alert.style.display).toEqual("");
  });

  test("should called navigate function when submit is execute", () => {
    const queryStringSearch = "green";

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { name: "searchText", value: queryStringSearch },
    });

    // Para esta estrategia se debe agregar un role al formulario 'form'
    // fireEvent.submit(screen.getByLabelText("form"));
    fireEvent.submit(screen.getByRole("form"));

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${queryStringSearch}`);
  });
});
