import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid.jsx";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
    const category = 'Valorant';
    const onRemoveCategory = jest.fn();
    
    test('Muestra la categoria en un heading <H3>category</H3>', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
            hasError: null
        });
        render(<GifGrid category={category} onRemoveCategory={onRemoveCategory} />);  
        
        expect( screen.getByRole( 'heading', { level: 3 } ).innerHTML ).toBe(category); 
    });
    
    test('Debe mostrar el mensaje de "Cargando..." inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
            hasError: null
        });
        render(<GifGrid category={category} onRemoveCategory={onRemoveCategory} />);  

        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toBe('Cargando...'); 
    });

    test('Debe mostrar las imagenes cuando se recuperan mediante el hook useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitana',
                url: 'https://localhost/saitana.jpg'
            },
            {
                id: 'HJF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false,
            hasError: null
        });
        render(<GifGrid category={category} onRemoveCategory={onRemoveCategory} />);  

        expect( screen.getAllByRole('img') ).toHaveLength(2);
    })
})