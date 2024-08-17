import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onUpdateEvent,
  setActiveEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarSliceWithActiveEventState,
  calendarSliceWithEventsState,
  events,
  initialCalendarSliceState,
  testEvent,
} from '../../fixtures/calendarState';

describe('Pruebas en el CalendarSlice', () => {
  test('Debe de regresar el estado por defecto', () => {
    expect(calendarSlice.getInitialState()).toEqual(initialCalendarSliceState);
  });

  test('"setActiveEvent" debe de activar un evento', () => {
    const state = calendarSlice.reducer(
      calendarSliceWithEventsState,
      setActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test('"onAddEvent" debe agregar un evento al store', () => {
    const state = calendarSlice.reducer(
      initialCalendarSliceState,
      onAddNewEvent({ ...events[0] })
    );

    expect(state.events).toHaveLength(1);
    expect(state.events[0]).toEqual(events[0]);
  });

  test('"onUpdateEvent" debe actualizar un evento del store', () => {
    const state = calendarSlice.reducer(
      initialCalendarSliceState,
      onAddNewEvent(testEvent)
    );

    expect(state.events[0].title).toBe('Cumpleaños del anfitrion');

    const updateStateEvent = calendarSlice.reducer(
      state,
      onUpdateEvent({ ...testEvent, title: 'Se cancela el cumpleaños' })
    );

    expect(updateStateEvent.events[0].title).toBe('Se cancela el cumpleaños');
  });

  test('"onDeleteEvent" debe eliminar un evento activo del store', () => {
    const state = calendarSlice.reducer(
      calendarSliceWithEventsState,
      setActiveEvent(events[0])
    );

    expect(state.activeEvent.id).toEqual(events[0].id);
    expect(state.events).toHaveLength(2);
    expect(state.events).toContain(events[0]);

    const newState = calendarSlice.reducer(state, onDeleteEvent());

    expect(newState.activeEvent).toBeNull();
    expect(newState.events).toHaveLength(1);
    expect(newState.events).not.toContain(events[0]);
  });

  test('"onLoadEvent" debe de establecer los eventos', () => {
    const state = calendarSlice.reducer(
      initialCalendarSliceState,
      onLoadEvents(events)
    );

    expect(state.events.length).toBeGreaterThan(1);
    expect(state.events).toEqual(events);
  });

  test('"OnLogoutCalendat" debe de reiniciar el state', () => {
    const state = calendarSlice.reducer(
      calendarSliceWithEventsState,
      setActiveEvent(events[0])
    );

    expect(state).toEqual(calendarSliceWithActiveEventState);

    const newState = calendarSlice.reducer(state, onLogoutCalendar());

    expect(newState).toEqual(initialCalendarSliceState);
  });
});
