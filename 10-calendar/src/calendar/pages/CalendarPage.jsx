import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES, localizer } from '../../helpers';
import { useCalendarStore, useUiStore } from '../../hooks';
import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from '../components';

export const CalendarPage = () => {
  const { events, showEventCalendar } = useCalendarStore();
  const { onToggleDateModal } = useUiStore();
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const eventStyleGutter = (event, start, end, isSelected) => {
    // console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      marginBottom: 4,
    };

    return { style };
  };

  const onViewChanged = (event) => localStorage.setItem('lastView', event);

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, height: 'calc(100vh - 5.1rem)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGutter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onToggleDateModal}
        onSelectEvent={showEventCalendar}
        onView={onViewChanged}
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
