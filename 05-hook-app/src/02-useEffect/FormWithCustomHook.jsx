import { useForm } from "../hooks/useForm";

const initialStateForm = {
  username: '',
  email: '',
  password: ''
}

export const FormWithCustomHook = () => {
    const { 
        username, email, 
        password, onInputChange, onResetForm 
    } = useForm(initialStateForm);

    return (
      <>
        <h1>Formulario With Custom Hook</h1>
        <hr />

        <input 
          type="text" 
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />

        <input 
          type="email" 
          className="form-control mt-3"
          placeholder="correo@example.com"
          name="email"
          value={email}
          onChange={onInputChange}
        />

        <input 
          type="password" 
          className="form-control mt-3"
          placeholder="*********"
          name="password"
          value={password}
          onChange={onInputChange}
        />

        <button 
          className="btn btn-primary mt-2" 
          onClick={onResetForm}
        >
          Borrar
        </button>

      </>
    )
}
