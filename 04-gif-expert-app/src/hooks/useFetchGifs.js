import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [loading, setLoading] = useState(true)
  const [images,  setImages ] = useState([])
  const [hasError, setHasError] = useState(null)

  const loadGifs = async () => {
    try {
      const gifs = await getGifs(category);

      if (gifs.length > 0) {
        setImages(gifs);   
      }else {
        throw new Error(`${category} has no gifs!`);       
      }
      
    } catch (error) {
      setHasError(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    loadGifs()
  }, [])
  
  return {
    images,
    loading,
    hasError
  }
}