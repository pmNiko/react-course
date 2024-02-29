import { act, fireEvent, renderHook, waitFor } from "@testing-library/react"
import { useHandleCategories } from "../../src/hooks/useHandleCategories"


describe('Pruebas en useHandleCategories()', () => { 

    const aCategory = 'One Punch';
    
    test('Debe devolver el estado inicial, contiene una categoria por defecto en el array: "One Punch"', async () => { 
        const { result } = renderHook( () => useHandleCategories() );        
        const { categories } = result.current;

        waitFor( () => 
            expect(result.current.categories.length).toBeGreaterThan(0)
        )

        expect( categories.at(0) ).toBe(aCategory);
    })
    
    test('El método omRemoveCategory() debe quitar la categoria que recibe como parametro', () => { 
        const { result } = renderHook( () => useHandleCategories() );        
        
        expect( result.current.categories.at(0) ).toBe(aCategory)
        
        act(() => result.current.onRemoveCategory(aCategory));

        expect( result.current.categories.at(0) ).toBeFalsy();
    })
})