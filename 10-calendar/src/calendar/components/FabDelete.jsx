import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
  const { isDateModalOpen } = useUiStore();
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = async () => {
    startDeletingEvent();
  };

  return (
    <button
      aria-label="btn-delete"
      className="btn btn-danger fab-danger"
      style={{ display: hasEventSelected && !isDateModalOpen ? '' : 'none' }}
      onClick={handleDelete}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
