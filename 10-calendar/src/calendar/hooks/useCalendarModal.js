import { useEffect, useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore, useCalendarStore } from '../../hooks';

export const useCalendarModal = () => {
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const { isDateModalOpen, onToggleDateModal } = useUiStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setform] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onChangeForm = ({ target }) => {
    setform((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onDateChange = (name, date) =>
    setform((prev) => ({ ...prev, [name]: date }));

  const onsubmit = async (event) => {
    event.preventDefault();
    const difference = differenceInSeconds(form.end, form.start);
    setFormSubmitted(true);

    if (difference < 0 && !!form.title) {
      Swal.fire(
        'Fechas incorrectas',
        'Revisar las fechas especificadas',
        'error'
      );
      return;
    }
    if (!form.title) {
      Swal.fire(
        'Título incompleto',
        'Debe revisar el título ingresado',
        'error'
      );
      return;
    }

    await startSavingEvent(form);
    onToggleDateModal();
    setFormSubmitted(false);
  };

  const titleClass = useMemo(() => {
    if (!formSubmitted) return '';

    return !form.title ? 'is-invalid' : '';
  }, [form.title, formSubmitted]);

  useEffect(() => {
    activeEvent && setform({ ...activeEvent });
  }, [activeEvent]);

  return {
    isDateModalOpen,
    titleClass,
    form,
    onChangeForm,
    onDateChange,
    onToggleDateModal,
    onsubmit,
  };
};
