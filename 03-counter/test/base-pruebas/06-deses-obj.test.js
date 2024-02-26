import { useContext } from '../../src/base-pruebas/06-deses-obj'

describe('Pruebas en 06-deses-obj', () => { 
  test('useContext deberia devolver un objeto', () => { 
    expect(typeof useContext({clave: 'Profesor X'})).toBe('object')
  })  


  test(`useContext retorna un objeto con las props: 
         - "nombreClave" 
         - "anios"
         - "latLong": {lat, long}
         - rango
    `, () => { 
    const clave = 'Profesor X';
    const nombre = 'Charles';
    const edad = 35;
    
    const objCtx = useContext({clave, nombre, edad});

    expect(objCtx.nombreClave).toBeDefined();
    expect(objCtx.anios).toBeDefined();
    expect(objCtx.latlng).toBeDefined();
  })

  test('Los parámetros: "nombre" y "rango" son despreciados.', () => { 
    const clave = 'Profesor X';
    const nombre = 'Charles';
    const edad = 35;
    const rango = 'Recluta'

    const objCtx = useContext({clave, nombre, edad, rango});

    expect(objCtx.nombre).toBeUndefined();
    expect(objCtx.rango).toBeUndefined();
  })

 
})