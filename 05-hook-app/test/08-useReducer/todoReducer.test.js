import { todoReducer } from "../../src/08-reducer/todoReducer.js"


describe('Pruebas en el todoReducer', () => { 
    const initialState = [
        {   id: 1,  description: "Demo Todo",   done: false }
    ]

    const newTodo = { id: 2, description: "Este es el título de la nueva tarea!", done: false };

    test('Debe regresar el estado inicial', () => { 
        const newState = todoReducer( initialState, {} );

        expect( newState ).toBe( initialState );
     })

    test('Debe agregar una tarea', () => { 
        const action = { type: 'ADD', payload: newTodo }
        const newState = todoReducer( initialState, action )

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( newTodo );
    })
    
    test('Se debe eliminar una tarea', () => { 
        const deleteTodo = initialState.at(0)
        const action = { type: 'DELETE', payload: 1 }
        const newState = todoReducer( initialState, action )
        
        expect( newState.length ).toBe( 0 );
        expect( newState ).not.toContain( deleteTodo.id );
    })
    
    test('Se debe cambiar el estado de una tarea', () => { 
        expect( initialState.at(0).done ).toBeFalsy()

        const action = { type: 'DONE', payload: 1 }
        const newState = todoReducer( initialState, action )
        
        expect( newState.at(0).done ).toBeTruthy()
    })


 })