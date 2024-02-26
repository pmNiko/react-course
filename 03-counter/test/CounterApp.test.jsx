import  { fireEvent, render, screen }  from '@testing-library/react'; 
import  { CounterApp }  from '../src/CounterApp';

describe('Pruebas del componente <Counter />', () => { 

  const value = 100;
  const btnAdd = '+1'
  const btnSubstract = '-1'
  const btnReset = 'Reset'
  
  test('Debe hacer match con el snapshot', () => { 
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  })

  
  test('Debe debe mostrar el valor inicial de 100', () => { 
    const { container } = render(<CounterApp value={value} />);

    expect( screen.getByRole('heading', {level: 2} ).innerHTML ).toContain(value.toString());
  })

  test('Debe de incrementar con el boton +1', () => { 
    render(<CounterApp value={1} />); 

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toBe('1');

    fireEvent.click( screen.getByText(btnAdd) );

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toBe('2');
  })

  test('Debe de decrementar con el boton -1', () => { 
    render(<CounterApp value={10} />); 

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toBe('10');

    fireEvent.click( screen.getByText(btnSubstract) );

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toBe('9');
  })

  test('Debe regresar a su valor inicial con el boton "Reset"', () => { 
    render(<CounterApp value={0} />); 
    const btnAddName = screen.getByRole('button', {name: 'btn-add'});
    const btnResetName = screen.getByRole('button', {name: 'btn-reset'}); 
    for ( const i of Array(3) ) fireEvent.click( btnAddName );
    
    expect( screen.getByText( 3 ) ).toBeTruthy();
    
    fireEvent.click( btnResetName );

    expect( screen.getByText( 0 ) ).toBeTruthy();
  })
})