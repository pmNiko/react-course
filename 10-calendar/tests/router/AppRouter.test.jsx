import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from '../../src/router/AppRouter';
import { STATUS } from '../../src/store/auth/authSlice';
import { MemoryRouter } from 'react-router-dom';
import { CalendarPage } from '../../src/calendar';

jest.mock('../../src/hooks/useAuthStore');

jest.mock('../../src/calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>,
}));

describe('Pruebas en el AppRouter', () => {
  const mockCheckAuthToken = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe renderear h3 Cargando mienstras chequea la sesion', () => {
    useAuthStore.mockReturnValue({
      status: STATUS.Checking,
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);

    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toEqual(
      'Cargando...'
    );
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('Debe de mostrar el login en caso de no tener sesión activa', () => {
    useAuthStore.mockReturnValue({
      status: STATUS.No_Authenticated,
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth/que-no-existe']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText('Ingreso')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el calendario si está autenticado', () => {
    useAuthStore.mockReturnValue({
      status: STATUS.Authenticated,
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText('CalendarPage')).toBeTruthy();
  });
});
