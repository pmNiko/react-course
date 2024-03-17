import { useState } from "react";

/**
 * CustomHook para manejo de formularios
 * @param {*} initialStateForm 
 * @returns {*} formState - onInputChange
 */
export const useForm = ( initialStateForm = {} ) => {
    const [form, setForm] = useState(initialStateForm);

    const onInputChange = ({target}) => {
      const { name, value } = target;
      setForm({
        ...form, 
        [name]: value 
      });
    } 

    const onResetForm = () => setForm(initialStateForm);

    return {
        ...form,
        formState: form,
        onInputChange,
        onResetForm
    }
}
