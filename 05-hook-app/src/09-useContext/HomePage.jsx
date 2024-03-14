import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>HomePage <strong>{user?.name}</strong> </h1>
            <hr />

            <p>Email del usuario logueado: {user?.email}</p>
        </>
    )
}
