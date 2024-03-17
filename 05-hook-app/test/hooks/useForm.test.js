import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm.js"
import { act } from "react-dom/test-utils";



describe('Pruebas en useForm', () => { 

    const initialStateForm = { name: '', age: null, email: '' };
    const newValue = 'nikodev'; 

    test('El hook deberia retornar las propiedades por default', () => { 
        const { result } = renderHook( () => useForm(initialStateForm) );
        const { formState, onInputChange, onResetForm  } = result.current;

        expect( formState ).toEqual(initialStateForm);
        expect( formState ).toEqual( expect.any( Object ) );
        expect( onInputChange ).toEqual( expect.any( Function ) );
        expect( onResetForm ).toEqual( expect.any( Function ) );
    })    

    test('El hook deberia retornar las propiedades por default', () => { 
        const { result } = renderHook( () => useForm(initialStateForm) );
        const { name ,formState, onInputChange } = result.current;        

        expect( name ).toEqual('');
        expect( formState.name ).toEqual('');
        
        act( () => {
            onInputChange({ 
                target: { 
                    name: 'name', 
                    value: newValue 
                }
            })
        });
        
        expect( result.current.name ).toEqual(newValue);
        expect( result.current.formState.name ).toEqual(newValue); 
    })

    test('onResetChange deberia resetear el formulario', () => { 
        const { result } = renderHook( () => useForm(initialStateForm) );
        const { onInputChange, onResetForm } = result.current;  
        act( () => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        });

        expect( result.current.formState.name ).toEqual(newValue);

        act( onResetForm );

        expect( result.current.formState ).toEqual(initialStateForm);
    })
})