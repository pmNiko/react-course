import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter.js";
import { act } from "react-dom/test-utils";

describe('Pruebas en useCounter', () => { 
    test('Deberia retornar los valores por defecto', () => { 
        const { result } = renderHook(useCounter);
        const { counter, decrement, increment, reset } = result.current;

        expect( counter   ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset     ).toEqual( expect.any( Function ) );
     })

    test('should generate counter with value 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect( counter ).toEqual(100);
    })
    
    // !! Al actualizar el estado de react debemos hacer uso del current value
    test('should incrememt counter con el current value', () => { 
        const { result } = renderHook( useCounter );
        
        expect( result.current.counter ).toEqual(10);
    
        act( result.current.increment );

        expect( result.current.counter ).toEqual(11);
    })
   
    test('should incrememt counter modificando la implementación del useCounter', () => { 
        const { result } = renderHook( useCounter );
        const { counter, increment } = result.current;
        
        expect( counter ).toEqual(10);
    
        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toEqual(13);
    })

    test('should decrement counter', () => { 
        const { result } = renderHook( useCounter );
        const { counter, decrement } = result.current;
        
        expect( counter ).toEqual(10);
        
        act( decrement );
        
        expect( result.current.counter ).toEqual(9);
    })

    test('should reset reinitialize counter', () => { 
        const { result } = renderHook( useCounter );
        const { increment, reset } = result.current;
        act( increment );
        
        expect( result.current.counter ).toEqual(11);
        
        act( reset );
        
        expect( result.current.counter ).toEqual(10);
    })

 })