import axios from 'axios';

const API_KEY = '29648912-89dde1f8cded3894fe14b017a';
// const API_KEY = '29561920-1065b6adaef0eaf94313a88f4'

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
