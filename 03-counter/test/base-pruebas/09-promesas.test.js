import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => { 
  test('getHeroByIdAsync debe retornar un héroe', (done) => { 
    const id = 1;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toEqual(expect.any(Object));
        done(); // le informa a Jest que la Promise se ha resuelto
      });
  })

  test('getHeroByIdAsync debe obtener una excepción si el héroe no existe', (done) => { 
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
      })
      .catch((err) => {
        expect(err).toBe('No se pudo encontrar el héroe con el ID ' + id)
        done(); // le informa a Jest que la Promise se ha resuelto
      });
  })
})