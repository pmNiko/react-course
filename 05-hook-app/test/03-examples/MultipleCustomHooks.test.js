import { render } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";



describe('Pruebas en MultipleCustomHooks', () => { 
    test('Debe mostrar el componente por defecto', () => { 
        render(<MultipleCustomHooks/>);

    })
})