(
  () => {
    const uri = 'http://api.giphy.com/v1/gifs/random';
    const API_KEY = 'ZM9yKPlFQDN5L7coTnMVtLOZOwdo7qrS';

    fetch(`${uri}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then( ({data}) => {

        const {url} = data.images.original;

        const img = document.createElement('img');

        img.src = url;

        document.body.append(img);

      })
      .catch(err => console.error(err))

  }
)()