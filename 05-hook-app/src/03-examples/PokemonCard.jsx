import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {width, height} = h2Ref.current.getBoundingClientRect();
    setBoxSize({width, height});    
  }, [])

  return (
    <section style={{ height: 200, display: 'flex' }} >
        <h2 ref={h2Ref} className='text-capitalize' >#{ id } - { name }</h2>

        <div aria-label='sprite-images' >
            {
                sprites.map( sprite => (
                    <img data-testid={sprite} key={sprite} src={sprite} alt={sprite} />
                ) )
            }
        </div>
    </section>
  )
}
