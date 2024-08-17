import { fireEvent, render, screen } from '@testing-library/react';
import { FabDelete } from '../../../src/calendar/components/FabDelete';
import { useCalendarStore } from '../../../src/hooks/useCalendarStore';
import { useUiStore } from '../../../src/hooks/useUiStore';

jest.mock('../../../src/hooks/useCalendarStore');
jest.mock('../../../src/hooks/useUiStore');

describe('Pruebas en el componete "FabDelete" ', () => {
  const mockStartDeletingEvent = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de renderizarse correctamente', () => {
    useUiStore.mockReturnValue({
      isDateModalOpen: false,
    });
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');

    expect(btn.style.display).toBe('none');
  });

  test('Debe mostrarse cuando hay un evento activo', () => {
    useUiStore.mockReturnValue({
      isDateModalOpen: false,
    });
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');

    expect(btn.style.display).toBe('');
  });

  test('Debe de llamar startDeletingEvent si hay evento activo', () => {
    useUiStore.mockReturnValue({
      isDateModalOpen: false,
    });
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeletingEvent: mockStartDeletingEvent,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');

    fireEvent.click(btn);

    expect(mockStartDeletingEvent).toHaveBeenCalled();
  });
});
