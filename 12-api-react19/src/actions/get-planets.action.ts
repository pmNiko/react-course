import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const getPlanets = async (): Promise<Planet[]> => {
  console.log("Peticion http");
  const res = await planetsApi.get<Planet[]>("/");
  return res.data;
};
