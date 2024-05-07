import { useForm } from "@/hooks/useForm"
import { HeroCard } from "../components"

export const SearchPage = () => {

  const {formState, onInputChange, onResetForm} = useForm({
    searchText: ''
  })

  return (
    <>
      <h1>Busqueda de Personajes</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />

          <form>
            <input 
              type="text" 
              placeholder="Ingrese el nombre de su personaje" 
              className="form-control"
              name="search"
              autoComplete="off"
            />

            <button
              className="btn btn-outline-primary mt-3"
            >
              Buscar
            </button>
          </form>
        </div> 

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-primary">
            Busca un heroe
          </div>

          <div className="alert alert-danger">
            No hay resultados para <b>ABC</b>
          </div>

          <HeroCard />
        </div>
      </div>
    </>
  )
}
