

describe('Pruebas de <DemoTest />', () => { 

  test('Esta prueba no debe fallar', () => { 
  
    // if (0 === 1) {
    //   throw new Error('No puede dividir entre cero.');
    // }
  
    //?? Inicialización 
    const message1 = 'Hola Mundo';
  
    // ** Estimulo
    const message2 = message1.trim();
  
    // ! Observar el comportamiento esperado
    expect( message1 ).toBe( message2 );
  })

})
