(
  () => {
    const uri = 'http://api.giphy.com/v1/gifs/random';
    const API_KEY = 'ZM9yKPlFQDN5L7coTnMVtLOZOwdo7qrS';

    const getImage = async () => {
      try {
        const resp = await fetch(`${uri}?api_key=${API_KEY}`)

        if (resp.status === 401) throw new Error('Invalid API key!');
  
        const { data } = await resp.json();
        
        return data.images.original.url;
        
      } catch (error) {
        console.log(error);
      }
    }

    const addImage = (imgUrl) => {
      if (!imgUrl) throw new Error('Could not find image!')
      const img = document.createElement('img');

      img.src = imgUrl;

      document.body.append(img);
    }
    

    getImage()
      .then(addImage) 
      .catch(console.error)
  }
)()