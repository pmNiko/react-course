import { addHours } from 'date-fns';
import { useUiStore, useCalendarStore } from '../../hooks';

const tempEvent = {
  title: '',
  notes: '',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Nikolas',
  },
};

export const FabAddNew = () => {
  const { onToggleDateModal } = useUiStore();
  const { showEventCalendar } = useCalendarStore();

  const handleClickModal = () => {
    showEventCalendar(tempEvent);
    onToggleDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickModal}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
