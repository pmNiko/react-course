import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en el archivo 02-template-string', () => { 

  test('getSaludo debe retorna el string "Hola Nikodev"', () => { 
    const name = 'Nikodev';
    const messageResturn = getSaludo(name);

    expect(messageResturn).toBe(`Hola ${name}`);
  })

})