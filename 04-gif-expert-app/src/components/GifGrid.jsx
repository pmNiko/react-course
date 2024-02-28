import { GifItem } from './GifItem';
import { RemoveGifButton } from './RemoveGifButton';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category, onRemoveCategory}) => {
  const {images, loading, hasError} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      { loading && <p>Cargando...</p> }

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