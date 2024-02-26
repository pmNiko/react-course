import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';



describe('Pruebas en 08-imp-exp', () => { 

  test('getHeroebyId debe retornar un heroe por ID', () => {

    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toBeDefined();
  })

  test('getHeroebyId retorna un objeto si matchea por ID', () => {

    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual(expect.any(Object));
  })

  

  test('getHeroebyId retorna "undefined" si no encuentra el heroe', () => {

    const id = 20;
    const hero = getHeroeById(id);

    expect(hero).toBeUndefined();
  })


  test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(3)
    expect(heroes.length).toEqual(3)
  })

  test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2)
    expect(heroes.length).toEqual(2)
  })


})