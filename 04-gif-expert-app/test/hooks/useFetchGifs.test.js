import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";

describe('Pruebas en el custom hook useFetchGifs()', () => { 
    test('Debe regresar el estado inicial', () => { 
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, loading, hasError } = result.current;

        expect( images ).toHaveLength(0);
        expect( loading ).toBeTruthy();
        expect( hasError ).toBeNull(); 
    })    


    test('Debe retornar un arreglo de imagenes, loading en false y hasError en null', async () => { 
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        await waitFor(() => 
            expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, loading, hasError } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();
        expect( hasError ).toBeNull();

    })
})