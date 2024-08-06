import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '@/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dbm9weddu',
  api_key: '427262516264187',
  api_secret: 'pvHix7jdpWOjZlTE1dyM01uWZT0',
  secure: true,
});

const imgUrl =
  'https://plus.unsplash.com/premium_photo-1669829646756-083a328c0abb?w=500';

describe.skip('Pruebas en fileupload', () => {
  test('Deberia subir la imagen a cloudinary', async () => {
    const resp = await fetch(imgUrl);

    const blob = await resp.blob();

    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
    expect(typeof url).toEqual(expect.any(String));

    // Get ID
    const imageID = url.split('/').at(-1).replace('.jpg', '');
    const cloudResp = await cloudinary.api.delete_resources([imageID]);

    // console.log(cloudResp);
  });

  test('Debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');

    const url = await fileUpload(file);

    expect(url).toEqual(null);
  });
});
