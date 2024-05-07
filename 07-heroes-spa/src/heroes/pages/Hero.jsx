import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByID } from "../helpers/getHeroByID";

export const Hero = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const hero = useMemo(() => getHeroByID(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="row mt-5">
      <div className="col-5">
        <img
          className="img-thumbnail  animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>

      <div className="col-6">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance: </b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>

        <p>{hero.characters}</p>

        <button className="btn btn-outline-info" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
