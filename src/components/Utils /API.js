// export async function getImageData(query, page, perPage) {
//   const API_KEY = '6272575-a6aecd500098fe7c64ad99f92';
//   const BASE_URL = 'https://pixabay.com/api/';
//   const response = await fetch(
//     `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`
//   );

//   const images = await response.json();
//   return images;
// }
import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/6272575-a6aecd500098fe7c64ad99f92';
export const getImageData = async (query, page, perPage) => {
  const response = await axios.get();
};
