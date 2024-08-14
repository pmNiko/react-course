export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <span className="badge badge-pill badge-info">
      {title} - {user.name}
    </span>
  );
};
