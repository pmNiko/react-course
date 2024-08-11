import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onUpdateEvent,
  setActiveEvent,
} from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const showEventCalendar = (event) => dispatch(setActiveEvent(event));

  const startSavingEvent = async (event) => {
    // TODO: LLEGAR AL BACKEND

    // * RESPUESTA OK
    if (event._id) {
      // ? Actualizar
      dispatch(onUpdateEvent({ ...event }));
    } else {
      // ? Crear
      dispatch(onAddNewEvent({ ...event, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = async () => {
    dispatch(onDeleteEvent());
  };

  return {
    // ? Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // * Methods
    showEventCalendar,

    // !thunks
    startSavingEvent,
    startDeletingEvent,
  };
};
