export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <span class="badge badge-pill badge-info">
      {title} - {user.name}
    </span>
  );
};
