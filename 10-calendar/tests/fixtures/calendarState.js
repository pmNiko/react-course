export const events = [
  {
    id: 1,
    start: new Date('2024-08-17 16:00:00'),
    end: new Date('2024-08-17 18:00:00'),
    title: 'Cumpleaños del anfitrion',
    notes: 'Se debe comprar un regalo.',
  },
  {
    id: 2,
    start: new Date('2024-08-18 16:00:00'),
    end: new Date('2024-08-18 18:00:00'),
    title: 'Aniversario del pueblo',
    notes: 'Habrá un increible desfile.',
  },
];

export const testEvent = {
  id: 1,
  start: new Date('2024-08-17 16:00:00'),
  end: new Date('2024-08-17 18:00:00'),
  title: 'Cumpleaños del anfitrion',
  notes: 'Se debe comprar un regalo.',
};

export const initialCalendarSliceState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarSliceWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarSliceWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
