import { calendarApi } from '../../src/api';

describe('Pruebas en el CalendarAPI', () => {
  test('Debe de tener la configuración por defecto', () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test('Debe de tener el "Bearer" en el header de las peticiones', async () => {
    const token = 'ABC-123-XYZ';
    localStorage.setItem('token', token);

    const res = await calendarApi.get('/auth');

    expect(res.config.headers.Authorization).toContain('Bearer');
    expect(res.config.headers.Authorization).toBe('Bearer ' + token);
  });
});
