import { useEffect, useState } from "react"
import { Message } from "./Message";

const initialStateForm = {
  username: '',
  email: ''
}

export const SimpleForm = () => {
    const [form, setForm] = useState(initialStateForm);

    const onInputChange = ({target}) => {
      const { name, value } = target;
      setForm( {...form, [name]: value } );
    } 


    

    return (
      <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
          type="text" 
          className="form-control"
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={onInputChange}
        />

        <input 
          type="email" 
          className="form-control mt-3"
          placeholder="correo@example.com"
          name="email"
          value={form.email}
          onChange={onInputChange}
        />

        { form.username === 'strider2' && <Message /> }
      </>
    )
}
