
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import {GifItem} from './GifItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category, onRemoveCategory}) => {
  const {images, loading, hasError} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      { loading && <h2>Cargando...</h2> }

      { !!hasError && <RemoveGifButton removeCategory={onRemoveCategory} /> }

      <div className='card-grid' >
        {
          images.map(image => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}


GifGrid.propTypes = {
  category:           PropTypes.string.isRequired,
  onRemoveCategory:   PropTypes.func.isRequired
}