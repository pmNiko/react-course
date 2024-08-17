import { parseISO } from 'date-fns';

export const eventAdapter = (events) => {
  const eventAdapter = events.map((event) => {
    event.start = parseISO(event.start);
    event.end = parseISO(event.end);

    return event;
  });
  return eventAdapter;
};
