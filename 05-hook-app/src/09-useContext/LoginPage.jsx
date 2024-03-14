import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const draftUser = {
    id: 14124124,
    name: 'Nikodev',
    email: 'nikodev@gmail.com'
}

export const LoginPage = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
                onClick={() => setUser(draftUser)}
                className="btn btn-primary" 
            >
                Establecer usuario
            </button>
        </>
    )
}
