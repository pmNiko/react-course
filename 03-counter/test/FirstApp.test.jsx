import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en el Componente <FirstApp/>', () => { 

  // ?? Genera un snapshot en la carpeta de snaps 
  // ?? Ojo porque se vuelve demasiado estricto
  // test('Debe hacer match con el snapshopt', () => { 
  //   const title = 'Hola soy Goku!'
  //   const { container } = render(<FirstApp title={title} /> )

  //   expect(container).toMatchSnapshot();  
  // });

  test('Debe mostrar el titulo en un h1', () => { 
    const title = 'Hola soy Goku!'
    const { container, getByText ,getByTestId } = render(<FirstApp title={title} /> )

    expect( getByText(title) ).toBeTruthy();
    
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect( getByTestId('test-title') ).toBeTruthy();
    expect( getByTestId('test-title').innerHTML ).toContain(title);
  });

  // test('Debe mostrar el subtitulo enviado por props', () => { 
  //   const title = 'Hola soy Goku!';
  //   const subtitle = 'Este es un subtitulo enviado por props';
  //   const { getByText } = render(
  //     <FirstApp 
  //       title={title} 
  //       subtitle={subtitle} 
  //     /> 
  //   );

  //   expect( getByText(subtitle) ).toBeTruthy();
  // });

  test('Debe mostrar el subtitulo 2 veces', () => { 
    const title = 'Hola soy Goku!';
    const subtitle = 'Este es un subtitulo enviado por props';
    const { getAllByText } = render(
      <FirstApp 
        title={title} 
        subtitle={subtitle} 
      /> 
    );

    expect( getAllByText(subtitle) ).toHaveLength(2)
  });

});