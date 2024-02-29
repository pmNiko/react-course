import { render, screen } from "@testing-library/react"
import {GifItem}  from "../../src/components/GifItem.jsx"


describe('Pruebas en el componente <GifItem />', () => {
    const imageTest = {
        title: 'Valorant',
        url: 'https://media2.giphy.com/media/CRAYdoKFzxPeqj6Ncg/giphy-downsized-medium.gif?cid=d3ecfa3ag70cq956flr6qw8ajvhv2l7jcwhj4xse5cvflu32&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g'
    }

    test('Snapshot del componente', () => { 
       const { container } = render(<GifItem {...imageTest} />);

       expect(container).toMatchSnapshot();
    })    

    test('Debe mostrar la imagen con la url y el alt indicado', () => { 
        render(<GifItem {...imageTest} />);
        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe(imageTest.url);
        expect( alt ).toBe(imageTest.title);
     })

    test('Debe mostrar el titulo pasado por props', () => { 
        render(<GifItem {...imageTest} />);
       
        expect( screen.getByText(imageTest.title) ).toBeTruthy();
     })
});