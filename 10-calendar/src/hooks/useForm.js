import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialState = {}, validations = {}) => {
  const [formState, setFormState] = useState(initialState);
  const [formValidation, setFormValidation] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  const createValidatiors = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(validations)) {
      const [fn, errorMessage = 'Este campo es requerido.'] =
        validations[formField];
      formCheckedValues[`${formField}IsValid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  const isFormValid = useMemo(() => {
    const errors = Object.keys(formValidation).some(
      (key) => formValidation[key] !== null
    );

    return !errors;
  }, [formValidation]);

  useEffect(() => {
    createValidatiors();
  }, [formState]);

  useEffect(() => {
    setFormState(initialState);
  }, [initialState]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};
