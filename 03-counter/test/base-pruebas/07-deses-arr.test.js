import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr' 


describe('Pruebas en 07-deses-arr', () => { 
  
  test('Debe retornar un string y un número', () => { 
    const [letters, numbers] = retornaArreglo();

    expect( typeof letters).toBe('string');
    expect(letters).toEqual(expect.any(String));
    
    expect( typeof numbers).toBe('number');
    expect(numbers).toEqual(expect.any(Number));
  })
})