import { useForm } from "@/hooks/useForm";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  const showSearch = q.length === 0;
  const showError = !showSearch && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onsubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Busqueda de Personajes</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />

          <form onSubmit={onsubmit}>
            <input
              type="text"
              placeholder="Ingrese el nombre de su personaje"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-3">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">Buscar un heroe</div>
          ) : heroes.length === 0 ? (
            <div className="alert alert-danger">
              No hay resultados para <b>{q}</b>
            </div>
          ) : (
            heroes.map((hero) => <HeroCard key={hero.alter_ego} {...hero} />)
          )} */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: `${showSearch ? "" : "none"}` }}
          >
            Buscar un heroe
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{
              display: `${showError ? "" : "none"}`,
            }}
          >
            No hay resultados para <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.alter_ego} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
