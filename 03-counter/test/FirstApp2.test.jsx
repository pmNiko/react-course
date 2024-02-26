import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en el Componente <FirstApp/>', () => { 

  const title = 'Hola soy Goku!';
  const subtitle = 'Soy un subtitulo de pruebas.';

  test('Debe hacer match con el snapshopt', () => { 
    const { container } = render(<FirstApp title={title} /> )

    expect(container).toMatchSnapshot();  
  });

  test('Debe mostrar el titulo en un h1', () => { 
    render(<FirstApp title={title} /> )

    expect( screen.getByText(title) ).toBeTruthy();
    // screen.debug();
  });


  test('Debe mostrar el subtitulo en un h1', () => { 
    render(<FirstApp title={title} /> )
    
    expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain(title);
  })
  
  test('Debe de mostrar el subtitulo enviado por props', () => { 
    render(<FirstApp title={title} subtitle={subtitle} /> )
    
    expect( screen.getAllByText(subtitle) ).toHaveLength(2); 
  })


});