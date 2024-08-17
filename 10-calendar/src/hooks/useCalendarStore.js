import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onUpdateEvent,
  setActiveEvent,
} from '../store/calendar/calendarSlice';
import { calendarApi } from '../api';
import { eventAdapter } from '../helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const showEventCalendar = (event) => dispatch(setActiveEvent(event));

  const startSavingEvent = async (event) => {
    try {
      if (event.id) {
        // ? Actualizar
        await calendarApi.put(`/events/${event.id}`, event);
        dispatch(onUpdateEvent({ ...event, user }));
        return;
      }
      // ? Crear
      const { data } = await calendarApi.post('/events', event);
      dispatch(onAddNewEvent({ ...event, id: data.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  };

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  };

  const startLoadingEvent = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = eventAdapter(data.events);

      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log('Error loading ', error);
    }
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
    startLoadingEvent,
  };
};
