import axios from 'axios';

const API_KEY = '29648912-89dde1f8cded3894fe14b017a';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (q, page) => {
  const request = await axios.get('/', {
    params: {
      key: API_KEY,
      q,
      page,
      per_page: 12,
      orientation: 'horizontal',
    },
  });

  return request.data.hits;
};
