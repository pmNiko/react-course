import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LoginPage } from '@/auth/pages';
import { getFixtureStore } from '../../fixtures/store';

const mockStartGoogleSignIn = jest.fn();
const mockStartUserEmailAndPasswordSignIn = jest.fn();

jest.mock('@/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startUserEmailAndPasswordSignIn: ({ email, password }) => {
    return () => mockStartUserEmailAndPasswordSignIn({ email, password });
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

describe('Pruebas en <LoginPage/>', () => {
  beforeEach(() => jest.clearAllMocks());

  test('El componente debe renderizarse correctamente', () => {
    const store = getFixtureStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });

  test('Boton de Google debe de llamar el startGoogleSignIn', () => {
    const store = getFixtureStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-btn');
    // console.log(googleBtn.querySelector('p').textContent);

    fireEvent.click(googleBtn);

    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test('Submit debe de llamar "startUserEmailAndPasswordSignIn"', () => {
    const email = 'nikolas@gmail.com';
    const password = 'nikolas';

    const store = getFixtureStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: 'Correo' });
    const passwordField = screen.getByTestId('password');
    const form = screen.getByRole('form');

    // console.log(emailField.getAttribute('name'));

    fireEvent.change(emailField, { target: { name: 'email', value: email } });
    fireEvent.change(passwordField, {
      target: { name: 'password', value: password },
    });

    fireEvent.submit(form);

    expect(mockStartUserEmailAndPasswordSignIn).toHaveBeenLastCalledWith({
      email,
      password,
    });
  });
});
